class ExerciseForm {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.formHash = '';
        this.storageKey = '';
        this.init();
    }

    init() {
        this.initStorageKey();
        this.loadSavedData();
        this.setupEventListeners();
    }

    initStorageKey() {
        const exerciseIdField = this.form.querySelector('[name="exercise_id"]');
        if (!exerciseIdField) {
            console.error('Le champ exercise_id est requis');
            return;
        }
        this.storageKey = `exercise_${exerciseIdField.value}`;
        console.log(this.storageKey);
    }

    loadSavedData() {
        const savedData = localStorage.getItem(this.storageKey);
        if (savedData) {
            const data = JSON.parse(savedData);
            Object.entries(data).forEach(([name, value]) => {
                const input = this.form.querySelector(`[name="${name}"]`);
                if (input) {
                    input.value = value;
                }
            });
        }
    }

    setupEventListeners() {
        // Sauvegarder à chaque changement
        this.form.addEventListener('input', (e) => {
            if (e.target.matches('input, textarea')) {
                this.saveFormData();
            }
        });

        this.form.addEventListener('click', (e) => {
            if (e.target.matches('button')) {
                this.uploadFile(e.target);
            }
        });

        this.form.addEventListener('change', (e) => {
            if (e.target.matches('select')) {
                this.saveFormData();
            }
        });

        // Sauvegarder à la perte de focus
        this.form.addEventListener('blur', (e) => {
            if (e.target.matches('input, textarea')) {
                this.saveFormData();
                this.doSendForm();
            }
        }, true);
    }

    uploadFile(element) {
        console.log("Uploader - Start");
        const uploader = element.closest('.uploader');
        const fileInput = uploader.querySelector('input');
        const output = uploader.querySelector('.output');

        // Réinitialisation du champ output
        output.classList.remove('error');
        output.classList.remove('success');

        if (fileInput.files.length === 0) {
            output.textContent = 'Vous devez choisir un fichier à transmettre';
            output.classList.add('error');
            return;
        }

        const data = this.getFormData();
        const file = fileInput.files[0];

        // Récupération d'extension du fichier
        const fileName = fileInput.files[0].name;
        const extension = fileName.split('.').pop().toLowerCase();

        const formData = new FormData();
        formData.append('firstname', data.firstname);
        formData.append('lastname', data.lastname);
        formData.append('group', data.group);
        formData.append('exercise_id', data.exercise_id);
        formData.append('extension', extension);
        formData.append('suffix', element.getAttribute('data-suffix'));
        formData.append('file', file);

        output.textContent = "Envoi du fichier en cours...";

        fetch('/api/upload', {method: 'POST', body: formData})
            .then(response => {
                output.classList.add(response.ok ? 'success' : 'error');
                return (response.status !== 404) ? response.text() : 'Erreur technique : l\'API n\'est pas disponible';
            })
            .then(text => {
                output.textContent = text;
            })
            .catch(error => {
                output.classList.add('error');
                output.textContent = error;
            });
    }

    saveFormData() {
        const formData = this.getFormData();
        localStorage.setItem(this.storageKey, JSON.stringify(formData));
        console.log('Données sauvegardées:', formData);
    }

    async sendForm() {
        const newFormHash = await this.getFormHash();
        if (newFormHash === this.formHash) {
            return;
        }

        this.formHash = newFormHash;
        const formData = new FormData(this.form);
        const action = this.form.getAttribute('action');

        const response = await fetch(action, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            console.error(`Erreur HTTP: ${response.status}`);
        }
    }

    doSendForm() {
        this.sendForm().then(result => {
            console.log('OK');
        }).catch(error => {
            console.error('Erreur:', error);
        });
    }

    getFormData() {
        const data = {};
        const formElements = this.form.elements;
        for (let element of formElements) {
            if (element.name) {
                data[element.name] = element.value;
            }
        }
        return data;
    }

    async getFormHash() {
        const data = JSON.stringify(this.getFormData());

        // Génère le hash avec SHA-256
        const msgBuffer = new TextEncoder().encode(data);
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

        // Convertit le buffer en chaîne hexadécimale
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }
}

// Initialiser le formulaire
document.addEventListener('DOMContentLoaded', () => {
    const form = new ExerciseForm('exercise');
});