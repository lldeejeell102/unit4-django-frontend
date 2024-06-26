import { createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import App from './App'
import Index from './pages/Index'
import Show from './pages/Show'
import { drmtmLoader, playerLoader } from './loaders'
import { createAction, updateAction, deleteAction } from './actions'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route path='' element={<Index/>} loader={drmtmLoader} />
            <Route path='drmtm/:id' element={<Show/>} loader={playerLoader} />
            <Route path='create' action={createAction} />
            <Route path='update/:id' action={updateAction} />
            <Route path='delete/:id' action={deleteAction} />
        </Route>
    )
)

export default router