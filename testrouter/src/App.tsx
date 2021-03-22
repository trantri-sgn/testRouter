import React, { useEffect } from "react";
import "./App.css";
import routerConfig from "core/routerConfig";
import routers from "routers/routers";
import productApi from "apis/testApi";

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productList = await productApi.getAll();
        console.log(productList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  return <>{routerConfig(routers)}</>;
}

export default App;
