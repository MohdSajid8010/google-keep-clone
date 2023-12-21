/* eslint-disable react/prop-types */
import { Modal } from '@mui/material'
import { useTaskContext } from '../context/TaskContext';

const colorsArr = ["#e9e3d4", "#f6e2dd", "#aeccdc", "#d4e4ed", "#b4ddd3", "#e2f6d3", "#fff8b8", "#f39f76", "#faafa8"]

//ColorPickerModal for edit color
const ColorPickerModal = ({ isColorPickerOpen, setIsColorPickerOpen, editColorIndex, setEditColorIndex }) => {
    const { taskArr, settaskArr,  } = useTaskContext();
    function handleCloseColorPicker() {
        setIsColorPickerOpen(false)
        setEditColorIndex(null)
    }

    function handleEditColor(colorval) {
        if (editColorIndex != null) {
            taskArr[editColorIndex].color = colorval
            settaskArr([...taskArr])
            localStorage.setItem("TaskArr", JSON.stringify(taskArr))
        } else {
            console.log("err can not edit color")
        }
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
            }}
        >
            <div className='colorPickerModalForEditColor'>

                {
                    colorsArr.map((colorval) => (
                        <div key={colorval} onClick={() => handleEditColor(colorval)}
                            className='colorCirlce' style={{ background: `${colorval}`}}>
                        </div>
                    ))
                }

            </div>
        </Modal>
    )
}

export default ColorPickerModal