
import { useState } from "react";
import { useDispatch } from "react-redux";
import {addItems} from '../utils/cartSlice';

const RestaurantCategories = (props) => {
  const dispatch = useDispatch();
  const {name, dish_name } = props.catego;

  const [show, setShow] = useState(false); 

  const handleAddItems = (obj) =>{
    dispatch(addItems(obj))
  }

  return (
    <div className="w-6/12 mx-auto">
      <div
        className="text-center my-6 font-bold bg-gray-100 p-3 cursor-pointer shadow-lg"
        onClick={() => {
          setShow(!show);
        }}
      >
        <h5 className="font-xl">{name}</h5>
        
      </div>
      {
        show && <div className="accor-body px-5">
        <div className="flex justify-between">
        <h1 className="text-xl text-black font-semibold mb-2">{dish_name}</h1>
        <button className="text-white button-lg bg-green-800 cursor-pointer p-2 mb-2" onClick={() => handleAddItems({name,dish_name})}>Add Item +</button>
        </div>
        
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
      }
      
    </div>
  );
};

export default RestaurantCategories;
