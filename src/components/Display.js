import "../App.css";
const Display = (props) => {
  const {
    currentTaskArray,
    handleCheckedBox,
    checkedStyle,
    handleDelete,
    setCurrentTaskArray,
  } = props;
  return (
    <div>
      <h2>My To Do List</h2>
      <div>
        {currentTaskArray.map((item, index) => (
          <div className="display" key={index}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={(e) => {
                handleCheckedBox(index);
              }}
            />

            <span className={`${checkedStyle(index)}`}>{item.text}</span>

            <button
              className="deleteBtn"
              onClick={(e) => {
                handleDelete(index);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <h3>Total tasks: {currentTaskArray.length}</h3>
    </div>
  );
};

export default Display;
