import "../styles/navbar.css"
import { BsGrid, } from "react-icons/bs";
import { useEffect } from "react";
import { BiMenu, BiExpand } from "react-icons/bi";
import { useTaskContext } from "../context/TaskContext";
import { TfiLayoutMenuV } from "react-icons/tfi";

const Navbar = () => {

    const { settaskArr, search, setSearch, isGridview, setView, isClickMenuIcon, setIsClickedMenuIcon } = useTaskContext();


    useEffect(() => {
        let TaskArr = JSON.parse(localStorage.getItem("TaskArr")) || []
        settaskArr(TaskArr.filter((obj) => {
            return obj.title.toLowerCase().includes(search.toLowerCase()) ||
                obj.content.toLowerCase().includes(search.toLowerCase())
        }
        ))

    }, [search])

    return (
        <div className='navbar'>
            <div className='nav_left'>
                <div >
                    {!isClickMenuIcon && <BiMenu className="icon" onClick={() => setIsClickedMenuIcon(!isClickMenuIcon)} />}
                    {isClickMenuIcon && <BiExpand className="icon" onClick={() => setIsClickedMenuIcon(!isClickMenuIcon)} />}
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Keep_icon_%282020%29.svg/1200px-Google_Keep_icon_%282020%29.svg.png" alt="" />

            </div>

            <div className={`mid_nav`}>
                <input type="search" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />

            </div>

            <div className='nav_right'>
                <div >
                    {isGridview && <BsGrid className="icon" onClick={() => setView(false)} />}
                    {!isGridview && <TfiLayoutMenuV className="icon" onClick={() => setView(true)} />}

                </div>

            </div>


        </div>
    )
}

export default Navbar


