import React, { useState } from "react";
import ItemList from "./ItemList";
// import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, abc }) => {
  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    // setShowItems((showItems) => !showItems);
    setShowIndex();
    console.log(abc);
  };

  return (
    <div className="w-6/12 bg-gray-200 my-2 p-4 shadow-lg">
      {/* Accordian Header */}
      <div
        className="flex justify-between cursor-pointer py-2"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title}({data.itemCards.length})
        </span>
        {!showItems ? <span>🔽</span> : <span>🔼</span>}
      </div>

      {/* Accordian Body */}
      {showItems && (
        <ItemList
          key={data.itemCards?.card?.info?.id}
          items={data?.itemCards}
        />
      )}
    </div>
  );
};

export default RestaurantCategory;
