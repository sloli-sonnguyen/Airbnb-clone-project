import React from 'react';
import CIcon from '@coreui/icons-react';

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Bảng điều khiển',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Bảng dữ liệu'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Chỗ ở',
    to: '/datatable/rooms',
    icon: 'cil-home',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Khách hàng',
    to: '/datatable/customers',
    icon: 'cil-user',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Thuê chỗ ở',
    to: '/datatable/purchases',
    icon: 'cil-spreadsheet',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Chủ nhà',
    to: '/datatable/hosts',
    icon: 'cil-people',
  },


  //edit
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Các thao tác'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Tạo chỗ ở mới',
    to: '/method/createRoom',
    icon: 'cil-star',
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Icons',
    route: '/icons',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
];

export default _nav;
