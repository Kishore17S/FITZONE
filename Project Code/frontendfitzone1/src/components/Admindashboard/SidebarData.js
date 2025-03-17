import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  // {
  //   title: 'Home',
  //   path: '/home',
  //   icon: <AiIcons.AiFillHome />,
  //   cName: 'nav-text'
  // },
  {
    title: 'Trainer List',
    path: '/Trainerdashboard',
    // icon: <IoIcons.IoIosPaper />,
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'User List',
    path: '/Userlist',
    icon: <IoIcons.IoMdPeople />,
    // icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'User Feedbacks',
    path: '/Userfeedback',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'User Queries',
    path: '/Userqueries',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Videos',
    path: '/video',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Exercise',
    path: '/Exercisedashboard',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];