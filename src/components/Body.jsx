import { useState, useEffect,useContext } from "react";
import RestaurantCard, { WithPromtedlabe } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const Body = () => {
  const dispatch = useDispatch();
  const [restroList, setRestroList] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);
  const [searchText, setSearchText] = useState("");
  const {loggedInyuser,setUserName} = useContext(UserContext);

  const RestuarantPromotedCard = WithPromtedlabe(RestaurantCard);

  const handleItems = () =>{
    dispatch(addItems("Pizaa"))
  }


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.296"
    );
    const json = await data.json();
    setRestroList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestro(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //conditional rendering
  return restroList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-center my-8 ml-8">
        <div className="search">
          <input
            type="text"
            className="border rounded-sm outline-0 p-1"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Enter Product Name"
          />
          <button
            className="p-2 border bg-amber-300 text-white ml-3 cursor-pointer"
            onClick={() => {
              //filter the restaurant card
              //search Text
              const filterRestro = restroList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestro(filterRestro);
            }}
          >
            Search button
          </button>
        </div>
        <button
          className="ml-5 border-2 border-gray-200 p-2 bg-gray-200 text-gray curser-pointer cursor-pointer"
          onClick={() => {
            //filter logic here
            resList = restroList.filter((resto) => resto.info.avgRating > 4);
            setRestroList(resList);
          }}
        >
          Top Rated Restaurant
        </button>
        <div>
          <input className="border p-4" value={loggedInyuser}  onChange={(e) => setUserName(e.target.value)} />
        </div>
        <button className="border curser-pointer"  onClick={handleItems}>Dispatch Action</button>
      </div>
      <div className="res-container flex justify-center flex-wrap gap-4 ">
        {filteredRestro.map((restaurant, index) => {
          return (
            <Link
              key={restaurant.info.id}
              to={`/restaurant/${restaurant.info.id}`}
            >
            { restaurant.info.promoted ? <RestuarantPromotedCard restData ={restaurant} /> : <RestaurantCard restData={restaurant} />}
              
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
