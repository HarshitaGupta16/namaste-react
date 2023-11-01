import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import styles from "./Body.module.css";
import useOnlineStatus from "../utils/useOnlineStatus";
import useListOfRestaurants from "../utils/useListOfRestaurants";

const Body = () => {
  // Local State variable - Super powerful variable
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();
  const [listOfRestaurants, listOfFilteredRestaurants] = useListOfRestaurants();

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  // console.log("Body Rendered");

  // Conditional Rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  if (onlineStatus === false) {
    return <h1>Looks like you are offline</h1>;
  }

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search ml-[6.8rem]">
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="border-solid border border-gray-500 m3 p-1"
          />
          <button
            onClick={() => {
              let filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setSearchText("");
            }}
            className="m-2 bg-gray-500 px-4 py-1 rounded-md text-white hover:bg-gray-400"
          >
            Search
          </button>
        </div>
        <div className="bg-gray-500 px-4 m-4 ml-20 rounded-md hover:bg-gray-400 flex h-[2.1rem] mt-[6px]">
          <button
            className="text-white"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {listOfFilteredRestaurants?.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant?.info.id}
            key={restaurant?.info.id}
            className={styles.resLink}
          >
            <RestaurantCard resData={restaurant?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
