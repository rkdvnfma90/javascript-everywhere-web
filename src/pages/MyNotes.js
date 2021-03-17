import React, { useEffect } from 'react'

const MyNotes = () => {
  useEffect(() => {
    document.title = 'My Notes'
  })
  return (
    <div>
      <h1>MyNotes</h1>
      <p>MyNotes Page</p>
    </div>
  )
}

export default MyNotes
