import classes from "./Grid.module.css";
interface GridProps {
  direction: any;
  quadContainer?: boolean;
  Child?: React.ReactNode;
}

// change style of grid item on state change
let gridItemInlineStyle = (direction: string): Object => {
  return direction === "row" || direction === "row-reverse"
    ? {
        flexDirection: direction === "row" ? "column" : "row",
        width: "50%",
        height: "100%",
      }
    : {
        flexDirection: direction === "row" ? "column" : "row",
        width: "100%",
        height: "50%",
      };
};

const Grid: React.FC<GridProps> = ({ direction, quadContainer, Child }) => {
  return (
    <div style={{ flexDirection: direction }} className={classes.grid}>
      {Child ? Child : ""}
      <div
        className={classes.grid__item_1}
        style={gridItemInlineStyle(direction)}
      >
        {quadContainer && <div className={classes.item__child}></div>}
        <div className={classes.item__child}></div>
      </div>
      <div
        style={gridItemInlineStyle(direction)}
        className={classes.grid__item_2}
      >
        <div className={classes.item__child}></div>
        <div className={classes.item__child}></div>
      </div>
    </div>
  );
};

export default Grid;
