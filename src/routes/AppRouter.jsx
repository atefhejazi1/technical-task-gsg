import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home.jsx'
import CharactersPage from '../pages/CharactersPage.jsx';
import CharacterDetailsPage from '../pages/CharacterDetailsPage.jsx';
import EpisodesPage from '../pages/EpisodesPage.jsx';
import LocationsPage from '../pages/LocationsPage.jsx';
import NotFound from '../pages/NotFound.jsx';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/characters",
        element: <CharactersPage />,
    },
    {
        path: "/character/:id",
        element: <CharacterDetailsPage />,
    },
    {
        path: "/episodes",
        element: <EpisodesPage />,
    },
    {
        path: "/locations",
        element: <LocationsPage />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);