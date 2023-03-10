import "../../App.css";
import Card from "./Card";

interface TodoCard {
  handleDelete: (id: number) => void;
  onChangeHandler: (id: number) => void;

  todoWork: [
    todo: {
      title: string;
      body: string;
      id: number;
      isDone: boolean;
    }
  ];

  todoDone: [
    todo: {
      title: string;
      body: string;
      id: number;
      isDone: boolean;
    }
  ];
}

function Todo(props: TodoCard) {
  return (
    <div className="list-container">
      <div>
        <h2>ν΄μΌν μΌπ₯</h2>
        <div className="list-wrapper">
          {props.todoWork.map((todo) => {
            return (
              <Card
                todo={todo}
                key={todo.id}
                handleDelete={props.handleDelete}
                onChangeHandler={props.onChangeHandler}
              />
            );
          })}
        </div>
      </div>
      <div>
        <h2>μλ£!π</h2>
        <div className="list-wrapper">
          {props.todoDone.map((todo) => {
            return (
              <Card
                todo={todo}
                key={todo.id}
                handleDelete={props.handleDelete}
                onChangeHandler={props.onChangeHandler}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Todo;
