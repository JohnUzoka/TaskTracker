import Task from './Task'


const Tasks = ({tasks, onDelete, onToggle}) => {
    
  return (
    <>

      {tasks.map((task) => 
      //when we use .mpap and output jsx thats a list 
      //task is the parent of the list
      //passing each task as a prop
      //loop through task and for each task we output a component
      (<Task key={task.id} 
        task={task} 
        onDelete={onDelete}
        onToggle={onToggle}/>
      ))}
    </>
  )
}

export default Tasks
