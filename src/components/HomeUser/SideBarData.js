import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';


export const SideBarData = [
    {
        title:'Overview',
        path: '/overview',
        icon: <AiIcons.AiFillHome />,
        iconClosed:<RiIcons.RiArrowDownSFill />,
        iconClosed:<RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Users',
                path: '/overviev/users',
                icon: <IoIcons.IoIosPaper />,
             },
             {
                title: 'Revenue',
                path: '/overviev/revenue',
                icon: <IoIcons.IoIosPaper />,
             },
             {
                title: 'Revenue',
                path: '/overviev/revenue',
                icon: <IoIcons.IoIosPaper />,
             }
        ]
    },
    {
        title: 'Categories',
        path: '/',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Team',
        path: '/',
        icon: <IoIcons.IoMdPeople/>,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Calender',
        path: '/',
        icon: <FaIcons.FaRegCalendarCheck />,
        cName: 'nav-text'
    },

    {
        title: 'Log Out',
        path: '/',
        icon: <FaIcons.FaPowerOff />,
        cName: 'nav-text'
    },

]
