import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const GridLayout = WidthProvider(RGL);

const CustomGrid = ({
  layout,
  children,
  cols = 12,
  rowHeight = 100,
  ...rest
}) => (
  <GridLayout
    className="layout"
    layout={layout}
    cols={cols}
    rowHeight={rowHeight}
    {...rest}
  >
    {React.Children.map(children, (child) => {
      // each child *must* have either child.props.i or a React key that matches a layout item
      const key = child.props.i || child.key;
      if (!key) {
        console.warn("Each child of CustomGrid needs an `i` prop or key");
      }
      return (
        <div key={key} data-grid={layout.find((l) => l.i === key)}>
          {child}
        </div>
      );
    })}
  </GridLayout>
);

export default CustomGrid;
