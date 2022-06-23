import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

const About = () => {
  const app = useContext(noteContext)
  useEffect(() => {
    app.update();
  },[])
  return (
    <div>
      This is about page of {app.state.name}
    </div>
  )
}

export default About