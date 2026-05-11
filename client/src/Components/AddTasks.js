import React, { useState } from 'react'
import './components.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddTasks = () => {
   const navigate=useNavigate()
   const[newtasks,setNewtask]=useState({
    tasks:"",
    date:""
   })

   const handleChange=({target:{name,value}})=>{
      setNewtask({...newtasks,[name]:value})
   }

   const handleSubmit=async(event)=>{
    event.preventDefault()
    const {tasks,date}=newtasks
    const data= await axios.post("http://localhost:5000/todo/create",
      {
        tasks,
        date
      }
    )
    if(data){
      navigate("/")
    }
   }

  return (
    <div class="parent">
        <form class="child" onSubmit={handleSubmit}>
            <h1 class="taskhead">New Task</h1>
            <section class="task">
               <label for="taskname">What is to be done?</label>
               <input type="text" id="taskname" placeholder="Enter Task Here" name="tasks"onChange={handleChange}></input>
            </section>
            <section class="due">
                <label for="duedate">Due date</label>
                <input type="date" id="duedate" name="date" onChange={handleChange}></input>
            </section>
            <button type="submit" class="addbutton">Add Task</button>
        </form>
    </div>
  )
}

export default AddTasks