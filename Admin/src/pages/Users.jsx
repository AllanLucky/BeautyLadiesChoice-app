import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Users = () => {
  const rows = [
    {
      id: 201,
      name: "John Doe",
      email: "john@example.com",
      phone: "0712345678",
      role: "Admin",
      status: { text: "Active", color: "bg-green-600" },
    },
    {
      id: 202,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "0723456789",
      role: "User",
      status: { text: "Inactive", color: "bg-red-600" },
    },
    {
      id: 203,
      name: "Michael Johnson",
      email: "michael@example.com",
      phone: "0734567890",
      role: "User",
      status: { text: "Active", color: "bg-green-600" },
    },
    {
      id: 204,
      name: "Emily Davis",
      email: "emily@example.com",
      phone: "0745678901",
      role: "Moderator",
      status: { text: "Active", color: "bg-green-600" },
    },
    {
      id: 205,
      name: "William Brown",
      email: "william@example.com",
      phone: "0756789012",
      role: "User",
      status: { text: "Inactive", color: "bg-red-600" },
    },
  ];

  const columns = [
    { field: 'name', headerName: 'Name', width: 180 },
    { field: 'email', headerName: 'Email', width: 220 },
    { field: 'phone', headerName: 'Phone No.', width: 150 },
    { field: 'role', headerName: 'Role', width: 150 },
    {
      field: 'status',
      headerName: 'Status',
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
            onClick={() => alert(`Edit user ${params.row.id}`)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="error"
            onClick={() => alert(`Delete user ${params.row.id}`)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  return (
    <div className="p-5 w-[79vw] mx-auto">
      <h1 className="text-2xl font-semibold mb-6">All Users</h1>
      <div style={{ width: '100%' }}>
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
}

export default Users;
