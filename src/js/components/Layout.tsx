import "../../App.css";

interface LayOut {
  children: number;
}

export default function Layout(props: LayOut) {
  return (
    <div className="layout_wr">
      <div className="layout">{props.children}</div>
    </div>
  );
}
