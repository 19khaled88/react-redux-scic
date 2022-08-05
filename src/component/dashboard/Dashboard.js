import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from 'react-redux'

import './dashboard.css'
const Dashboard = () => {
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    fetch('http://localhost:5000/api/userList')
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, [])
  return (
    <div className="dashboard-container">
      <p>
        <i class="fa fa-check-circle" aria-hidden="true"></i>{' '}
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
    </div>
  )
}

export default Dashboard
