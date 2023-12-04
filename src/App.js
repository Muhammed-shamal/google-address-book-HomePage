import React from 'react';
import './App.css';
import Contacts from './pages/Contacts';
import Navbar from './Components/UI/Navbar';
import ErrorPage from './Components/UI/error-page';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  const router = createBrowserRouter([{

    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts",
        element: <Contacts />,
      },
    ],
  },])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;