import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './assets/Tailwind.css'
import Dashboard from './routes/Dashboard';
import ItemList from './routes/ItemList';
import Root from './routes/Root';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Dashboard /> },
        {
          path: "detail/:id",
          element: <ItemList />
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
