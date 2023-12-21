import { useTaskContext } from '../context/TaskContext';
import { Modal, Tooltip } from '@mui/material';
import ColorPickerModal from './ColorPickerModal';
import { useState } from 'react';
import EditModal from './EditModal';
import DeleteConfirmModal from "./DeleteConfirmModal"
import { FaRegEdit } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoMdColorPalette } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import "../styles/renderTask.css"


const RenderTask = () => {

    const { taskArr, settaskArr, setEditIndex, setEditObj, editObj, editIndex, isGridview } = useTaskContext();

    const [isColorPickerOpen, setIsColorPickerOpen] = useState(false)
    const [editColorIndex, setEditColorIndex] = useState(null);
    const [isopenEditModal, setisopenEditModal] = useState(false);
    const [isopenDeleteModal, setisopenDeleteModal] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(null)

    function handleOpenColorPicker(index) {
        setIsColorPickerOpen(true)
        setEditColorIndex(index)
    }

    function handleOpenDeleteModal(i) {
        setisopenDeleteModal(true)
        setDeleteIndex(i)

    }

    function handleOpenModal(obj, i) {
        setisopenEditModal(true)
        setEditIndex(i);
        setEditObj(obj);
    }



    // isGridview
    return (
        <>
            <div className={`renderTask ${isGridview ? "renderTaskgridView" : "renderTasklistView"}`}>
                {
                    //render task
                    taskArr.map((obj, i) => {
                        return <div key={i} className={`oneTask ${isGridview ? "oneTaskgridView" : "oneTasklistView"}`} style={{ background: `${obj.color}` }}>

                            <div className='title'>title:{obj.title}</div>
                            <div className='content'>title:{obj.content}</div>

                            <div className='iconCont'>
                                <Tooltip title="edit" placement="bottom" arrow>
                                    <button onClick={() => handleOpenModal(obj, i)}>
                                        <FaRegEdit />
                                    </button>
                                </Tooltip>
                                <Tooltip title="delete" placement="bottom" arrow>
                                    <button onClick={(i) => handleOpenDeleteModal(i)}><MdDelete /></button>

                                </Tooltip>

                                <Tooltip title="pick color" placement="bottom" arrow>
                                    <button onClick={() => handleOpenColorPicker(i)}><IoMdColorPalette /></button>
                                </Tooltip>
                            </div>
                        </div>
                    })
                }

            </div>

            {/* ColorPickerModal for Edit color */}
            <ColorPickerModal isColorPickerOpen={isColorPickerOpen} setIsColorPickerOpen={setIsColorPickerOpen}
                editColorIndex={editColorIndex} setEditColorIndex={setEditColorIndex} />

            {/* open modal for editing */}
            <EditModal isopenEditModal={isopenEditModal} setisopenEditModal={setisopenEditModal} />

            {/* open modla for delte confirm */}
            <DeleteConfirmModal isopenDeleteModal={isopenDeleteModal} setisopenDeleteModal={setisopenDeleteModal}
                deleteIndex={deleteIndex} setDeleteIndex={setDeleteIndex} />

        </>

    )
}

export default RenderTask