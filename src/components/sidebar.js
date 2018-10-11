import React from 'react'

const Sidebar = props => (
  <div
    style={{
      border: '2px solid #e6e6e6',
      maxWidth: 960,
      padding: '0.5rem',
      marginBottom: '25px',
      display: 'flex',
      flexDirection: 'column'
    }}
  >
    <strong>{props.title}.</strong> {props.description}
  </div>
)

export default Sidebar
