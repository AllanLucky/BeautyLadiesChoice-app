import React from "react";
import { LineChart } from "@mui/x-charts";

const Product = () => {
  return (
    <div className="p-5 w-[70vw]">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-3xl font-semibold">Product</h3>
        <button className="bg-slate-500 text-white py-2 px-4 rounded">
          Create Product
        </button>
      </div>

      {/* Chart Section */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5, 2, 8.8, 1.5, 5]
              }
            ]}
            height={250}
            width="500"
            margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
            grid={{ vertical: true, horizontal: true }}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
