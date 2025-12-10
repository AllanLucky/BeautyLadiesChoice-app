import { DataGrid } from '@mui/x-data-grid';
import { Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Products = () => {
  const rows = [
    {
      id: 101,
      title: "Macbook Pro",
      img: "/foundation.jpg",
      description: "Latest Apple laptop",
      originalPrice: 150000,
      DiscountPrices: 120000,
      inStock: { text: "Yes", color: "bg-green-600" },
    },
    {
      id: 102,
      title: "iPhone 15",
      img: "/serum1.jpg",
      description: "Newest Apple smartphone",
      originalPrice: 120000,
      DiscountPrices: 100000,
      inStock: { text: "Yes", color: "bg-green-600" },
    },
    {
      id: 103,
      title: "Samsung Galaxy S24",
      img: "/nonda.jpg",
      description: "Flagship Samsung phone",
      originalPrice: 110000,
      DiscountPrices: 95000,
      inStock: { text: "No", color: "bg-red-600" },
    },
    {
      id: 104,
      title: "Dell XPS 13",
      img: "/lotion3.jpg",
      description: "High performance Windows laptop",
      originalPrice: 140000,
      DiscountPrices: 125000,
      inStock: { text: "Yes", color: "bg-green-600" },
    },
    {
      id: 105,
      title: "Sony WH-1000XM5",
      img: "/lotion2.jpg",
      description: "Noise-cancelling headphones",
      originalPrice: 40000,
      DiscountPrices: 35000,
      inStock: { text: "Yes", color: "bg-green-600" },
    },
  ];

  const columns = [
    {
      field: 'img',
      headerName: 'Image',
      width: 120,
      renderCell: (params) => (
        <img
          src={params.value}
          alt={params.row.title}
          className="h-12 w-12 object-cover rounded"
        />
      ),
    },
    { field: 'title', headerName: 'Title', width: 180 },
    { field: 'description', headerName: 'Description', width: 250 },
    { field: 'originalPrice', headerName: 'Original Price', width: 150 },
    { field: 'DiscountPrices', headerName: 'Discount Price', width: 150 },
    {
      field: 'inStock',
      headerName: 'In Stock',
      width: 120,
      renderCell: (params) => (
        <span
          className={`px-2 py-1 rounded-full text-white text-sm ${params.value.color}`}
        >
          {params.value.text}
        </span>
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      renderCell: (params) => (
        <div className="flex gap-1">
          <IconButton
            color="primary"
            onClick={() => alert(`Edit product ${params.row.id}`)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="error"
            onClick={() => alert(`Delete product ${params.row.id}`)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  return (
    <div className="p-5 w-[79vw] mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">All Products</h1>
        <Button
          variant="contained"
          color="success"
          startIcon={<span>➕</span>}
        >
          Add Product
        </Button>
      </div>
      <div style={{ width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          autoHeight // This makes the grid expand to fit all rows
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default Products;
