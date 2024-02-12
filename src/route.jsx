import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import ArchivedNotes from './pages/archived-notes';
import CreateNotes from './pages/create-notes';
import ShowNotes from './pages/show-notes';
import { AnonymousRoutes, ProtectedRoutes } from './components/routes';

const AppRoute = () => {
    return (
        <Routes>
            <Route path='*' element={<h1>Page not found!</h1>} />
            <Route element={<AnonymousRoutes />}>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Route>
            <Route element={<ProtectedRoutes />}>
                <Route path='/' element={<Home />} />
                <Route path='/archives' element={<ArchivedNotes />} />
                <Route path='/note/new' element={<CreateNotes />} />
                <Route path='/notes/:id' element={<ShowNotes />} />
            </Route>
        </Routes>
    );
};

export default AppRoute;
