import React from "react";
import './BurgerToggleDrawer.css';
// this is a stateless button
const BurgerIcon = ({ open, ...props }) => {
   return (
      <div className={open ? "burger-menu open" : "burger-menu"} {...props}>
        <div className="bar1" key="b1" />
        <div className="bar2" key="b2" />
        <div className="bar3" key="b3" />
      </div>
   );
}

export default BurgerIcon;
