import "../../App.css";

interface cardType {
  todo: {
    title: string;
    body: string;
    id: number;
    isDone: boolean;
  };
  handleDelete: (id: number) => void; // 함수타입
  onChangeHandler: (id: number) => void;
}

export default function Card(props: cardType) {
  return (
    <div className="todo-card">
      <h3>{props.todo.title}</h3>
      <p>{props.todo.body}</p>
      <div className="button-set">
        <button
          className="todo-button"
          onClick={() => props.handleDelete(props.todo.id)}
        >
          삭제하기
        </button>

        <button
          className="todo-button-two"
          onClick={() => props.onChangeHandler(props.todo.id)}
        >
          {props.todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}
