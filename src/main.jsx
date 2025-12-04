import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router';

import Home from './pages/Home.jsx'
import CharactersPage from './pages/CharactersPage.jsx';
import EpisodesPage from './pages/EpisodesPage.jsx';
import LocationsPage from './pages/LocationsPage.jsx';
import NotFound from './pages/NotFound.jsx';

import './index.css'
import CharacterDetailsPage from './pages/CharacterDetailsPage.jsx';

const router = createBrowserRouter([
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


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
