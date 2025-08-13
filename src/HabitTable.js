import Habit from "./Habit";

function createTableHeader() {
    const today = new Date();

    const currentMonth = today.getMonth();

    const year = today.getFullYear();

    const daysInMonth = new Date(year, currentMonth + 1, 0).getDate();

    return (
        <tr>
            <th>
                Habit
            </th>
            {Array.from({ length: daysInMonth }, (_, i) => (
                <th key={i + 1}>{i + 1}</th>
            ))}
        </tr>
    );
}

function HabitTable(props) {
  return (
    <div className="HabitTable">
        <table>
            <thead>
                {createTableHeader()}
            </thead>
            <tbody>
                {props.habits.map(habit => (
                    <Habit title={habit} />
                ))}
            </tbody>
        </table>
    </div>
  );
}

export default HabitTable;