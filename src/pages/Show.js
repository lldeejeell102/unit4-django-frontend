import { useLoaderData, Link, Form } from 'react-router-dom'

function Show(props) {
    const aPlayer = useLoaderData()
    console.log(aPlayer)
    const id = aPlayer.id

    return (
        <div>
            <div className="player-box">
                <h1>{aPlayer.name}</h1>
                <h2>Position: {aPlayer.position}</h2>
                <h2>Age: {aPlayer.age}</h2>
                <h3>Height: {aPlayer.height}cm</h3>
                <h3>Salary: ${aPlayer.salary}M</h3>
            </div>

            <div>
                {/* Update Form */}
                <Form action={`/update/${id}`} method='PUT' className="update-form">
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
                    <button className='update-btn'>
                        Update Your Player
                    </button>
                </Form>
                
                <hr/>
                {/* Delete Form */}
                <Form action={`/delete/${id}`} method='post'>
                    <button className='delete-btn'>
                        Delete Your Player
                    </button>
                </Form>
            </div>
            
            
            <Link to='/'>
                <button className='goback-btn'>
                    Go Back
                </button>
            </Link>
        </div>
    )
}

export default Show