import "../../App.css";
import Card from "./Card";

interface List {
  todoWork: [
    todo: {
      title: string;
      body: string;
      id: string;
      isDone: boolean;
    }
  ];
  todoDone: [
    todo: {
      title: string;
      body: string;
      id: string;
      isDone: boolean;
    }
  ];
  handleDelete: (id: string) => void; // 함수타입
  onChangeHandler: (id: string) => void;
}

export default function Todo(props: List) {
  return (
    <div className="list-container">
      <div>
        <h2>해야할일🔥</h2>
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
        <h2>완료!🎉</h2>
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
