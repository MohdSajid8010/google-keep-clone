
import React, { createContext, useContext, useState } from 'react'

const TaskContext = createContext();


//task array
let TaskArr = [
    { title: " title 1", content: "content 1", color: "" }
]

export const TaskContextprovider = (props) => {

    TaskArr = JSON.parse(localStorage.getItem("TaskArr")) || TaskArr;
    const [taskArr, settaskArr] = useState(TaskArr)
    const [editObj, setEditObj] = useState(null);//edited index
    const [editIndex, setEditIndex] = useState(null)
    const [newTask, setNewTask] = useState({ title: "", content: "" });
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [search, setSearch] = useState("")
    const [isGridview, setView] = useState(true)
    const [isClickMenuIcon, setIsClickedMenuIcon] = useState(false);


    return <TaskContext.Provider value={{
        taskArr, settaskArr, editObj, setEditObj, editIndex, setEditIndex, newTask, setNewTask,
        isFormOpen, setIsFormOpen, search, setSearch, isGridview, setView,
        isClickMenuIcon, setIsClickedMenuIcon
    }}>

        {props.children}

    </TaskContext.Provider>
}


export const useTaskContext = () => {
    return useContext(TaskContext);
};