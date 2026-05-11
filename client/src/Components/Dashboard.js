import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Dashboard = () => {
  const[task,settask]=useState([])
  useEffect(()=>{
    getTasks()
  },[])

  const getTasks= async ()=>{
    const data= await axios.get("http://localhost:5000/todo/getall")
     const formattedTasks = data.data.tasks.map(t => ({
    ...t,
    date: new Date(t.date).toISOString().split("T")[0]
  }));

  settask(formattedTasks);
  }

  const handleDelete=async(id)=>{
      const deletedData=await axios.delete(`http://localhost:5000/todo/delete/${id}`)
      if(deletedData){
        getTasks()
      }
    }
  return (
    <div>
        <div class="background"></div>
        <div class="content">
           <h1 class="heading">Plan & Do</h1>
           <Link to="/addtask">
              <i class="fa-solid fa-circle-plus" id="button"></i>
            </Link>
       </div>
       <div>
         {task.map((item) => {
          const today = new Date().toISOString().split("T")[0];
          const isExpired = item.date < today;
          return(
          <div className="display"  >
            <section className="disTask" key={item._id}>
              <input type="radio" id={`task-${item._id}`} onClick={()=>{handleDelete(item._id)}} />
              <label htmlFor={`task-${item._id}`} style={{ color: isExpired ? "red" : "black" }}>{item.tasks}</label><br/>
              <label htmlFor={`task-${item._id}`} id="disDate" style={{color:isExpired ? "red" : "black"}}>{item.date}</label>
              <Link to={`/updatetask/${item._id}`}>
                  <i class="fa-solid fa-arrow-rotate-right" id="icon"></i>
              </Link>
            </section>
          </div>
        )})}
       </div>
    </div>
  )
}

export default Dashboard