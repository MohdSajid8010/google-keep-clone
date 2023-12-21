import RenderTask from './RenderTask';
import AddTaskForm from './AddTaskForm';
import "../styles/notes.css"

const Notes = () => {

    return (

        <div className='notest-container'>
            <AddTaskForm />

            <RenderTask />
        </div>
    )
}

export default Notes