import React, { useState } from "react";
import "./dragDrop.css";

function DragDrop() {
  const [items, setItems] = useState<string[]>([]);
  const [active, setActive] = useState(false);

  const handleOnDrag = (e: React.DragEvent, itemName: string) => {
    e.dataTransfer.setData("itemName", itemName);
  };

  const handleOnDrop = (e: React.DragEvent) => {
    const itemName = e.dataTransfer.getData("itemName") as string;
    setItems([...items, itemName]);
    setActive(false);
  };

  const handleDragOver = (e: React.DragEvent, bool: boolean) => {
    e.preventDefault();
    setActive(bool);
  };

  return (
    <section className="drag-drop-container">
      <h2>Drag Drop</h2>
      <div className="drag-drop">
        <div className="draggable-items">
          <div
            className="dragged-item"
            draggable
            onDragStart={(e) => handleOnDrag(e, "item A")}
          >
            Item A
          </div>
          <div
            className="dragged-item"
            draggable
            onDragStart={(e) => handleOnDrag(e, "item B")}
          >
            Item B
          </div>
          <div
            className="dragged-item"
            draggable
            onDragStart={(e) => handleOnDrag(e, "item C")}
          >
            Item C
          </div>
        </div>
        <div
          className="draggable-items"
          id={`item-drag-over-${active}`}
          onDragOver={(e) => handleDragOver(e, true)}
          onDragLeave={(e) => handleDragOver(e, false)}
          onDrop={handleOnDrop}
        >
          {items.length ? (
            items.map((item, idx) => <div className="dragged-item">{item}</div>)
          ) : (
            <span>Drag Items Here</span>
          )}
        </div>
      </div>
    </section>
  );
}

export default DragDrop;
