import { Link } from 'react-router-dom'
// import { useLoaderData } from 'react-router-dom'


export default function Player({ player }) {
    const id = player.id
    // console.log(id)


    return (
        <div>
            <Link to={`/drmtm/${id}/`}>
                <h1>
                    {player.name}
                </h1>
            </Link>
        </div>
    )
}