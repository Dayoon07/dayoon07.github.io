import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import AppLayout from '../layouts/AppLayout';

const router = createBrowserRouter(
    [{ element: <AppLayout />, children: routes }], 
    { basename: '/' }
);

export const AppRouter = () => <RouterProvider router={router} />;