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
      <div className="filter">
        <div className="search">
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              let filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfFilteredRestaurants(filteredList);
              setSearchText("");
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
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
