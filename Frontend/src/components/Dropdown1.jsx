import React, {useState}from 'react'
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import KeyboardAltOutlinedIcon from '@mui/icons-material/KeyboardAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import {CSSTransition} from 'react-transition-group'

const Dropdown1 = () => {
    const [activeMenu, setActiveMenu] = useState("main")
  return (
    <div className='dropdownprofile'>
        <CSSTransition 
            in={activeMenu}
            unmountOnExit
            timeout={500}
            classNames='menu-primary'>
        <ul  >
            {/* <li className='dropdownitem'><AdminPanelSettingsOutlinedIcon/> Your data in YouTube</li> */}
            <li className='dropdownitem-text'>
                    <Link style={{ textDecoration: 'none', color:'inherit' }}>
                    <LocalPoliceOutlinedIcon/>
                     <span>
                     Your data in YouTube
                     </span>
                     </Link>
            </li>
            <Divider sx={{ bgcolor: "secondary.light" }} />
            {/* <li className='dropdownitem'>Appearance:</li> */}
            <li className='dropdownitem-text' onClick={()=>setActiveMenu}>
                    <Link style={{ textDecoration: 'none', color:'inherit' }}  >
                    <ModeNightOutlinedIcon/>
                     <span style={{marginRight:'7.1rem'}}>
                     Appearance:
                     </span>
                     
                     <ArrowForwardIosOutlinedIcon sx={{}}/>
                     </Link>
            </li>
            {/* <li className='dropdownitem'>Language:</li> */}
            <li className='dropdownitem-text'>
                    <Link style={{ textDecoration: 'none', color:'inherit' }}>
                    <TranslateOutlinedIcon/>
                     <span style={{marginRight:'48%'}}>
                     Language:
                     </span>
                     <ArrowForwardIosOutlinedIcon/>
                     </Link>
            </li>
            {/* <li className='dropdownitem'>Restricted Mode:</li> */}
            <li className='dropdownitem-text'>
                    <Link style={{ textDecoration: 'none', color:'inherit' }}>
                    <AdminPanelSettingsOutlinedIcon/>
                     <span style={{marginRight:'30%'}}>
                     Restricted Mode:
                     </span>
                     <ArrowForwardIosOutlinedIcon/>
                     </Link>
            </li>
            {/* <li className='dropdownitem'>Location:</li> */}
            <li className='dropdownitem-text'>
                    <Link style={{ textDecoration: 'none', color:'inherit' }}>
                    <LanguageOutlinedIcon/>
                     <span style={{marginRight:'50%'}}>
                     Location:
                     </span>
                     <ArrowForwardIosOutlinedIcon/>
                     </Link>
            </li>
            {/* <li className='dropdownitem'>Keyboard shortcuts</li> */}
            <li className='dropdownitem-text'>
                    <Link style={{ textDecoration: 'none', color:'inherit' }}>
                    <KeyboardAltOutlinedIcon/>
                     <span style={{marginRight:'22%'}}>
                     Keyboard shortcuts:
                     </span>
                     <ArrowForwardIosOutlinedIcon/>
                     </Link>
            </li>
            <Divider sx={{ bgcolor: "secondary.light" }} />
            {/* <li className='dropdownitem'>Settings</li> */}
            <li className='dropdownitem-text'>
                    <Link style={{ textDecoration: 'none', color:'inherit' }}>
                    <SettingsOutlinedIcon/>
                     <span>
                     Settings
                     </span>
                     </Link>
            </li>
            <Divider sx={{ bgcolor: "secondary.light" }} />
            {/* <li className='dropdownitem'>Help</li> */}
            <li className='dropdownitem-text'>
                    <Link style={{ textDecoration: 'none', color:'inherit' }}>
                    <HelpOutlineOutlinedIcon/>
                    
                     <span>
                     Help
                     </span>
                     </Link>
            </li>
            {/* <li className='dropdownitem'>Send feedback</li> */}
            <li className='dropdownitem-text'>
                    <Link style={{ textDecoration: 'none', color:'inherit' }}>
                    <AnnouncementOutlinedIcon/>
                     <span>
                     Send feedback
                     </span>
                     </Link>
            </li>
        </ul>
        </CSSTransition>
        <CSSTransition 
            in={activeMenu=== 'Appearance:'}
            unmountOnExit
            timeout={500}
            classNames='menu-secondary'>
                <ul  >
            
            <li className='dropdownitem-text'>
                    <Link to={'main'}style={{ textDecoration: 'none', color:'inherit' }}>
                    <ArrowBackIosIcon/>
                     <span>
                     Appearance
                     </span>
                     </Link>
            </li>
            <Divider sx={{ bgcolor: "secondary.light" }} />
            </ul>
        </CSSTransition>
    </div>
  )
}

export default Dropdown1

