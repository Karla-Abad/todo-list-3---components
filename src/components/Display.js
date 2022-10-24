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
    <div className="flex">
      <h2>My To-Do List</h2>
      <div>
        {currentTaskArray.map((item, index) => (
          <div className="display">
            <div key={index}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={(e) => {
                  handleCheckedBox(index);
                }}
              />
              <span className={`${checkedStyle(index)}`}>{item.text}</span>
            </div>

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
    </div>
  );
};

export default Display;
