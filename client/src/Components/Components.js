import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from './Dashboard'
import AddTasks from './AddTasks'
import './components.css'
import UpdateTasks from './UpdateTasks'

const Components = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/addtask" element={<AddTasks />}></Route>
                <Route path="/updatetask/:id" element={<UpdateTasks />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Components