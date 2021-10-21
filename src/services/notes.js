
const url = 'http://localhost:5000/notes';

export const getNotes = async () => {

    const resp =  await fetch(url);

    const data = await resp.json();

    return data;
};

export const getNotesById = async (id) => {

    if (id === 'new') {
        return ''
    }

    const resp =  await fetch(url+`/${id}`);

    const data = await resp.json();

    return data;

};

export const updateNote = async (id, note) => {
    await fetch(url+`/${id}`, {
        method:'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...note, 'update': new Date() })
    });
};

export const deleteNote = async (id, note) => {
    await fetch(url+`/${id}`, {
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    });
}

export const createNote = async (note) => {
    if (note.length === 0) {
        return
    }
    
    await fetch(url, {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    });
};