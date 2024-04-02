import Player from '../componenets/Drmtm'
import { Form, useLoaderData } from 'react-router-dom'

function Index(props) {
    const allPlayers = useLoaderData()
    console.log(allPlayers)
    return (
        <div>
            <h1>
                Add a Player
            </h1>
            <Form action='/create' method='POST'>
                <label htmlFor='name'>
                    <input type='text' name='name' id="name"/>
                </label>
                <label htmlFor='age'>
                    <input type='text' name='age' id="age"/>
                </label>
                <label htmlFor='position'>
                    <input type='text' name='position' id="position"/>
                </label>
                <label htmlFor='salary'>
                    <input type='number' name='age' id="name"/>
                </label>
                <button>
                    Add New Player
                </button>
            </Form>
            <hr/>
            {allPlayers.map((player, i) => <Player player={player} key={i}/>)}
        </div>
    )
}

export default Index