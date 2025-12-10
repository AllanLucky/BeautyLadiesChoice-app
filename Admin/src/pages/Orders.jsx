import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { FaClock, FaCheckDouble, FaTimes, FaRegCheckCircle } from "react-icons/fa";

const STATUS = {
  0: { text: "Pending", color: "text-yellow-500", icon: FaClock },
  1: { text: "In Progress", color: "text-blue-500", icon: FaClock },
  2: { text: "Completed", color: "text-green-500", icon: FaCheckDouble },
  3: { text: "Cancelled", color: "text-red-500", icon: FaTimes },
};

const Orders = () => {
  const [rows, setRows] = useState([
    {
      id: 301,
      customer: "John Doe",
      product: "Macbook Pro",
      quantity: 1,
      totalAmount: 150000,
      status: 0,
      delivered: false,
    },
    {
      id: 302,
      customer: "Jane Smith",
      product: "iPhone 15",
      quantity: 2,
      totalAmount: 200000,
      status: 2,
      delivered: true,
    },
    {
      id: 303,
      customer: "Michael Johnson",
      product: "Samsung Galaxy S24",
      quantity: 1,
      totalAmount: 95000,
      status: 3,
      delivered: false,
    },
  ]);

  const toggleDelivered = (id) => {
    setRows((prev) =>
      prev.map((row) =>
        row.id === id
          ? { ...row, delivered: row.status > 1 ? !row.delivered : row.delivered }
          : row
      )
    );
  };

  const columns = [
    { field: "customer", headerName: "Customer", width: 180 },
    { field: "product", headerName: "Product", width: 200 },
    { field: "quantity", headerName: "Quantity", width: 120 },
    { field: "totalAmount", headerName: "Total Amount", width: 150 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        const StatusIcon = STATUS[params.value].icon;
        return <StatusIcon className={`text-[25px] ${STATUS[params.value].color}`} />;
      },
    },
    {
      field: "delivered",
      headerName: "Mark as Delivered",
      width: 160,
      renderCell: (params) => (
        <Tooltip title={params.value ? "Delivered" : "Mark as Delivered"}>
          <span>
            <IconButton
              onClick={() => toggleDelivered(params.row.id)}
              disabled={params.row.status <= 1}
            >
              <FaRegCheckCircle
                className={`text-[25px] ${
                  params.value
                    ? "text-green-500"
                    : params.row.status > 1
                    ? "text-gray-500 cursor-pointer"
                    : "text-gray-300"
                }`}
              />
            </IconButton>
          </span>
        </Tooltip>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => (
        <div className="flex gap-1">
          <Tooltip title="Edit Order">
            <IconButton
              color="primary"
              onClick={() => alert(`Edit order ${params.row.id}`)}
            >
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete Order">
            <IconButton
              color="error"
              onClick={() => alert(`Delete order ${params.row.id}`)}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <div className="p-5 w-[79vw] mx-auto">
      <h1 className="text-2xl font-semibold mb-6">All Orders</h1>
      <div style={{ width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          autoHeight
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default Orders;

