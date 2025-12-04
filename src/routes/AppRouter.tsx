import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home';
import CharactersPage from '../pages/CharactersPage';
import CharacterDetailsPage from '../pages/CharacterDetailsPage';
import EpisodesPage from '../pages/EpisodesPage';
import LocationsPage from '../pages/LocationsPage';
import NotFound from '../pages/NotFound';

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
