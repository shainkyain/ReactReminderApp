import axios from 'axios';
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';

const AddReminder = ({getMessages}) => {

    
    const [reminderMessage, setReminderMessage] = useState('');
    const navigate = useNavigate();
    const AddReminder = async () => {
         
        try {
            const response = await axios.post('http://localhost:8081/' , { message : reminderMessage });
             setReminderMessage('');
             getMessages();
             navigate('/');
          } catch (error) {
            console.error('Error adding reminder:', error);
          }
    }

  return (
    <div className='w-full h-[95%] bg-gray-100 flex justify-center p-10'>

        <div className='h-[80%] w-[80%] bg-red-50 flex flex-col justify-center items-center' >
                    <label className='p-3' >Reminder Message</label>
                    <textarea className='h-48 w-[90%] p-3 rounded-xl' type="text" placeholder='Reminder message'
                    value={reminderMessage}
                    onChange={(e) => setReminderMessage(e.target.value)} />
            <button onClick={AddReminder} className='border-2 p-1 bg-blue-400 mt-3 rounded-xl px-3 hover:text-white' >Add-Reminder</button>
        </div>
        
    </div>
  )
}

export default AddReminder