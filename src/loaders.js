const URL="https://unit4-django-backend.onrender.com"

export const drmtmLoader = async () => {
    const response = await fetch(`${URL}/drmtm/`)
    const drmtm = await response.json()
    return drmtm
}

export const playerLoader = async({ params }) => {
    const response = await fetch(`${URL}/drmtm/${params.id}/`)
    const player = await response.json()
    return player
}