import React, { useState, useEffect } from "react";
import axios from "axios";
import serum from "./serum1.jpg";
import kem from "./kem.jpg";
import matna from "./hat_nhu_hoa.jpg";
import "./MyPham.css";

const MyPham = () => {
    const [imageBeautyProducts, setimageBeautyProducts] = useState([])


    useEffect(() => {
        const getImages = async () => {
            try {
               const res = await axios.get(
                'https://jsonplaceholder.typicode.com/photos?_limit=5'
               ) 
               setimageBeautyProducts(res.data)
            } catch (error) {
               console.log(error.message) 
            }
        }
        getImages() 
    },[])
    return (
        <div className="MyPham-container">
            <h2 className="title-MyPham">Sản phẩm chăm sóc tại nhà</h2>
            <div className="product-container">
                <ul className="list-product">
                    {
                       imageBeautyProducts?.map(image => (
                    <li className="itemMyPham" key = {image.id}>
                        <img className="itemMyPhamimg" src={image.url}/>
                        <p className="nameProduct">i{image.title}</p>
                    </li>
                       ))}
                   
                   
                </ul>
                <button className="button-container">Shop</button>
            </div>
        </div>
    );
}
export default MyPham;