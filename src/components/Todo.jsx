export default function Todo({ item, completeTodo, deleteTodo }) {
  // console.log('todo',item)
  return (
    <li style={{ listStyle: "none" }} className="input">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => completeTodo(item.id)}
      />
      {item.text}
      <button onClick={() => deleteTodo(item.id)}>x</button>
    </li>
  );
}

