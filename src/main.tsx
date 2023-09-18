import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from 'react-router-dom';
import { concerts } from './data';
import './index.css';

import App from './App.tsx';
import ConcertList from './components/ConcertList/ConcertList.tsx';
import Form from './components/Form/Form.tsx';

// Configure routes
const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <ConcertList concerts={concerts} />
      },
      {
        path: '/create',
        element: <Form />
      }
    ]
  }
];

// Create router from defined routes
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
