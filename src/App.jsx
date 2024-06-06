 
import { useEffect, useState } from 'react';
import {Routes , Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Reminder from './components/Reminder'
import axios from 'axios';
import AddReminder from './components/AddReminder';

function App() {
 
  const [message , setMessage] = useState([]);
  const getMessages = async () =>{
    try {
      const response = await axios.get('http://localhost:8081/');
      setMessage(response.data);
    } catch (error) {
      console.error('Error fetching reminders:', error);
    }
  
      
      }
  
  useEffect(() => {
    return () => {
      getMessages();
    }
  }, [])
  
  return (
    <>
    <div className='w-full h-[100vh]  overflow-y-auto' style={{ backgroundImage : `url("https://images.unsplash.com/photo-1717620378082-b2b48c2a8b93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`, 
     backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
 }}>
    <Navbar />
  <Routes> 
      <Route path='/'  element={  <Reminder message={message} getMessages={getMessages} />     } />       
      <Route path='/add' element={ <AddReminder getMessages={getMessages} />} />
  </Routes>
     </div>
    </>
  )
}

export default App
