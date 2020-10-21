import React from "react";

export default function ListGrocery(props) {
  const removeItem = (listItem) => {
    let existingItem = props.grocery;
    delete existingItem[listItem];
    props.updateList(existingItem);
  };

  const onItemClick = (listItem) => {
    let groceryObject = props.grocery[listItem];
    const isChecked = groceryObject.isChecked;
    groceryObject.isChecked = isChecked ? false : true;
    let existingGrocery = props.grocery;
    existingGrocery[listItem] = groceryObject;
    props.updateGrocery(existingGrocery);
  };

  const List = (props) => {
    let items = [];
    if (!props.grocery) {
      return;
    }
    for (const [key, value] of Object.entries(props.grocery)) {
      items.push(
        <div className="column" key={key}>
          <div className="card">
            <span onClick={() => removeItem(key)}>X</span>
            <h1
              className={value.isChecked ? "select" : "unselect"}
              onClick={() => onItemClick(key)}
            >
              {key}
            </h1>
            <p>({value.count})</p>
          </div>
        </div>
      );
    }
    return items;
  };

  return <div className="row">{List(props)}</div>;
}
