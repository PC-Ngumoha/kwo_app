import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import Home from './features/Home/Home';
import Card from './features/Card/Card';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/card',
    element: <Card />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
