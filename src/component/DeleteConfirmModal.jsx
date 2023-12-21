import { useTaskContext } from '../context/TaskContext';
import { Modal } from '@mui/material';

// eslint-disable-next-line react/prop-types
const DeleteConfirmModal = ({ isopenDeleteModal, setisopenDeleteModal, deleteIndex, setDeleteIndex }) => {
  const { taskArr, settaskArr,  } = useTaskContext();

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
      }}
    >

      <div className='deleteConfirmModal'>

        <h3>   Do you want to delete the task?</h3>
        <div>
          <button onClick={handleYesClick}>Yes</button>
          <button onClick={handleNoClick}>No</button>
        </div>

      </div>

    </Modal>
  )
}


export default DeleteConfirmModal