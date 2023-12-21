import React from 'react'
import { useTaskContext } from '../context/TaskContext';
import { Modal, Tooltip } from '@mui/material';

// eslint-disable-next-line react/prop-types
const DeleteConfirmModal = ({ isopenDeleteModal, setisopenDeleteModal, deleteIndex, setDeleteIndex }) => {
  const { taskArr, settaskArr, setEditIndex, setEditObj, editObj, editIndex } = useTaskContext();

  function handleCloseModal() {
    setisopenDeleteModal(false)
    setDeleteIndex(null)
  }

  function handleNoClick() {
    handleCloseModal()
  }
  function handleYesClick() {
    taskArr.splice(deleteIndex, 1);
    settaskArr([...taskArr])
    localStorage.setItem("TaskArr", JSON.stringify(taskArr))
    handleCloseModal()
  }

  return (
    <Modal
      //Modal for edit form
      open={isopenDeleteModal}
      onClose={handleCloseModal}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "",
      }}
    >

      <div style={{ width: "400px", border: `2px solid red`, outline: 'none' }}>

        Do you want to delete the task?
        <button onClick={handleYesClick}>Yes</button>
        <button onClick={handleNoClick}>No</button>

      </div>

    </Modal>
  )
}


export default DeleteConfirmModal