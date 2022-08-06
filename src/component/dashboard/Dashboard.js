import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from 'react-redux'

import './dashboard.css'
const Dashboard = () => {
  const [users, setUsers] = useState([])

  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    fetch('http://localhost:5000/api/userList')
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  return (
    <div className="dashboard-container">
      <p>
        <i className="fa fa-check-circle" aria-hidden="true"></i>{' '}
        <span>Welcome to Dashboard</span>
      </p>
      <div className="label">
        <div>
          {' '}
          <div className="sub-label">
            <div>
              <h5 style={{ width: '100%' }}>
                User Status:
                {auth.isAdmin === true ? (
                  <i
                    style={{ paddingLeft: '8px' }}
                    className="fa fa-key"
                    aria-hidden="true"
                  ></i>
                ) : (
                  ''
                )}
                {auth.isAdmin === true ? 'Admin' : 'User'}
              </h5>
              <h5>Department: Empty</h5>
            </div>
          </div>
          <div className="sub-label">
            <span>span 2</span>
          </div>
        </div>
        <div className="sub-label-right">
          <span>span 3</span>
        </div>
      </div>
      <p>
        <i className="fa fa-users" aria-hidden="true"></i>
        <span>User List</span>
      </p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th style={{}}>Status</th>
            <th style={{}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user.isAdmin === true ? (
                  <button
                    style={{
                      border: '0px solid blue',
                      borderRadius: '5px',
                      padding: '2px 3px 2px 3px',
                      width: '90px',
                      backgroundColor: '#20B2AA',
                      boxShadow:
                        'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                    }}
                  >
                    Admin
                  </button>
                ) : (
                  <button
                    style={{
                      border: '0px solid blue',
                      borderRadius: '5px',
                      padding: '2px 3px 2px 3px',
                      width: '90px',
                      backgroundColor: '#778899',
                      boxShadow:
                        'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                    }}
                  >
                    User
                  </button>
                )}
              </td>
              <td>
                <button
                  style={{
                    backgroundColor: '	#DC143C',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '2px 4px 2px 4px',
                    width: '80px',
                    boxShadow:
                      'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                    color: 'white',
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Dashboard
