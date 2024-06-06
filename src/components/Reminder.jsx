import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaTrashCan } from "react-icons/fa6";
const Reminder = ({message , getMessages}) => {

const handleDelete =async (id) => {
 
     const confirmed = window.confirm('Are you sure you want to permanently delete this reminder?');
     if (confirmed) {
       try {
         await axios.delete(`http://localhost:8081/reminders/${id}`);
        //  alert('Reminder deleted');
         getMessages(); // Refresh the reminders list after deletion
       } catch (error) {
         console.error('Error deleting reminder:', error);
         alert('Failed to delete reminder');
       }
     }

}



  return (
    <div className='w-full min-h-[85vh] flex flex-col items-center    absolute top-[10vh]'> 
        <h1 className='text-center font-semibold text-2xl mb-4'>All Reminder's</h1>
                {
                    message.map((item ) => {
                        return(
                            <div className='bg-gray-600 w-[80%] relative  text-white font-medium p-2 pr-8 my-2' key={item.id}>
                                {item.message}
                                <button onClick={() => handleDelete(item.id)} className='absolute  left-[100%] bottom-2 hover:bg-red-500 rounded-full px-3 py-1 '><FaTrashCan /></button>
                            </div>

                        )
                    })
                }
         
             

    </div>
  )
}

export default Reminder