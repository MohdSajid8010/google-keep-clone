import { useState } from 'react'
import "../styles/main.css"
import UserClickedcomponent from './UserClickedcomponent';
import { useTaskContext } from '../context/TaskContext';

const leftb_content = ["Notes", 'Reminders', "qwert", "Edit Labels", "Trash"];

const Main = () => {
    const { isClickMenuIcon, setIsClickedMenuIcon } = useTaskContext();
    const [activeTabIndex, setActiveTabIndex] = useState(0)
    // isClickMenuIcon
    return (
        <div className='main'>

            <div className={`Leftbar ${isClickMenuIcon ? "showLeftbar" : ""}`}>
                {
                    leftb_content.map((contant, i) => (
                        <div className='leftBarTab' style={{ background: `${i == activeTabIndex ? "#feefc3" : ""}` }} key={contant}
                            onClick={() => { setActiveTabIndex(i); setIsClickedMenuIcon(false) }}>
                            <div>{contant}</div>

                        </div>
                    ))
                }
            </div>

            <div className='task-container'>
                <UserClickedcomponent activeTabIndex={activeTabIndex} />
            </div>
        </div >
    )
}

export default Main