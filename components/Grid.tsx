import classes from "../styles/Grid.module.css";
interface GridProps {
  properties: {
    direction: any;
    quadContainer?: boolean;
  };
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

const Grid: React.FC<GridProps> = ({ properties, children }) => {
  return (
    <div
      style={{ flexDirection: properties.direction }}
      className={classes.grid}
    >
      {children}
      <div
        className={classes.grid__item_1}
        style={gridItemInlineStyle(properties.direction)}
      >
        {properties.quadContainer && (
          <div className={classes.item__child}></div>
        )}
        <div className={classes.item__child}></div>
      </div>
      <div
        style={gridItemInlineStyle(properties.direction)}
        className={classes.grid__item_2}
      >
        <div className={classes.item__child}></div>
        <div className={classes.item__child}></div>
      </div>
    </div>
  );
};

export default Grid;
