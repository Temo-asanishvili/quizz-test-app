import React, { useEffect } from "react";
import "./ContextMenu.scss";

const ContextMenu = (props) => {
  const handleDelete = () => {
    props.removeItem(props.id);
    props.showCallback(false);
  };

  useEffect(() => {
    const hideContextMenu = (event) => {
      if (!props.attemptItemRef.current?.contains(event.target) && props.show) {
        props.showCallback(false);
      }
    };
    window.addEventListener("click", hideContextMenu);
    return () => {
      window.removeEventListener("click", hideContextMenu);
    };
  }, [props]);
  return (
    <div
      className="menu"
      style={{ top: props.locationStyles.y, left: props.locationStyles.x }}
    >
      <div className="delete-button" onClick={() => handleDelete()}>
        <span>❌</span>
        <span className="delete-text">delete</span>
      </div>
    </div>
  );
};

export default ContextMenu;
