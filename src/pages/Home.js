import React from 'react'
import { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'
const Home = () => {
  const app = useContext(noteContext);
  useEffect(() => {
    app.update();
  },[])
  return (
    <div  >
      This is home page of {app.state.name}
    </div >
  )
}

export default Home