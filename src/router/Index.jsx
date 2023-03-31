import { createBrowserRouter } from "react-router-dom";

import LayoutPublic from '../layout/LayoutPublic';

import Home from '../pages/Home';
import Reportes from '../pages/Reportes';
import Detalle from '../pages/Detalle';
import Publicar from '../pages/Publicar';
import Perfil from '../pages/Perfil';
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,        
            },
            {
                path: '/reportes',
                element: <Reportes />,
            },
            {
                path: '/reportes/:detalle',
                element: <Detalle />,
            },
            {
                path: '/publicar',
                element: <Publicar />,
            },
            {
                path: '/perfil',
                element: <Perfil />,
            },
        ]
    },


])