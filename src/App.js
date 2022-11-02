import './App.css';

function App() {
  return (
      <div className="todo"> 
        <div className="container">
          <div className="tasks-box">
            <h2>Date</h2>
              <span><input type="text" name="task" id="add-task-box" placeholder="Add task"></input>
              <button id="add-task-button">Add Task</button></span>
          </div>

          <div className="calender-box">
          </div>
        </div>
      </div>
  )
}

export default App