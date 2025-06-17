import React from 'react';
import { Box, Typography, Paper, Icon } from "@mui/material";
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

const paperStyle = {
    p: 2,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': { boxShadow: 3 },
    borderRadius: 1
};

const iconStyle = {
    mr: 3,
    color: 'black'
};

const ManagementDashboard = () => {
    const navigate = useNavigate();

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
        <Box sx={{ p: 3, bgcolor: "#f5f5f5", borderRadius: 2, m: 2 }}>
            <Box sx={{ p: 3, bgcolor: 'white', minHeight: '100vh' }}>
                {/* Header Section */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Icon sx={{
                        bgcolor: '#773ba8',
                        mr: 2,
                        width: 56,
                        height: 56,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <AssignmentIcon sx={{ color: '#fff', fontSize: 32, borderRadius: '0px' }} />
                    </Icon>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                        Management
                    </Typography>
                </Box>

                {/* Grid Section */}
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
                    gap: 2
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
            </Box>
            
        </Box>
        
    );
};

export default ManagementDashboard;