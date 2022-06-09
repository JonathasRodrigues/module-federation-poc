import React from 'react';

import { NavLink } from 'react-router-dom';

import CartOutlineIcon from '@eduzz/houston-icons/CartOutline';
import FolderOutlineIcon from '@eduzz/houston-icons/FolderOutline';
import Layout from '@eduzz/houston-ui/Layout';

const { Sidebar } = Layout;
const { Menu: SidebarMenu, MenuItem, SubMenuItem } = Sidebar;

export type Item = {
  label: string;
  to?: string;
  submenu?: Item[];
  icon?: React.ReactNode;
};

const items: Item[] = [
  {
    label: 'Sales',
    to: '/sales',
    icon: <CartOutlineIcon size={24} />
  },
  {
    label: 'Products',
    icon: <FolderOutlineIcon size={24} />,
    submenu: [
      {
        label: 'Create',
        to: '/product/create'
      },
      {
        label: 'List',
        to: '/product/list'
      }
    ]
  }
];

export const Menu = () => (
  <SidebarMenu>
    {items.map(item => {
      if (item.submenu) {
        return (
          <SubMenuItem key={item.label} label={item.label} icon={item.icon}>
            {item.submenu.map(subItem => (
              <MenuItem to={subItem.to} key={subItem.label} icon={subItem.icon} as={NavLink}>
                {subItem.label}
              </MenuItem>
            ))}
          </SubMenuItem>
        );
      }
      return (
        <MenuItem key={item.label} to={item.to} icon={item.icon} as={NavLink}>
          {item.label}
        </MenuItem>
      );
    })}
  </SidebarMenu>
);
