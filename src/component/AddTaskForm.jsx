import { Tooltip } from '@mui/material'
import { useTaskContext } from '../context/TaskContext';
import { useState } from 'react';
import { ColorPickerModalForAdd } from './ColorPickerModalForAdd';
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoMdColorPalette } from "react-icons/io";

import "../styles/addTaskForm.css"

const AddTaskForm = () => {

    const { isFormOpen, newTask, setNewTask, setIsFormOpen, taskArr, settaskArr } = useTaskContext();
    const [isColorPickerOpen, setIsColorPickerOpen] = useState(false)


    function handleAdd() {
        if (newTask.content) {
            taskArr.unshift(newTask)

            settaskArr([...taskArr])
            localStorage.setItem("TaskArr", JSON.stringify(taskArr))

            setNewTask({ title: "", content: "", color: "" })
            setIsFormOpen(false)
        }
    }

    function handleClose() {
        if (newTask.content) {
            handleAdd()
        } else {
            setIsFormOpen(false)
        }
    }

    function handleOpenColorPicker() {
        setIsColorPickerOpen(true)
    }


    return (
        <>
            <div >
                {isFormOpen ?
                    //add task form
                    <div className='addTaskForm' style={{ background: `${newTask.color}` }}>
                        <input type="text" placeholder='Title...' value={newTask.title}
                            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} />

                        <textarea autoFocus placeholder='Take a notes..' value={newTask.content}
                            onChange={(e) => setNewTask({ ...newTask, content: e.target.value })} />

                        <div className='icon_cont'>

                            <div className='left'>
                                <Tooltip title="pick color" placement="bottom" arrow>
                                    <button onClick={handleOpenColorPicker}>

                                        <IoMdColorPalette />
                                    </button>
                                </Tooltip>

                                <Tooltip title="add" placement="bottom" arrow>
                                    <button onClick={handleAdd}>
                                        <IoIosAddCircleOutline />
                                    </button>

                                </Tooltip>
                            </div>

                            <div>
                                <Tooltip title="close" placement="bottom" arrow>
                                    <button className='closeBtn' onClick={handleClose}>close</button>
                                </Tooltip>
                            </div>
                        </div>

                    </div> :
                    <div className='takeANotesStripOuter'>
                        <div className='takeANotesStrip' onClick={() => setIsFormOpen(true)}>Takes a notes</div>
                    </div>
                }
            </div>

            <ColorPickerModalForAdd isColorPickerOpen={isColorPickerOpen} setIsColorPickerOpen={setIsColorPickerOpen} />

        </>

    )
}

export default AddTaskForm