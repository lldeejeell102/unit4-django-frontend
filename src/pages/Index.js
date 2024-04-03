import Player from '../componenets/Drmtm'
import { Form, useLoaderData } from 'react-router-dom'

function Index(props) {
    const allPlayers = useLoaderData()
    console.log(allPlayers)
    return (
        <div>
            <h1>
                Create Your DRMTM (Dream Team)
            </h1>
            <div className="index-form">
                <Form action='/create' method='POST' className="form">
                    <div className="index-name-field">
                        <label htmlFor='name'>
                            <input type='text' name='name' id="name" placeholder="player name"/>
                        </label>
                    </div>
                    <div className="index-position-field">
                        <label htmlFor='position'>
                            <input type='text' name='position' id="position" placeholder="position (PG, SG, etc)"/>
                        </label>
                    </div>
                    <div className="index-age-field">
                        <label htmlFor='age'>
                            <input type='text' name='age' id="age" placeholder="age"/>
                        </label>
                    </div>
                    <div className="index-height-field">
                        <label htmlFor='height'>
                            <input type='text' name='height' id="height" placeholder="height (in CMs)"/>
                        </label>
                    </div>
                    <div className="index-salary-field">
                        <label htmlFor='salary'>
                            <input type='number' name='salary' id="salary" placeholder="salary (in Millions)"/>
                        </label>
                    </div>
                    <div className="index-btn">
                        <button>
                            To the DRMTM
                        </button>
                    </div>
                </Form>
            </div>
            <hr/>
            {allPlayers.map((player, i) => <Player player={player} key={i}/>)}
        </div>
    )
}

export default Index