/* eslint-disable react/prop-types */
import { Modal } from '@mui/material'
import React from 'react'
import { useTaskContext } from '../context/TaskContext';
const colorsArr = ["#e9e3d4", "#f6e2dd", "#aeccdc", "#d4e4ed", "#b4ddd3", "#e2f6d3", "#fff8b8", "#f39f76", "#faafa8"]


//ColorPickerModalForAdd for add color
export const ColorPickerModalForAdd = ({ isColorPickerOpen, setIsColorPickerOpen }) => {
    const { isFormOpen, newTask, setNewTask, setIsFormOpen, taskArr, settaskArr } = useTaskContext();
    function handleCloseColorPicker() {
        setIsColorPickerOpen(false);
    }
    function handleClickColor(colorVal) {
        setNewTask({ ...newTask, color: colorVal })


    }

    return (
        <Modal
            //Modal for edit form
            open={isColorPickerOpen}
            onClose={handleCloseColorPicker}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "",
            }}
        >
            <div style={{ width: "400px", border: `2px solid red`, outline: 'none' }}>

                <h1>pick color</h1>
                {
                    colorsArr.map((val) => (
                        <div key={val} onClick={() => handleClickColor(val)}
                            className='colorCirlce' style={{ width: "30px", height: "30px", background: `${val}` }}>
                        </div>
                    ))
                }

            </div>
        </Modal>
    )
}
