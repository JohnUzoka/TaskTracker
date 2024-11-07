import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from "react"

function App() {
  //toggle add task component 
const [showAddTask,setShowAddTask] = useState(false)
  //state is called tasks and function setTasks updates the state
const [tasks, setTasks] = useState(
  //default that we use for the state for our tasks
//array called tasks,each element containing..
//an object with an id,text,day, and reminder
[{

  id: 1,
  text: 'Easter Mass',
  day: 'March 31st at 7:30AM',
  reminder:true, 
  
  },{
  
  id: 2,
  text: 'Software Developer - Interview',
  day: 'March 25h at 12:00PM',
  reminder: true,
  
  },{
  
  id: 3,
  text: 'Weekly AI Training Prioritization' ,
  day: 'March 29th at 12:00PM',
  reminder: true,
  
  }
  
  ]
)
//add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

//delete task
const deleteTask = (id) => {
setTasks(tasks.filter((task) => task.id !== id))
}

//toggle reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
    task.id === id ? {...task, reminder: !task.reminder}: task))
}
  return (
    <div className='Container'>
      <Header onAdd={() => setShowAddTask(!showAddTask) } showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length > 0 
      ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle ={toggleReminder}/>: 'No Tasks Remaining'}
    </div>
  );
}

export default App;


//notes. states get passed down actions ge passed up