import { mediaAssets } from "../utils/constant";
const RestaurantCard = (props) => {
  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId, sla } =
  props.restData?.info;

  return (
    <div className="res-card flex flex-col w-75 border border-amber-300 items-stretch p-5 rounded-sm bg-gray-50">
      <img src={`${mediaAssets + cloudinaryImageId}`} className="w-100 h-64 object-cover rounded-sm" />
      <h1 className="font-bold my-2 text-lg">{name}</h1>
      <h2>{`${avgRating} star`}</h2>
      <h3>{cuisines.join(" , ")}</h3>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

//higher order component
//input = RestaurantCard => return new RestuarantPromotedCard
export const WithPromtedlabe = (RestaurantCard) =>{
  return (props) =>{
    return(
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    )
  }

}
export default RestaurantCard;
