import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { TaskContextprovider } from './context/TaskContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <TaskContextprovider>

        <App />
    </TaskContextprovider>
)
