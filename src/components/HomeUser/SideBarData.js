import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from "react-icons/bi";
import * as GiIcons from "react-icons/gi";



const Sidebarfunction = (type) => {
  if (type === "student") {
    const SidebarData =
      [
        {
          title: 'Home',
          path: '/UserLandingpage',
          icon: <AiIcons.AiFillHome />,
          iconClosed: <RiIcons.RiArrowDownSFill />,
          iconOpened: <RiIcons.RiArrowUpSFill />,


        },
        {
          title: 'Videos',

          icon: <GiIcons.GiTeacher />,
          iconClosed: <RiIcons.RiArrowDownSFill />,
          iconOpened: <RiIcons.RiArrowUpSFill />,

          subNav: [
            {
              title: 'All',
              path: '/videoSearch',
              icon: <GiIcons.GiTeacher />,
              cName: 'sub-nav'
            },
            {
              title: 'Coding',
              path: '/videoCoding',
              icon: <IoIcons.IoIosPaper />,
              cName: 'sub-nav'
            },
            {
              title: 'Music',
              path: '/videoMusic',
              icon: <IoIcons.IoIosPaper />
            },
            {
              title: 'Technologies',
              path: '/videoTechnologies',
              icon: <IoIcons.IoIosPaper />
            },
          ]
        },

        {
          title: 'Calendar',
          path: '/scheduler',
          icon: <BiIcons.BiCalendar />
        },

      ];

    return SidebarData
  } else if (type === "instructor") {

    const SidebarData =
      [
        {
          title: 'Home',
          path: '/UserLandingpage',
          icon: <AiIcons.AiFillHome />,
          iconClosed: <RiIcons.RiArrowDownSFill />,
          iconOpened: <RiIcons.RiArrowUpSFill />,


        },
        {
          title: 'Videos',

          icon: <GiIcons.GiTeacher />,
          iconClosed: <RiIcons.RiArrowDownSFill />,
          iconOpened: <RiIcons.RiArrowUpSFill />,

          subNav: [
            {
              title: 'All',
              path: '/videoSearch',
              icon: <GiIcons.GiTeacher />,
              cName: 'sub-nav'
            },
            {
              title: 'Coding',
              path: '/videoCoding',
              icon: <IoIcons.IoIosPaper />,
              cName: 'sub-nav'
            },
            {
              title: 'Music',
              path: '/videoMusic',
              icon: <IoIcons.IoIosPaper />
            },
            {
              title: 'Technologies',
              path: '/videoTechnologies',
              icon: <IoIcons.IoIosPaper />
            },
          ]
        },

        {
          title: 'Calendar',
          path: '/scheduler',
          icon: <BiIcons.BiCalendar />
        },

      ];
    return SidebarData
  }
}

export default Sidebarfunction

