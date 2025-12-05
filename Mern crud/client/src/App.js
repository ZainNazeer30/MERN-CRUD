import './App.css';
import User from './getusers/user';
import AddUser from './addUsers/addUser';
import {createBrowserRouter,  RouterProvider } from "react-router-dom"
import UpdateUser from './updateUser/UpdateUser';
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />
    },
    {
      path: '/add',
      element: <AddUser />
    },
    {
      path: '/update/:id',
      element: <UpdateUser />
    }
  ])
  return (
    <div className='App'>
     <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
