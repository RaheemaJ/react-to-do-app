import './App.css';

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const d = new Date()
let month = months[d.getMonth()] + " " + d.getFullYear()
let date = d.getDate()
let day = days[d.getDay()]

function App() {
  return (
      <div className="todo"> 
        <div className="container">
          <div className="tasks-box">
              <div className="full-date">
                <h2 id="date">{date}</h2>
                <h3>{day}
                  <br />
                  {month}
                  </h3>
                </div>
              <form><input type="text" name="task" id="add-task-box" placeholder="Add task"></input>
              <button id="add-task-button">Add Task</button></form>
          </div>

          <div className="calender-box">
            <h1>{month}</h1>
          </div>
        </div>
      </div>
  )
}

export default App