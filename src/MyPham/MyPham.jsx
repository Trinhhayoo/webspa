import React, { useState, useEffect } from "react";

import serum from "./serum1.jpg";
import kem from "./kem.jpg";
import matna from "./hat_nhu_hoa.jpg";
import "./MyPham.css";

const MyPham = () => {
    return (
        <div className="MyPham-container">
            <h2 className="title-MyPham">Sản phẩm chăm sóc tại nhà</h2>
            <div className="product-container">
                <ul className="list-product">
                    <li className="itemMyPham">
                        <img className="itemMyPhamimg" src={serum}/>
                        <p className="nameProduct">Serum trị mụn</p>
                    </li>
                    <li className="itemMyPham">
                    <img className="itemMyPhamimg" src={kem}/>
                        <p className="nameProduct">Kem dưỡng trắng</p>
                    </li>
                    <li className="itemMyPham">
                    <img className="itemMyPhamimg" src={matna}/>
                        <p className="nameProduct">Mặt nạ nhũ hoa</p>
                    </li>
                </ul>
                <button className="button-container">Shop</button>
            </div>
        </div>
    );
}
export default MyPham;