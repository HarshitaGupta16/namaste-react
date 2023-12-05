import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => {
        return (
          <div className="flex justify-between">
            <div className="flex flex-col border-gray-400 border-b-2 pb-[5px] m-6 w-9/12">
              <span>{item.card.info.name}</span>
              <span className="text-sm">₹{item.card.info.price / 100}</span>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button className="bg-white p-1 rounded-lg shadow-lg m-10 my-16 px-5 text-[#60b246] font-bold text-xs">
                  Add
                </button>
              </div>
              <img src={CDN_URL + item.card.info.imageId} className="w-full" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
