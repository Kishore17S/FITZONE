import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';


export const NeatboardData =[

    {
        title:"Home",
        icon:<HomeIcon/>,
        link:"/home"
    },
    {
        title:"MailBox",
        icon:<ContactMailIcon/>,
        link:"/mailbox"
    },
    {
        title:"Dashboard",
        icon:<DashboardIcon/>,
        link:"/dashboard"
    },
    {
        title:"ShoppingCart",
        icon:<ShoppingCartIcon/>,
        link:"/shoppingcart"
    },
    {
        title:"Analytics",
        icon:<AnalyticsIcon/>,
        link:"/analytics"
    },
    {
        title:"Person",
        icon:<PersonTwoToneIcon/>,
        link:"/person"
    }
]
