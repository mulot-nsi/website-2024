const {GristDocAPI} = require('grist-api');
const DOC_URL = "ipkGJFyqxKL5";

async function prepareData(formData: FormData) {
    const data: Record<string, any> = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    data.Saisie_Nom = data.Saisie_Nom.toLowerCase();
    data.Saisie_Prenom = data.Saisie_Prenom.toLowerCase();

    return data;
}


export async function POST(request: Request) {
    try {
        // Récupération des données du formulaire.
        const formData = await request.formData();
        const gristTable = formData.get('exercise_id') as string;
        formData.delete('exercise_id');

        // Préparation des données à sauvegarder.
        const data = await prepareData(formData);

        // Connexion à Grist et ajout des données.
        const api = new GristDocAPI(DOC_URL, {server:"https://grist.numerique.gouv.fr",apiKey:''});

        console.log('Saving exercise data:', data);

        if (data.id !== undefined && data.id !== '') {
            data.id = Number(data.id);
            await api.updateRecords(gristTable, [data]);
            return new Response(data.id, { status: 200 });
        }
        else {
            const ids = await api.addRecords(gristTable, [data]);
            return new Response(ids[0], { status: 200 });
        }
    } catch (error) {
        console.error('Error saving exercise data:', error instanceof Error ? error.message : error);
        return new Response(`Error during saving data`, { status: 500 });
    }   
}