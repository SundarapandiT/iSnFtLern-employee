import React from 'react';
import { Box, Typography, Paper, Icon, useMediaQuery, useTheme } from "@mui/material";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import EditIcon from '@mui/icons-material/Edit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WavesIcon from '@mui/icons-material/Waves';
import GroupIcon from '@mui/icons-material/Group';
import DownloadIcon from '@mui/icons-material/Download';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import TheatersIcon from '@mui/icons-material/Theaters';
import ArchiveIcon from '@mui/icons-material/Archive';
import { useNavigate } from 'react-router-dom';
//import styled from '@mui/material';
import { ContentBox,IconBox } from '../../styles/scheduleshipmentStyle';
import { useStyles } from '../../styles/MyshipmentStyle';

const paperStyle = {
    p: 2,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': { boxShadow: 3 },
    borderRadius: 1
};
// const IconBox = styled(Box)(({ theme }) => ({
//   display: 'inline-flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   width: 55,
//   height: 55,
//   // borderRadius: 7,
//   backgroundColor: '#c30ac9',
//   boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
//   marginRight: theme.spacing(3),
//   marginLeft: theme.spacing(1),
// }));

const iconStyle = {
    mr: 2,
    color: 'black'
};

const ManagementDashboard = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleManagementClick = (section) => {
        const routes = {
            'User': '/admin/UserList',
            'Service': '/admin/ServiceList',
            'Vendor': '/admin/VendorList',
            'Container': '/admin/ContainerList',
            'Lead Assignment': '/admin/lead-assignment',
            'Consolidation Center': '/admin/consolidation-center',
            'Ocean Tracking': '/admin/ocean-tracking',
            'Sales Lead - Referred By': '/admin/sales-leads',
            'Invoices services': '/admin/invoices'
        };
        if (routes[section]) {
            navigate(routes[section], { replace: true });
        }
    };

    return (
        <ContentBox>
                {/* Header Section */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Typography variant="h5" sx={{ mb: 3, fontSize: "1.3rem" }}>
        <IconBox className="card-icon">
          <AssignmentIcon className={classes.iconBox} />
        </IconBox>
        Management
      </Typography>
                </Box>

                {/* Grid Section */}
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                    gap: isMobile ? 1 : 2
                }}>
                    {/* User */}
                    <Paper variant="outlined" sx={paperStyle} onClick={() => handleManagementClick('User')}>
                        <AccountBoxIcon sx={iconStyle} />
                        <Typography>User</Typography>
                    </Paper>

                    {/* Service */}
                    <Paper variant="outlined" sx={paperStyle} onClick={() => handleManagementClick('Service')}>
                        <EditIcon sx={iconStyle} />
                        <Typography>Service</Typography>
                    </Paper>

                    {/* Vendor */}
                    <Paper variant="outlined" sx={paperStyle} onClick={() => handleManagementClick('Vendor')}>
                        <FormatListBulletedIcon sx={iconStyle} />
                        <Typography>Vendor</Typography>
                    </Paper>

                    {/* Container */}
                    <Paper variant="outlined" sx={paperStyle} onClick={() => handleManagementClick('Container')}>
                        <TheatersIcon sx={iconStyle} />
                        <Typography>Container</Typography>
                    </Paper>

                    {/* Lead Assignment */}
                    <Paper variant="outlined" sx={paperStyle} onClick={() => handleManagementClick('Lead Assignment')}>
                        <ArchiveIcon sx={iconStyle} />
                        <Typography>Lead Assignment</Typography>
                    </Paper>

                    {/* Consolidation Center */}
                    <Paper variant="outlined" sx={paperStyle} onClick={() => handleManagementClick('Consolidation Center')}>
                        <LocationOnIcon sx={iconStyle} />
                        <Typography>Consolidation Center</Typography>
                    </Paper>

                    {/* Ocean Tracking */}
                    <Paper variant="outlined" sx={paperStyle} onClick={() => handleManagementClick('Ocean Tracking')}>
                        <WavesIcon sx={iconStyle} />
                        <Typography>Ocean Tracking</Typography>
                    </Paper>

                    {/* Sales Lead - Referred By */}
                    <Paper variant="outlined" sx={paperStyle} onClick={() => handleManagementClick('Sales Lead - Referred By')}>
                        <GroupIcon sx={iconStyle} />
                        <Typography>Sales Lead - Referred By</Typography>
                    </Paper>

                    {/* Invoices Services */}
                    <Paper variant="outlined" sx={paperStyle} onClick={() => handleManagementClick('Invoices services')}>
                        <GroupIcon sx={iconStyle} />
                        <Typography>Invoices services</Typography>
                    </Paper>
                </Box>
            </ContentBox>
    );
};

export default ManagementDashboard;