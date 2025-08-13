import './App.css';
import {useState} from 'react';
import HabitTable from "./HabitTable";

function App() {
  const [habits, setHabits] = useState([])
  const [habitTitle, setHabitTitle] = useState("");

  const addHabit = (title) => {
    if ((!habits.includes(title)) && (title != "")) {
      setHabits([...habits, title]);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Talan Gaff's Habit Tracker</h1>
      </header>

      <button onClick={() => addHabit(habitTitle)}>Add Habit</button>
      <input value={habitTitle} onChange={(e) => setHabitTitle(e.target.value)} placeholder="Enter habit" />

      <HabitTable habits={habits} />
    </div>
  );
}

export default App;
