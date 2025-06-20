import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Button, TextField, MenuItem, Typography, Select } from "@mui/material";
import EditUserTabs from "./EditUserTabs";
import { ContentBox, IconBox } from "../../../styles/scheduleshipmentStyle";
import { useStyles } from "../../../styles/MyshipmentStyle";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from "@mui/icons-material/Person";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from '@mui/icons-material/Phone';

const EditUser = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Access location to get state
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState("user-details");
  const [completedTabs, setCompletedTabs] = useState({
    "user-details": true,
    "access-details": false,
    "markup-details": false,
    "documentation": false,
  });

  // Initialize formData with location.state.user if available, otherwise use default values
  const [formData, setFormData] = useState(() => {
    const user = location.state?.user;
    return user
      ? {
          username: user.loginid ,
          password: user.password , 
          accountNumber: user.accountnumber ,
          managedBy: user.managedbyname ,
          companyName: user.companyname ,
          addressLine1: user.addressline1 ,
          addressLine2: user.addressline2 ,
          addressLine3: user.addressline3 ,
          country: user.country ,
          zip: user.zipcode ,
          city: user.city ,
          state: user.state ,
          contactName: user.name ,
          phone1: user.phonenum ,
          phone2: "",
          email: user.email ,
          paperSize: "4 x 6",
          paperSizePreview: "Default",
          userStatus: user.status==="Active" ? "Enable" : "Disable",
          userType: user.usertype ,
        }
      : {
          username: "",
          password: "",
          accountNumber: "",
          managedBy: "",
          companyName: "",
          addressLine1: "",
          addressLine2: "",
          addressLine3: "",
          country: "",
          zip: "",
          city: "",
          state: "",
          contactName: "",
          phone1: "",
          phone2: "",
          email: "",
          paperSize: "4 x 6",
          paperSizePreview: "Default",
          userStatus: "",
          userType: "",
        };
  });

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Logic to save form data
    console.log("Form saved:", formData);
    if (activeTab === "user-details") {
      setCompletedTabs((prev) => ({ ...prev, "user-details": true }));
    }
  };

  const handleDelete = () => {
    // Logic to delete user
    console.log("User deleted");
  };

  const isMobile = window.innerWidth < 600;

  return (
    <Box sx={{ p: 3, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <EditUserTabs
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        isMobile={isMobile}
        completedTabs={completedTabs}
      />

      {/* User Details Form */}
      {activeTab === "user-details" && (
        <ContentBox sx={{
          margin: "3rem",
          width: "100%",
          marginLeft: "0rem"
        }}>
          <Typography variant="h5" sx={{ mb: 3, fontSize: "1.3rem" }}>
            <IconBox className="card-icon">
              <AccountCircleIcon className={classes.iconBox} />
            </IconBox>
            User Management
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }, gap: 2, p: 1 }}>
            {/* Row 1 */}
            <TextField
              label="User Name"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              fullWidth
              className="custom-textfield"
              inputProps={{
                maxLength: 30,
                autoComplete: "off",
                autoCorrect: "off",
                autoCapitalize: "none"
              }}
              InputProps={{
                startAdornment: <AccountCircleIcon sx={{ color: "grey", mr: 1 }} />,
              }}
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              fullWidth
              className="custom-textfield"
              inputProps={{
                maxLength: 20,
                autoComplete: "off",
                autoCorrect: "off",
                autoCapitalize: "none"
              }}
              InputProps={{
                startAdornment: <LockIcon sx={{ color: "grey", mr: 1 }} />,
              }}
            />
            <TextField
              label="Account Number"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleInputChange}
              fullWidth
              className="custom-textfield"
              inputProps={{
                maxLength: 30,
                autoComplete: "off",
                autoCorrect: "off",
                autoCapitalize: "none"
              }}
              InputProps={{
                startAdornment: <PersonIcon sx={{ color: "grey", mr: 1 }} />,
              }}
            />
            <TextField
              select
              label="Managed By"
              name="managedBy"
              className="custom-textfield"
              value={formData.managedBy}
              onChange={handleInputChange}
              fullWidth
            >
              {/* <MenuItem ></MenuItem>
              <MenuItem ></MenuItem>
              <MenuItem ></MenuItem> */}
            </TextField>
            {/* Row 2 */}
            <TextField
              label="Company Name"
              name="companyName"
              className="custom-textfield"
              value={formData.companyName}
              onChange={handleInputChange}
              fullWidth
              inputProps={{
                maxLength: 30,
                autoComplete: "off",
                autoCorrect: "off",
                autoCapitalize: "none"
              }}
              InputProps={{
                startAdornment: <PersonIcon sx={{ color: "grey", mr: 1 }} />,
              }}
            />
            <TextField
              label="Address Line 1"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleInputChange}
              className="custom-textfield"
              fullWidth
              inputProps={{
                maxLength: 50,
                autoComplete: "off",
                autoCorrect: "off",
                autoCapitalize: "none"
              }}
              InputProps={{
                startAdornment: <PersonIcon sx={{ color: "grey", mr: 1 }} />,
              }}
            />
            <TextField
              label="Address Line 2"
              name="addressLine2"
              className="custom-textfield"
              value={formData.addressLine2}
              onChange={handleInputChange}
              fullWidth
              inputProps={{
                maxLength: 50,
                autoComplete: "off",
                autoCorrect: "off",
                autoCapitalize: "none"
              }}
              InputProps={{
                startAdornment: <PersonIcon sx={{ color: "grey", mr: 1 }} />,
              }}
            />
            <TextField
              label="Address Line 3"
              name="addressLine3"
              className="custom-textfield"
              value={formData.addressLine3}
              onChange={handleInputChange}
              fullWidth
              inputProps={{
                maxLength: 50,
                autoComplete: "off",
                autoCorrect: "off",
                autoCapitalize: "none"
              }}
              InputProps={{
                startAdornment: <PersonIcon sx={{ color: "grey", mr: 1 }} />,
              }}
            />
            {/* Row 3 */}
            <TextField
              select
              label="Country"
              name="country"
              className="custom-textfield"
              value={formData.country}
              onChange={handleInputChange}
              fullWidth
            >
              <MenuItem value="India">India</MenuItem>
              <MenuItem value="USA">USA</MenuItem>
              <MenuItem value="UK">UK</MenuItem>
            </TextField>
            <TextField
              label="Zip"
              name="zip"
              className="custom-textfield"
              value={formData.zip}
              onChange={handleInputChange}
              fullWidth
              inputProps={{
                maxLength: 50,
                autoComplete: "off",
                autoCorrect: "off",
                autoCapitalize: "none"
              }}
              InputProps={{
                startAdornment: <PersonIcon sx={{ color: "grey", mr: 1 }} />,
              }}
            />
            <TextField
              label="City"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              fullWidth
              className="custom-textfield"
              inputProps={{
                maxLength: 50,
                autoComplete: "off",
                autoCorrect: "off",
                autoCapitalize: "none"
              }}
              InputProps={{
                startAdornment: <LocationCityIcon sx={{ color: "grey", mr: 1 }} />,
              }}
            />
            <TextField
              label="State"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              fullWidth
              className="custom-textfield"
              inputProps={{
                maxLength: 50,
                autoComplete: "off",
                autoCorrect: "off",
                autoCapitalize: "none"
              }}
              InputProps={{
                startAdornment: <LocationCityIcon sx={{ color: "grey", mr: 1 }} />,
              }}
            />
            {/* Row 4 */}
            <TextField
              label="Contact Name"
              name="contactName"
              className="custom-textfield"
              value={formData.contactName}
              onChange={handleInputChange}
              fullWidth
              inputProps={{
                maxLength: 50,
                autoComplete: "off",
                autoCorrect: "off",
                autoCapitalize: "none"
              }}
              InputProps={{
                startAdornment: <PersonIcon sx={{ color: "grey", mr: 1 }} />,
              }}
            />
            <TextField
              label="Phone 1"
              name="phone1"
              value={formData.phone1}
              className="custom-textfield"
              onChange={handleInputChange}
              fullWidth
              inputProps={{
                maxLength: 15,
                autoComplete: "off",
                autoCorrect: "off",
                autoCapitalize: "none"
              }}
              InputProps={{
                startAdornment: <PhoneIcon sx={{ color: "grey", mr: 1 }} />,
              }}
            />
            <TextField
              label="Phone 2"
              name="phone2"
              className="custom-textfield"
              value={formData.phone2}
              onChange={handleInputChange}
              fullWidth
              inputProps={{
                maxLength: 15,
                autoComplete: "off",
                autoCorrect: "off",
                autoCapitalize: "none"
              }}
              InputProps={{
                startAdornment: <PhoneIcon sx={{ color: "grey", mr: 1 }} />,
              }}
            />
            <TextField
              label="Email"
              name="email"
              className="custom-textfield"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              inputProps={{
                maxLength: 50,
                autoComplete: "off",
                autoCorrect: "off",
                autoCapitalize: "none"
              }}
              InputProps={{
                startAdornment: <EmailIcon sx={{ color: "grey", mr: 1 }} />,
              }}
            />
            {/* Row 5 */}
            <Select
              label="Paper Size"
              name="paperSize"
              value={formData.paperSize}
              className="custom-textfield"
              onChange={handleInputChange}
              fullWidth
               sx={{ fontSize: "11px",padding: "2px 0px"  }}
               size="small"
            >
              <MenuItem value="4 x 6" sx={{ fontSize: "11px" }}>4 x 6</MenuItem>
              <MenuItem value="4 x 6.75" sx={{ fontSize: "11px" }}>4 x 6.75</MenuItem>
              <MenuItem value="4 x 8" sx={{ fontSize: "11px" }}>4 x 8</MenuItem>
              <MenuItem value="4 x 9" sx={{ fontSize: "11px" }}>4 x 9</MenuItem>
              <MenuItem value="8.5 x 11" sx={{ fontSize: "11px" }}>8.5 x 11</MenuItem>
            </Select>
            <Select
              label="Paper Size Preview"
              name="paperSizePreview"
              className="custom-textfield"
              value={formData.paperSizePreview}
              onChange={handleInputChange}
              fullWidth
               sx={{ fontSize: "11px",padding: "2px 0px" }}
               size="small"
            >
              <MenuItem value="4 x 6" sx={{ fontSize: "11px" }}>4 x 6</MenuItem>
              <MenuItem value="4 x 6.75" sx={{ fontSize: "11px" }}>4 x 6.75</MenuItem>
              <MenuItem value="4 x 8" sx={{ fontSize: "11px" }}>4 x 8</MenuItem>
              <MenuItem value="4 x 9" sx={{ fontSize: "11px" }}>4 x 9</MenuItem>
              <MenuItem value="8.5 x 11" sx={{ fontSize: "11px" }}>8.5 x 11</MenuItem>
            </Select>
            <Select
              label="User Status"
              name="userStatus"
              className="custom-textfield"
              value={formData.userStatus}
              onChange={handleInputChange}
              fullWidth
               sx={{ fontSize: "11px",padding: "2px 0px"  }}
               size="small"
            >
              <MenuItem value="Enable" sx={{ fontSize: "11px" }}>Enable</MenuItem>
              <MenuItem value="Disable" sx={{ fontSize: "11px" }}>Disable</MenuItem>
            </Select>
            <Select
              label="User Type"
              name="userType"
              className="custom-textfield"
              value={formData.userType}
              onChange={handleInputChange}
              fullWidth
               sx={{ fontSize: "11px",padding: "2px 0px"  }}
               size="small"
            >
              <MenuItem value="Employee" sx={{ fontSize: "11px" }}>Employee</MenuItem>
              <MenuItem value="Customer" sx={{ fontSize: "11px" }}>Customer</MenuItem>
              <MenuItem value="Contractor" sx={{ fontSize: "11px" }}>Contractor</MenuItem>
            </Select>
          </Box>
        </ContentBox>
      )}

      {/* Buttons */}
      <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box>
          <Button variant="contained" color="error" onClick={handleDelete} sx={{ padding: "10px 16px", fontSize: "12px" }}>
            DELETE
          </Button>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="contained" onClick={handleSave} sx={{ padding: "10px 20px", fontSize: "12px", background: "#E91E63" }}>
            SAVE
          </Button>
          <Button variant="contained" color="secondary" onClick={() => console.log("Save & Exit")} sx={{ padding: "10px 16px", fontSize: "12px" }}>
            SAVE & EXIT
          </Button>
          <Button variant="contained" onClick={() => { navigate(-1) }} sx={{ padding: "10px 16px", fontSize: "12px", background: "grey", color: "white" }}>
            CANCEL
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EditUser;