import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import Home from './features/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/card',
    element: <div>The Flashcard displays here.</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
