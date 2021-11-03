import classes from "./Grid.module.css";
interface GridProps {
  direction: any;
  quadContainer?: boolean;
}

// change style of grid item on state change
let gridItemInlineStyle = (direction: string): Object => {
  return direction === "row" || direction === "row-reverse"
    ? {
        flexDirection: direction === "row" ? "column" : "row",
        width: "50%",
      }
    : {
        flexDirection: direction === "row" ? "column" : "row",
        width: "100%",
      };
};

const Grid: React.FC<GridProps> = ({ direction, quadContainer }) => {
  return (
    <div style={{ flexDirection: direction }} className={classes.grid}>
      <div
        style={gridItemInlineStyle(direction)}
        className={classes.grid__item}
      >
        {quadContainer && <div className={classes.item__child}></div>}
        <div className={classes.item__child}></div>
      </div>
      <div
        style={gridItemInlineStyle(direction)}
        className={classes.grid__item}
      >
        <div className={classes.item__child}></div>
        <div className={classes.item__child}></div>
      </div>
    </div>
  );
};

export default Grid;
