import { Box, IconButton, useTheme } from "@mui/material";

import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { blueGrey} from "@mui/material/colors";

const Topbar = () => {


  return (
    <Box display="flex" justifyContent="space-between" padding={2}>
      
      <Box
          display="flex"
          backgroundColor='blueGrey'
          borderRadius="40px"
          position='relative'
          left="490px"
          height="70%"
        
          top="10px"
          
        >
        
          <IconButton type="button" sx={{ padding: 1 }}>
            <SearchIcon />
          </IconButton>
          <InputBase placeholder="Search" />
        </Box>
    
      <Box display="flex" >
      
       
        <IconButton borderRadius='10px'>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;