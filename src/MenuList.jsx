import React, { useState } from 'react';
import Menu from './Menu.jsx';

const MenuList = () => {

    const [item, setItem] = useState(Menu);

    const filterItems = (CurrentItems) =>{
        const NewItems = Menu.filter((val)=>{
            return val.category === CurrentItems;
        })
        setItem(NewItems);
    }
    return (
        <>
            <h1 className="mt-5 text-center main-heading">Order your choice from our site...</h1>
            <hr /><br/>
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    <button className="btn btn-warning" onClick={()=> filterItems("Breakfast")}>Breakfast</button>
                    <button className="btn btn-warning" onClick={()=> filterItems("Lunch")}>Lunch</button>
                    <button className="btn btn-warning" onClick={()=> filterItems("Snacks")}>Snacks</button>
                    <button className="btn btn-warning" onClick={()=> filterItems("Dinner")}>Dinner</button>
                    <button className="btn btn-warning" onClick={()=> setItem(Menu)}>All items</button>
                </div>
            </div>

            <div className="menu-items container-fluid mt-5">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">

                            {
                                item.map((val, index) => {
                                    const { id, name, image, price, descryption } = val;
                                    return (
                                        <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-4">
                                            <div className="row Item-inside">
                                                <div className="col-12 col-md-12 col-lg-4 img-div">
                                                    <img src={image} alt="Image" className="img-fluid" ></img>
                                                </div>
                                                <div className="col-12 col-md-12 col-lg-8">
                                                    <div className="main-title pt-4 pb-3">
                                                        <h1>{name}</h1>
                                                        <p>{descryption}</p>
                                                    </div>
                                                    <div className="menu-price-book">
                                                        <div className="price-book-divide d-flex justify-content-between" >
                                                            <h2>Price: {price}</h2>
                                                            <a href="">
                                                                <button className="btn btn-primary">Place Order</button>
                                                            </a>
                                                        </div>
                                                        <p>**Prices may be varying</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    );

                                })
                            }


                        </div>
                    </div>
                </div>


            </div>

        </>

    )
}

export default MenuList;
