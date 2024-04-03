import { redirect } from 'react-router-dom'

const URL="https://unit4-django-backend.onrender.com"

export const createAction = async({request}) => {
    const formData = await request.formData()

    const newPlayer = {
        name: formData.get('name'),
        position: formData.get('position'),
        age: formData.get('age'),
        height: formData.get('height'),
        salary: formData.get('salary'),
    }

    await fetch(`${URL}/drmtm/`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPlayer)
    })

    return redirect('/')
}



export const updateAction = async({request, params}) => {
    const formData = await request.formData()
    const id = params.id
    const updatedPlayer = {
        name: formData.get('name'),
        position: formData.get('position'),
        age: formData.get('age'),
        height: formData.get('height'),
        salary: formData.get('salary'),
    }

    await fetch(`${URL}/drmtm/${id}/`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(updatedPlayer)
    })

    return redirect('/')
}

export const deleteAction = async ({params}) => {
    const id = params.id
    await fetch(`${URL}/drmtm/${id}/`, {
        method: 'DELETE'
    })

    return redirect('/')
}