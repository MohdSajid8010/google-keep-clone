import Notes from "./Notes"
import Reminders from "./Reminders"

// eslint-disable-next-line react/prop-types
const UserClickedcomponent = ({ activeTabIndex }) => {


  return (
    <>
      {activeTabIndex == 0 && <Notes />}
      {activeTabIndex == 1 && <Reminders />}
      {/* {activeTabIndex == 2 && <Qwert />} */}


    </>
  )
}

export default UserClickedcomponent