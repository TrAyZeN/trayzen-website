import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

type Props = {
  items: (NavItem | string)[];
};

type NavItem = {
  text: string;
  to: string;
};

/*
 * Checks if a given item is of type NavItem.
 */
const isNavItem = (item: NavItem | string) =>
  (item as NavItem).text !== undefined;

/*
 * Converts an item of type NavItem or string into a dom element.
 */
const itemToElement = (item: NavItem | string) => {
  if (isNavItem(item)) {
    const i = item as NavItem;
    return (
      <NavLink to={i.to} key={i.text} end>
        {i.text}
      </NavLink>
    );
  }

  const i = item as string;
  return (
    <NavLink to={`/${i.toLowerCase()}`} key={i} end>
      {i}
    </NavLink>
  );
};

const NavBar: React.FC<Props> = ({ items }: Props) => (
  <div className="navbar">{items.map(itemToElement)}</div>
);

export default NavBar;
