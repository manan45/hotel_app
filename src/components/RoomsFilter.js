import React from 'react';
import {useContext} from 'react';
import {RoomContext} from "../context";
import Title from "./Title";
// get all unique values
const getAllUnique = (items, value) => {
    return [...new Set(items.map(item=>item[value]))]
};


export default function RoomsFilter() {
    const context = useContext(RoomContext);
    const {handleChange, type, capacity, price, rooms, min_price, max_size, max_price, min_size, pets, breakfast} = context;

    // get uniques type
    let types = getAllUnique(rooms, 'type');
    let people = getAllUnique(rooms, 'capacity');

    // ADD ALL
    types = ["all", ...types];
    types = types.map((item, index)=>{
        return <option value={item} key={index}>{item}</option>
    });
    people = people.map((item, index)=>{
        return <option value={item} key={index}>{item}</option>
    });

    return(
        <section className="filter-container">
            <Title title="Search Rooms "/>
            <form className="filter-form">
            {/*    select type  */}
            <div className="form-group">
                <label htmlFor="type">Room Type</label>
                <select name="type" id="type" value={type} className="form-control" onChange={handleChange} >
                    {types}
                </select>
            </div>
            {/* guest filter*/}
                <div className="form-group">
                    <label htmlFor="capacity">Capacity</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange} >
                        {people}
                    </select>
                </div>
                {/* price  filter*/}
                <div className="form-group">
                    <label htmlFor="price">Room Price ${price}</label>
                    <input type="range" name="price" min={min_price} max={max_price} id="price" value={price} className="form-control" onChange={handleChange}/>
                </div>
                {/* size filter*/}
                <div className="form-group">
                    <label htmlFor="size">Room Size </label>
                    <input type="number" name="min_size" id="size" value={min_size} onChange={handleChange} className="size-input"/>
                    <input type="number" name="max_size" id="size" value={max_size} onChange={handleChange} className="size-input"/>
                </div>
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" onChange={handleChange} id="breakfast" checked={breakfast}/>
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" onChange={handleChange} id="pets" checked={pets}/>
                        <label htmlFor="pets">Pets</label>
                    </div>
                </div>
            </form>
        </section>
    )
}