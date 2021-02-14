import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as Io5Icons from "react-icons/io5";
import * as BiIcons from "react-icons/bi";
import * as GiIcons from "react-icons/gi";

export const SideBarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Dropdown1',
        path: '/',
        icon: <RiIcons.RiProfileLine />
      },
      {
        title: 'Dropdown2',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Categories',
    path: '/',
    icon: <GiIcons.GiTeacher />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Dropdown1',
        path: '/',
        icon: <GiIcons.GiTeacher />,
        cName: 'sub-nav'
      },
      {
        title: 'Dropdown2',
        path: '/',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Dropdown3',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
   {
    title: 'Schedule',
    path: '/Scheduler',
    icon: <BiIcons.BiCalendar />
  },
  {
    title: 'Profiles',
    path: '/Login',
    icon: <RiIcons.RiProfileLine/>,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Teacher',
        path: '/Instructor-Landingpage/InstructorLandingpage',
        icon: <RiIcons.RiProfileLine />
      },
      {
        title: 'Student',
        path: '/User-Landingpage/Dasboard',
        icon: <RiIcons.RiProfileLine />
      }
    ]
  },
  {
    title: 'Logout',
    path: '/Login',
    icon: <IoIcons.IoMdHelpCircle />
  }
];