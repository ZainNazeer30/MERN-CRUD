import React, { useEffect, useState } from 'react';
import './user.css';
import axios from "axios";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const User = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/users/api/get");
        setUsers(response.data.usersData);
      } catch (error) {
        console.log('error while fetching the data');
      }
    };
    fetchData();
  }, []);

  const deleteUser = async(userId) =>{
    await axios.delete(`http://localhost:8000/users/api/delete/${userId}`)
    .then((response) =>{
      setUsers((prevUser) => prevUser.filter((user) => user._id !==userId))
      toast.success(response.data.message,{position:'top-center'})
    })
    .catch((error) =>{
      console.log(error)
    })
  }

  return (
    <div className="UserTable">
      <Link to="/add" type="button" className="btn btn-primary">
        Add User <i className="fa-solid fa-user-plus"></i> 
      </Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope='col'>Sr.No</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Address</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id || index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td className='actionButtons'>
                <Link to={`/update/`+user._id } type="button" className="btn btn-info">
                  <i className="fa-solid fa-pen-to-square"></i>
                </Link>

                <button 
                onClick={()=> deleteUser(user._id)}
                type="button" className="btn btn-danger">
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;
