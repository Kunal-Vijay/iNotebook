import React from 'react';
import AddNote from '../components/AddNote';
import Notes from '../components/Notes';

const Home = () => {
  return (
   <div className='container'>
    <AddNote/>
    <Notes/>
   </div>
  )
}

export default Home