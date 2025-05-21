---
title: TP3 - Web Interactif
description: Interactivité sur une page web
---

# Web Interactif

## Introduction

Ces travaux pratiques ont pour objectif de vous faire découvrir le langage Javascript dans le but de réaliser une IHM (*Interface Homme-Machine*) web.

## Préparation

### Espace de travail

Vous allez créer des dossiers afin de ne pas mélanger vos productions numériques entre vos différentes matières et
travaux pratiques.

!!! note "Organisation de l'espace travail"

    === ":material-laptop: Ordinateur portable"

        1. Lancez l'application <i class="icon file-explorer"></i> **Explorateur de fichiers** 
           <span class="keys shortcut"><kbd>:fontawesome-brands-windows:</kbd><span>+</span><kbd>E</kbd></span>
        2. Dans le dossier `Document`, s'il n'y a pas de dossier nommé `NSI`, créez-le
        3. Dans le dossier `NSI`, s'il n'y a pas de dossier nommé `chapitre_14`, créez-le
        4. Dans le dossier `chapitre_14` créez le dossier `tp3_javascript`

    === ":material-desktop-tower: Ordinateur fixe"

        1. Depuis le bureau, double-cliquez sur l'icône intitulée **Zone personnelle**
        2. Dans la **zone personnelle**, s'il n'y a pas de dossier `NSI`, créez-le
        3. Dans le dossier `NSI`, s'il n'y a pas de dossier nommé `chapitre_14`, créez-le
        4. Dans le dossier `chapitre_14` créez le dossier `tp3_javascript`

### Documentation

 Il n’est pas nécessaire de consulter ces ressources immédiatement, mais elles pourront vous être utiles par la suite :

- [:material-link: Mozilla MDN](https://developer.mozilla.org/fr/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity){:target="_blank"}
- [:material-link: Grafikart](https://grafikart.fr/formations/formation-javascript){:target="_blank"}

## Études de cas

### Cas 1 - Javascript bloquant

!!! example "Code source"

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Exemple 1</title>
        <script>
            let saisie = prompt("Quel est ton prénom ?");
            console.log(saisie);
            alert("Bonjour " + saisie + " !");
        </script>
    </head>
    <body>
        <h1>Exemple 1 - Code Javascript bloquant</h1>
        <p>
            La demande d'une saisie de l'utilisateur a provoqué 
            le blocage du traitement du code HTML
        </p>
    </body>
    </html>
    ```

!!! note "Consigne"

    1. Téléchargez le fichier `exemple1.html` : [:material-download: télécharger](assets/exemple1.html){:download="exemple1.html"}
    2. Ouvrez le fichier dans un navigateur web
    3. Répondez à la question
    4. Ouvrez la console javascript (fonction *Inspecter la page* puis onglet *Console*)
    5. Rechargez la page et observez l'affichage de votre saisie dans la console
    6. N'hésitez pas à expérimenter en modifiant le fichier *(avec un édietr

### Cas 2 - Lancement selon un événement

!!! example "Code source"

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Exemple 2</title>
        <script>
            function demander_prenom() {
                let saisie = prompt("Quel est ton prénom ?");
                console.log(saisie);
                document.getElementById("message").innerHTML = "Bonjour <strong>" + saisie + "</strong> !";
            };
        </script>
    </head>
    <body>
        <h1>Exemple 2 - Code Javascript non bloquant</h1>
        <p><input type="button" value="Lancer le programme" onclick="demander_prenom()"></p>
        <p id="message"></p>
    </body>
    </html>
    ```

!!! note "Consigne"

    1. Téléchargez le fichier `exemple2.html` : [:material-download: télécharger](assets/exemple2.html){:download="exemple2.html"}
    2. Ouvrez le fichier dans un navigateur web
    3. Cliquez sur le bonton pour lancer le programme
    4. Observez et comprenez comment le javascript agit sur le contenu de la page
    5. Modifiez le code de façon à ce qu'on puisse lancer le programme en cliquant n'importe où sur la page


### Cas 3 - Récupération d'une saisie

!!! example "Code source"

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Exemple 3</title>
        <script>
            function traiter_prenom() {
                let saisie = document.getElementById("prenom").value;
                console.log(saisie);
                document.getElementById("message").innerHTML = "Bonjour <strong>" + saisie + "</strong> !";
            };
        </script>
    </head>
    <body>
        <h1>Exemple 3 - Interface web</h1>
        <p>
            Prénom <input type="text" id="prenom">
            <input type="button" value="Lancer le programme" onclick="traiter_prenom()"></p>
        <p id="message"></p>
    </body>
    </html>
    ```

!!! note "Consigne"

    1. Téléchargez le fichier `exemple3.html` : [:material-download: télécharger](assets/exemple3.html){:download="exemple3.html"}
    2. Ouvrez le fichier dans un navigateur web
    3. Saisissez un texte et cliquez sur le bouton pour lancer le programme
    4. Observez et comprenez comment le javascript récupère la valeur du champ de saisie
    5. Modifiez le code en ajoutant un champ de saisie du **nom** et en affichant le prénom et le nom sur la page au lancement du programme

### Cas 4 - Détection d'une saisie

!!! example "Code source"

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Exemple 3</title>
        <script>
            function traiter_prenom() {
                // On demande à l'utilisateur de saisir son prénom.
                let saisie = document.getElementById("prenom").value;
    
                // On affiche le prénom dans la console javascript accessible depuis le mode développeur du navigateur.
                console.log(saisie);
    
                // Écriture du message dans la page HTML
                if (saisie) {
                    document.getElementById("message").innerHTML = "Bonjour <strong>" + saisie + "</strong> !";
                } else {
                    document.getElementById("message").innerHTML = "";
                }
    
                // Changement de la couleur du texte selon la longueur du prénom
                if (saisie.length > 6) {
                    document.getElementById("message").style.color = "red";
                } else {
                    document.getElementById("message").style.color = "";
                }
            }
        </script>
    </head>
    <body>
    <h1>Exemple 4 - Interface web</h1>
    <p>
        Prénom <input type="text" id="prenom" onkeyup="traiter_prenom()">
    </p>
    <p id="message"></p>
    </body>
    </html>
    ```

!!! note "Consigne"

    1. Téléchargez le fichier `exemple4.html` : [:material-download: télécharger](assets/exemple4.html){:download="exemple4.html"}
    2. Ouvrez le fichier dans un navigateur web
    3. Saisissez un long texte et observez le changement de style
    4. Modifiez le code en changeant de style non plus en fonction de la longueur du texte mais si un ou plusieurs mots interdits (de votre choix) sont présents dans la saisie utilisateur
    5. Bonus - Appliquez le style uniquement sur les mots interdits

## Mise en oeuvre

Vous allez maintenant créer (encore une fois) le jeu du nombre secret, dont voici les règles :

!!! tip "Règles du jeu"

    - L'ordinateur choisit un aléatoirement un nombre entier compris entre 0 et 100
    - L'utilisateur doit réussir à le retrouver en transmettant ses tentatives

!!! note "Instructions"

    1. Rendez-vous dans Capytale : [:material-link: Capytale](https://capytale2.ac-paris.fr/web/c/a4a8-6703616){:target="_blank"}
    2. Commencez par créer et placer tous les composants graphiques
    3. Implémentez l'interactivité en Javascript

