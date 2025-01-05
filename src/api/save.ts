import { neon } from '@neondatabase/serverless';

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined');
}

const sql = neon(process.env.DATABASE_URL);

async function nextVersion(firstname: string, lastname: string, exercise_id: string): Promise<number> {
    try {
        const query = `
          SELECT COALESCE(MAX(version), 0) + 1 as next_version
          FROM exercises
          WHERE firstname   = $1
            AND lastname    = $2
            AND exercise_id = $3
        `;
    
        const result = await sql(query, [firstname, lastname, exercise_id]);
        return result[0].next_version;
    
      } catch (error) {
        console.error('Error getting next version:', error.message);
        throw new Error('Failed to get next version');
      }
}

async function prepareData(formData: FormData) {
    const data: Record<string, any> = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    const record: Record<string, any> = {
        firstname: data.firstname,
        lastname: data.lastname,
        group: data.group,
        exercise_id: data.exercise_id,
        data: data,
        version: await nextVersion(data.firstname, data.lastname, data.exercise_id)
    };

    return record;
}

function insertData(record: Record<string, any>) {
    const query = `
        INSERT INTO exercises
        (firstname, lastname, "group", exercise_id, data, version)
        VALUES ($1, $2, $3, $4, $5, $6)
    `;

    return sql(query, [
        record.firstname,
        record.lastname,
        record.group,
        record.exercise_id,
        record.data,
        record.version
    ]);
}

export async function POST(request: Request) {
    try {
        // Récupération des données du formulaire.
        const formData = await request.formData();

        // Validation des champs requis.
        const requiredFields = ['firstname', 'lastname', 'group', 'exercise_id'];
        const missingFields = requiredFields.filter(field => !formData.get(field));
        if (missingFields.length > 0) {
            return new Response("Missing required fields", { status: 400 });
        }

        // Préparation des données pour l'insertion.
        const record = await prepareData(formData);
        
        // Insertion des données.
        await insertData(record);

        return new Response(`Donnés enregistrées avec succès`, { status: 200 });
    } catch (error) {
        console.error('Error saving exercise data:', error.message);
        return new Response(`Error during saving data`, { status: 500 });
    }
}