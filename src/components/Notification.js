import React from 'react'
import { useSelector } from 'react-redux'

const Notification = (props) => {
  const notification = useSelector((state) => state.notifications)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  }

  if (notification.length === 0 || notification.message === undefined) {
    return <div></div>
  } else if (notification === undefined) {
    return <div></div>
  } else {
    return <div style={style}>{notification.message}</div>
  }
}

export default Notification
