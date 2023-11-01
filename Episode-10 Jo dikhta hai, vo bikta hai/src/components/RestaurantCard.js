import { CDN_URL } from "../utils/constants";
import styles from "./Body.module.css";

const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, cuisines, costForTwo, avgRating, sla } =
    resData;
  return (
    <div className="m-4 p-4 w-[300px] bg-[#f0f0f0] hover:border hover:border-[#d3d5df] hover:shadow-[0_4px_7px_0_rgba(218,220,230,0.6)]">
      {cloudinaryImageId ? (
        <img
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
          className="res-logo"
        />
      ) : (
        <div className="alt-image">
          <div></div>
        </div>
      )}
      <div className="text-lg font-medium break-words">{name}</div>
      <div className={styles.resCuisines}>{cuisines?.join(", ")}</div>
      <div className={styles.resInfo}>
        <span className={styles.resRating}>{avgRating}</span>
        <div>•</div>
        <h4 className="font-bold">{sla.deliveryTime} minutes</h4>
        <div>•</div>
        <h4 className="font-bold">{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
