import { useState } from "react";
import Shimmer from "./Shimmer";
import { mediaAssets } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCategories from "./RestaurantsCategories";
import restaurants from "../utils/mockData";


const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const onlineStatus = useOnlineStatus();



  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, cloudinaryImageId, costForTwo, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card.info;

  if (onlineStatus === false) {
    return <h1>Your internet connect is lost try again.!!!</h1>;
  }

  const categories = restaurants;


  return (<>
    <div className="menu flex flex-col w-75 border border-amber-300 items-stretch p-5 mt-8 rounded-sm text-center mb-4">
      <img className="rounded-sm" src={`${mediaAssets + cloudinaryImageId}`} />
      <h1 className="font-bold mt-4"> {name}</h1>
      <h2 className="font-bold mt-3">{cuisines.join(",")}</h2>
      <h3 className="my-2">{`${costForTwo / 100} rs`}</h3>
      <h4>{costForTwoMessage}</h4>
    </div>
    {
      categories.map((categories,index) =>  <RestaurantCategories  key={categories.id} catego={categories}  /> )
    }
   
    </>
  );
};
export default RestaurantMenu;
