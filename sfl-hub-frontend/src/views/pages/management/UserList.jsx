import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const UserList = () => {
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    userType: "",
    email: "",
    createdOn: "",
    accountNumber: "",
    managedBy: "",
    status: ""
  });

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleReset = () => {
    setFormData({
      name: "",
      userName: "",
      userType: "",
      email: "",
      createdOn: "",
      accountNumber: "",
      managedBy: "",
      status: ""
    });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Card elevation={2}>
        <CardContent>
          {/* Header */}
       <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
  <Box display="flex" alignItems="center" gap={1.5}>
    <Box
      sx={{
        marginBottom:6,
        position: "absolute",
        width: 40,
        height: 40,
        backgroundColor: "#8e24aa",
       
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        boxShadow: 3,
         zIndex: 1,
         padding:"30px"
      }}
    >
      <PeopleIcon sx={{ fontSize: 26 }} />
      
    </Box>
    <Typography
      variant="h6"
      sx={{
        fontWeight: "bold",
        fontSize: "16px",
        display: "flex",
        alignItems: "center",
        marginLeft:9,
        position: "absolute",
        marginBottom:4,
      }}
    >
      User List
    </Typography>
  </Box>

  <Button
    variant="contained"
    sx={{ backgroundColor: "#8e24aa", fontSize: "12px",padding:"10px 16px",fontWeight:550  }}
    // startIcon={<AddIcon />}
  >
    Add User
  </Button>
</Box>
          {/* Filters / Input Fields */}
          <Grid container spacing={2} mb={2}>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Name"
                value={formData.name}
                onChange={handleChange("name")}
                fullWidth
                variant="outlined"
                size="small"
                InputProps={{ sx: { fontSize: "13px" } }}
                InputLabelProps={{ sx: { fontSize: "13px" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="User Name"
                value={formData.userName}
                onChange={handleChange("userName")}
                fullWidth
                variant="outlined"
                size="small"
                InputProps={{ sx: { fontSize: "13px" } }}
                InputLabelProps={{ sx: { fontSize: "13px" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Select
                fullWidth
                variant="outlined"
                value={formData.userType}
                onChange={handleChange("userType")}
                displayEmpty
                size="small"
                sx={{ fontSize: "13px" }}
              >
                <MenuItem value="" sx={{ fontSize: "13px" }}>User Type</MenuItem>
                <MenuItem value="admin" sx={{ fontSize: "13px" }}>Customer</MenuItem>
                <MenuItem value="staff" sx={{ fontSize: "13px" }}>Employee</MenuItem>
                <MenuItem value="customer" sx={{ fontSize: "13px" }}>Contractor</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Email"
                value={formData.email}
                onChange={handleChange("email")}
                fullWidth
                variant="outlined"
                size="small"
                InputProps={{ sx: { fontSize: "13px" } }}
                InputLabelProps={{ sx: { fontSize: "13px" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Created On"
                type="date"
                value={formData.createdOn}
                onChange={handleChange("createdOn")}
                fullWidth
                variant="outlined"
                size="small"
                InputLabelProps={{ shrink: true, sx: { fontSize: "13px" } }}
                InputProps={{ sx: { fontSize: "13px" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Account Number"
                value={formData.accountNumber}
                onChange={handleChange("accountNumber")}
                fullWidth
                variant="outlined"
                size="small"
                InputProps={{ sx: { fontSize: "13px" } }}
                InputLabelProps={{ sx: { fontSize: "13px" } }}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Select
                fullWidth
                variant="outlined"
                value={formData.managedBy}
                onChange={handleChange("managedBy")}
                displayEmpty
                size="small"
                sx={{ fontSize: "13px" }}
              >
                <MenuItem value="" sx={{ fontSize: "13px" }}>Managed By</MenuItem>
                <MenuItem value="manager1" sx={{ fontSize: "13px" }}>No Option</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Select
                fullWidth
                variant="outlined"
                value={formData.status}
                onChange={handleChange("status")}
                displayEmpty
                size="small"
                sx={{ fontSize: "13px" }}
              >
                <MenuItem value="" sx={{ fontSize: "13px" }}>Status</MenuItem>
                <MenuItem value="Enable" sx={{ fontSize: "13px" }}>Enable</MenuItem>
                <MenuItem value="Disable" sx={{ fontSize: "13px" }}>Disable</MenuItem>
              </Select>
            </Grid>
          </Grid>

          {/* Buttons */}
          <Box display="flex" justifyContent="flex-end" gap={2} mb={2} flexWrap="wrap">
            <Button
              variant="contained"
              color="error"
              sx={{ fontSize: "12px",padding:"10px",fontWeight:550}}
            >
              {<FileDownloadIcon />}
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#ec407a", fontSize: "12px",padding:"10px 16px",fontWeight:550 }}
              startIcon={<SearchIcon />}
            >
              Search
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#9e9e9e", fontSize: "12px",padding:"10px 16px",fontWeight:550  }}
              startIcon={<RestartAltIcon />}
              onClick={handleReset}
            >
              Reset
            </Button>
          </Box>

          {/* Table */}
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  {[
                    "Name",
                    "User Name",
                    "User Type",
                    "Email",
                    "Created On",
                    "Account No.",
                    "Managed By",
                    "Status",
                    "Actions"
                  ].map((header, i) => (
                    <TableCell key={i} sx={{ fontWeight: "bold", fontSize: "13px" }}>
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={9} align="center" sx={{ fontSize: "13px" }}>
                    No rows found
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <Box
            mt={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
          >
            <Button variant="outlined" disabled sx={{ fontSize: "12px" }}>
              Previous
            </Button>
            <Typography sx={{ fontSize: "13px" }}>
              Total rows : 0 &nbsp;&nbsp; 1 of 1
            </Typography>
            <Select
              variant="outlined"
              defaultValue={10}
              size="small"
              sx={{ minWidth: 120, fontSize: "13px" }}
            >
              <MenuItem value={10} sx={{ fontSize: "13px" }}>10 rows</MenuItem>
              <MenuItem value={25} sx={{ fontSize: "13px" }}>25 rows</MenuItem>
              <MenuItem value={50} sx={{ fontSize: "13px" }}>50 rows</MenuItem>
            </Select>
            <Button variant="outlined" disabled sx={{ fontSize: "12px" }}>
              Next
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserList;
