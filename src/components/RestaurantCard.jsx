import { mediaAssets } from "../utils/constant";
const RestaurantCard = (props) => {

  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId, sla } =
  props.restData?.info;

  return (
    <div className="res-card">
      <img src={`${mediaAssets + cloudinaryImageId}`} />
      <h1>{name}</h1>
      <h2>{`${avgRating} star`}</h2>
      <h3>{cuisines.join(" , ")}</h3>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};
export default RestaurantCard;
