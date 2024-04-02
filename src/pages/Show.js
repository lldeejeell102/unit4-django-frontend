import { useLoaderData, Link, Form } from 'react-router-dom'

function Show(props) {
    const aPlayer = useLoaderData()
    console.log(aPlayer)
    const id = aPlayer.id

    return (
        <div>
            <h1>{aPlayer.name}</h1>
            <h2>{aPlayer.position}</h2>
            <h2>{aPlayer.age}</h2>
            <h3>{aPlayer.height}</h3>
            <h3>{aPlayer.salary}</h3>

            <div>
                {/* Update Form */}
                <Form action={`/update/${id}`} method='POST'>
                    <label htmlFor='name'>
                        Edit Your Player's Name
                        <input type='text' id='name' name='name' defaultValue={aPlayer.name}/>
                    </label>
                    
                    <label htmlFor='position'>
                        Edit Your Player's Position
                        <input type='text' id='position' name='position' defaultValue={aPlayer.position}/>
                    </label>

                    <label htmlFor='age'>
                        Edit Your Player's Age
                        <input type='number' id='age' name='age' defaultValue={aPlayer.age}/>
                    </label>

                    <label htmlFor='age'>
                        Edit Your Player's Height
                        <input type='number' id='height' name='height' defaultValue={aPlayer.height}/>
                    </label>

                    <label htmlFor='age'>
                        Edit Your Player's Salary
                        <input type='number' id='salary' name='salary' defaultValue={aPlayer.salary}/>
                    </label>
                    <button style={{"backgroundColor": "blue"}}>
                        Update Your Player
                    </button>
                </Form>
                
                {/* Delete Form */}
                <Form action={`/delete/${id}`} method='post'>
                    <button style={{"backgroundColor": "red"}}>
                        Delete Your Player
                    </button>
                </Form>
            </div>
            
            
            <Link to='/'>
                <button>
                    Go Back
                </button>
            </Link>
        </div>
    )
}

export default Show