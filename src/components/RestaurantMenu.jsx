import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { mediaAssets } from "../utils/constant";
import { useParams } from "react-router-dom";
import { Menu_API } from "../utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  console.log(resId);

  const fetchMenu = async () => {
    const data = await fetch(Menu_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, cloudinaryImageId, costForTwo, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card.info;

  return (
    <div className="menu">
      <img
        src={`${mediaAssets + cloudinaryImageId}`}
        style={{ width: "200px" }}
      />
      <h1> {name}</h1>
      <h2>{cuisines.join(",")}</h2>
      <h3>{`${costForTwo / 100} rs`}</h3>
      <h4>{costForTwoMessage}</h4>

      <h2>Menu</h2>
      <ul>
        <li>title</li>
        <li>Buger</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
