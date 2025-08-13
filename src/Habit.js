function createTableRow(title) {
    const today = new Date();

    const currentMonth = today.getMonth();

    const year = today.getFullYear();

    const daysInMonth = new Date(year, currentMonth + 1, 0).getDate();

    return (
        <tr className="Habit">
            <td>
                {title}
            </td>
            {Array.from({ length: daysInMonth }, (_, i) => (
                <td><input type="checkbox"></input></td>
            ))}
        </tr>
    );
}

function Habit(props) {
  return createTableRow(props.title);
}

export default Habit;