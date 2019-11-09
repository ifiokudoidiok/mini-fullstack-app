import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import "./App.css";

function App() {
  const [productList, setProductList] = useState([]);
  const [merchantList, setmerchantList] = useState([]);
  const [productCategory, setproductCategory] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/products")
      .then(res => {
        // debugger
        setProductList(res.data);
      })
      .catch(error => {
        debugger;
        alert(error.message);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/merchants")
      .then(res => {
        // debugger
        setmerchantList(res.data);
      })
      .catch(error => {
        debugger;
        alert(error.message);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/merchant/1/products`)
      .then(res => {
        // debuggersetproductCategory
        setproductCategory(res.data);
      })
      .catch(error => {
        debugger;
        alert(error.message);
      });
  }, []);

  return (
    <div className="App">
      {productList.map(products => (
        <>
          <p>Name: {products.product_name}</p>
          <p>Description: {products.product_description}</p>
          <p>Price: {products.product_price}</p>
        </>
      ))}
      {merchantList.map(merchants => (
        <>
          <p>Name: {merchants.merchant_name}</p>
        </>
      ))}
      {productCategory.map(products => (
        <>
          <p>Name: {products.product_name}</p>
          <p>Description: {products.product_description}</p>
          <p>Price: {products.product_price}</p>
        </>
      ))}
    </div>
  );
}

export default App;
