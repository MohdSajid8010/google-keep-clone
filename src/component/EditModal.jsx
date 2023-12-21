/* eslint-disable react/prop-types */
import { Modal, Tooltip } from '@mui/material'
import { useTaskContext } from '../context/TaskContext';
import "../styles/editModal.css"

const EditModal = ({ isopenEditModal, setisopenEditModal }) => {
    const { taskArr, settaskArr, setEditIndex, setEditObj, editObj, editIndex } = useTaskContext();
    function handleCloseModal() {
        handleEdit()
        setisopenEditModal(false)
    }

    function handleEdit() {
        if (editObj.content) {
            taskArr[editIndex] = editObj
            settaskArr([...taskArr])
            localStorage.setItem("TaskArr", JSON.stringify(taskArr))
            setEditObj(null)
            setEditIndex(null)
        }
    }

    return (
        <Modal
            //Modal for edit form
            open={isopenEditModal}
            onClose={handleCloseModal}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "transparent",

            }}
        >

            <div >

                {
                    //edit form
                    editObj && <div className='editModal'>
                        <input type="text" placeholder='title...' value={editObj.title}
                            onChange={(e) => setEditObj({ ...editObj, title: e.target.value })} />

                        <textarea autoFocus placeholder='take a notes..' value={editObj.content}
                            onChange={(e) => setEditObj({ ...editObj, content: e.target.value })} />
                        {/* 
                <Tooltip title="edit" placement="bottom" arrow>
                    <button onClick={handleEdit}>Edit</button>
                </Tooltip> */}

                        <Tooltip title="close" placement="bottom" arrow>
                            <button onClick={handleCloseModal}>close</button>
                        </Tooltip>

                    </div>
                }

            </div>

        </Modal>
    )
}

export default EditModal