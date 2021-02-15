import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as Io5Icons from "react-icons/io5";
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

          subNav: [
            {
              title: 'Dropdown1',
              path: '/UserLandingpage',
              icon: <RiIcons.RiProfileLine />
            },
            {
              title: 'Dropdown2',
              path: '/UserLandingpage',
              icon: <IoIcons.IoIosPaper />
            }
          ]
        },
        {
          title: 'Videos',
          path: '/',
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
          title: 'Easy Access',
          path: '/',
          icon: <FaIcons.FaCartPlus />
        },
        {
          title: 'Calendar',
          path: '/Calendar',
          icon: <BiIcons.BiCalendar />
        },
        {
          title: 'Profiles',
          path: '/Login',
          icon: <RiIcons.RiProfileLine />,

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
          title: 'Support',
          path: '/Login',
          icon: <IoIcons.IoMdHelpCircle />
        }
      ];

    return SidebarData
  } else if (type === "instructor") {

    const SidebarData =
      [


        {
          title: 'Home',
          path: '/InstructorLandingpage',
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
          title: 'Videos',
          path: '/',
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
          title: 'Easy Access',
          path: '/',
          icon: <FaIcons.FaCartPlus />
        },
        {
          title: 'Calendar',
          path: '/Calendar',
          icon: <BiIcons.BiCalendar />
        },
        {
          title: 'Profiles',
          path: '/Login',
          icon: <RiIcons.RiProfileLine />,

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
          title: 'Support',
          path: '/Login',
          icon: <IoIcons.IoMdHelpCircle />
        }
      ];

    return SidebarData
  } else {
    const SidebarData =
      [


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
          title: 'Videos',
          path: '/',
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
          title: 'Easy Access',
          path: '/',
          icon: <FaIcons.FaCartPlus />
        },
        {
          title: 'Scheduler',
          path: '/Scheduler',
          icon: <BiIcons.BiCalendar />
        },
        {
          title: 'Profiles',
          path: '/Login',
          icon: <RiIcons.RiProfileLine />,

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
          title: 'Support',
          path: '/Login',
          icon: <IoIcons.IoMdHelpCircle />
        }
      ];

    return SidebarData

  }
}

export default Sidebarfunction

