import React from 'react'
import './dashboard.css'
const Dashboard = () => {
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
            <span>span 1</span>
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
