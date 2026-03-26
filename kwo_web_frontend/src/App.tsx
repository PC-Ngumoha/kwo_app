import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import Home from './features/Home/Home';
import Lesson from './features/Lesson/Lesson';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/lesson',
    element: <Lesson />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
