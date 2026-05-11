import React, { useEffect, useState } from 'react'
import './components.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const UpdateTasks = () => {
    const navigate=useNavigate()
    const {id}=useParams()
    const[newtasks,setNewtask]=useState({
      tasks:"",
      date:""
     })
    useEffect(()=>{
      getTask()
    },[])
    
    const getTask=async()=>{
      const task= await axios.get(`http://localhost:5000/todo/getbyid/${id}`)
      const t = task.data.tasks;

     const formattedTask = {
     ...t, date: new Date(t.date).toISOString().split("T")[0] // "YYYY-MM-DD"
    };

  setNewtask(formattedTask);
    }
  
    const handleChange=({target:{name,value}})=>{
        setNewtask({...newtasks,[name]:value})
    }
  
    const handleSubmit=async(event)=>{
      event.preventDefault()
      const data= await axios.put(`http://localhost:5000/todo/update/${id}`,newtasks)
      if(data){
        navigate("/")
      }
    }

    const handleDelete=async()=>{
      const deletedData=await axios.delete(`http://localhost:5000/todo/delete/${id}`)
      console.log(deletedData)
      if(deletedData){
        navigate("/")
      }
    }

  return (
    <div class="parent" onSubmit={handleSubmit}>
        <form class="child">
            <div class="head">
               <h1 class="taskhead">Update Task</h1>
               <h3 class="deletetask" onClick={handleDelete}>Delete</h3>
            </div>
            <section class="task">
               <label for="taskname">What is to be done?</label>
               <input type="text" id="taskname" placeholder="Enter Task Here" name="tasks" value={newtasks.tasks} onChange={handleChange}></input>
            </section>
            <section class="due">
                <label for="duedate">Due date</label>
                <input type="date" id="duedate" name="date" value={newtasks.date} onChange={handleChange}></input>
            </section>
            <button type='submit' class="addbutton">Update Task</button>
        </form>
    </div>
  )
}

export default UpdateTasks