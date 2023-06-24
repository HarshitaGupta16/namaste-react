import { CDN_URL } from "../utils/constants";
import styles from "./Body.module.css";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    avgRating,
    deliveryTime,
  } = resData?.data;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
        className="res-logo"
      />
      <div className={styles.resName}>{name}</div>
      <div className={styles.resCuisines}>{cuisines?.join(", ")}</div>
      <div className={styles.resInfo}>
        <span className={styles.resRating}>{avgRating}</span>
        <div>•</div>
        <h4>{deliveryTime} minutes</h4>
        <div>•</div>
        <h4>₹{costForTwo / 100} For Two</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
