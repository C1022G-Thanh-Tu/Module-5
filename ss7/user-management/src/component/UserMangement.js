import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { userDeleteAction, userListAction } from '../redux/action/action'

function UserMangement() {
  let users = useSelector(state => state.userManagementState)
  const dispatch = useDispatch();
  useEffect (() => {
    users = dispatch(userListAction())
    console.log(users);
  },[])
  return (
    <>
      <h1>User List</h1>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Get Users
      </button>
      <div className="collapse" id="collapseExample">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Website</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                  <td>
                    <button type="button" className="btn btn-danger" onClick={() => dispatch(userDeleteAction(user.id))}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserMangement;
