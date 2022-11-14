import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import Header from "./component/header/Header";
import Sidebar from "./component/sidebar/Sidebar";
import ColumnLineChart from "./component/charts/columnLineChart/columnLineChart";
import PloarChart from "./component/charts/polarChart/polarChart";
import PieChart from "./component/charts/pieChart/pieChart";
import BarChart from "./component/charts/BarChart/barChart";
import { getShopOrdersData } from "./redux/features/shopOrdersSlice";
import { getShopProductsData } from "./redux/features/shopProductsSlice";

const App = () => {
  const dispatch = useDispatch();
  const [allOrders, setAllOrders] = useState();
  const [allProductsDetails, setAllProductsDetails] = useState();

  useEffect(() => {
    const getData = async () => {
      const resOrders = await dispatch(getShopOrdersData());
      setAllOrders(resOrders);
      console.log(resOrders);

      const resProducts = await dispatch(getShopProductsData());
      setAllProductsDetails(resProducts);
      console.log(resProducts);
    };
    getData();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="w-full min-h-[90vh] grid grid-cols-12 bg-gray-900">
        <Sidebar />
        <div className="grid grid-cols-1 xl:grid-cols-10 w-full col-span-10 pt-10">
          <div className="col-span-10 min-w-max  max-h-[300px] items-start justify-start flex flex-row w-full ">
            <ColumnLineChart
              resOrders={allOrders}
              resProducts={allProductsDetails}
            />
            <PloarChart
              resOrders={allOrders}
              resProducts={allProductsDetails}
            />
          </div>
          <div className="col-span-10 min-w-max  max-h-[400px] items-start justify-start flex flex-row w-full ">
            <PieChart resOrders={allOrders} resProducts={allProductsDetails} />
            <BarChart resOrders={allOrders} resProducts={allProductsDetails} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
