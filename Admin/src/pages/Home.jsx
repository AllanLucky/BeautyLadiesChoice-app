import { LineChart } from "@mui/x-charts/LineChart";

const Home = () => {
  return (
    <div className="flex justify-between h-screen p-2 bg-gray-200 w-[77vw]">

      {/* LEFT PART: Stats Cards + Transactions Table */}
      <div className="flex flex-col w-2/3">

        {/* STAT CARDS */}
        <div className="flex">
          {/* Orders Card */}
          <div className="bg-white h-52 w-52 m-5 shadow-xl flex flex-col rounded-lg items-center">
            <div className="h-32 w-32 m-5 border-[10px] border-blue-400 border-solid rounded-full flex items-center justify-center">
              <h2 className="font-bold text-2xl">699</h2>
            </div>
            <h2 className="font-semibold text-xl">Orders</h2>
          </div>

          {/* Products Card */}
          <div className="bg-white h-52 w-52 m-5 shadow-xl flex flex-col rounded-lg items-center">
            <div className="h-32 w-32 m-5 border-[10px] border-red-300 border-solid rounded-full flex items-center justify-center">
              <h2 className="font-bold text-2xl">200</h2>
            </div>
            <h2 className="font-semibold text-xl">Products</h2>
          </div>

          {/* Users Card */}
          <div className="bg-white h-52 w-52 m-5 shadow-xl flex flex-col rounded-lg items-center">
            <div className="h-32 w-32 m-5 border-[10px] border-gray-400 border-solid rounded-full flex items-center justify-center">
              <h2 className="font-bold text-2xl">250</h2>
            </div>
            <h2 className="font-semibold text-xl">Users</h2>
          </div>
        </div>

        {/* TRANSACTIONS TABLE */}
        <div className="bg-white m-5 rounded-lg">
          <div className="p-6 bg-white rounded-md">
            <h3 className="text-lg font-bold mb-4">Latest Transactions</h3>

            {/* Table for Latest Transactions */}
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4">Customer</th>
                  <th className="py-2 px-4">Amount</th>
                  <th className="py-2 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Table Rows */}
                <tr className="border-b">
                  <td className="py-2 px-4">Allan</td>
                  <td className="py-2 px-4">Kes 890</td>
                  <td className="py-2 px-4 text-green-500">Approved</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Shehe</td>
                  <td className="py-2 px-4">Kes 1000</td>
                  <td className="py-2 px-4">Pending</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Sharon</td>
                  <td className="py-2 px-4">Kes 200</td>
                  <td className="py-2 px-4 text-red-600">Decline</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Allan</td>
                  <td className="py-2 px-4">Kes 890</td>
                  <td className="py-2 px-4">Approved</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* RIGHT PART: Revenue + Losses + Chart */}
      <div className="flex flex-col w-1/3 bg-white p-5 shadow-xl">

        {/* Revenue Card */}
        <div className="bg-gray-50 p-5 mb-5 shadow-xl rounded-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold">Total Revenue: KES 1230000</h2>
        </div>

        {/* Losses Card */}
        <div className="bg-gray-50 p-5 mb-5 shadow-xl rounded-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold">Total Loss: KES 00</h2>
        </div>

        {/* LineChart Component */}
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[{ data: [2, 5.5, 2, 8.5, 1.5, 5] }]}
          height={300}
        />
      </div>
    </div>
  );
};

export default Home;
