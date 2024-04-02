import { Link } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'


export default function Drmtm({ drmtm }) {
    // const id = drmtm.url.split('/')[4]
    // console.log(id)
    const cheese = useLoaderData()
    console.log(cheese[0])


    return (
        <div>
            {/* <Link to={`drmtm/${drmtm}`}> */}
            <Link to={`drmtm/`}>
                <h1>
                    {/* {drmtm.name} */}
                    Hello World
                </h1>
            </Link>
        </div>
    )
}