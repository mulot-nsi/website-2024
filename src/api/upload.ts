import {put} from '@vercel/blob';

export async function POST(request: Request) {
    try {
        // Récupération des données du formulaire.
        const formData = await request.formData();

        // Validation des champs requis.
        const requiredFields = ['firstname', 'lastname', 'group', 'exercise_id', 'extension', 'suffix', 'file'];
        const missingFields = requiredFields.filter(field => !formData.get(field));
        if (missingFields.length > 0) {
            return new Response("Missing required fields", {status: 400});
        }

        // Récupération et transformation des données du formulaire.
        const data: Record<string, any> = {
            firstname: String(formData.get('firstname')).toLowerCase(),
            lastname: String(formData.get('lastname')).toLowerCase(),
            group: String(formData.get('group')),
            suffix: String(formData.get('suffix')),
            extension: String(formData.get('extension')).toLowerCase(),
            exercise_id: String(formData.get('exercise_id')),
            file: formData.get('file'),
        };

        // Construction du nom du fichier.
        const filename = `${data.exercise_id}/${data.group}/${data.suffix}__${data.firstname}_${data.lastname}.${data.extension}`;

        // Enregistrement du fichier dans le stockage Blob.
        const blob = await put(filename, data.file, {
            access: 'public',
            allowOverwrite: true,
            addRandomSuffix: false,
        });

        console.log(blob);

        return new Response(`Le fichier a été envoyé avec succès`, {status: 200});
    } catch (error) {
        console.error('Error saving file:', error.message);
        return new Response(`Une erreur s'est produite lors du traitement du fichier`, {status: 500});
    }
}