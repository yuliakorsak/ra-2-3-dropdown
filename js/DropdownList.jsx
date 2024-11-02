import { useState } from 'react';
import DropdownItem from './DropdownItem';

export default function DropdownList() {
  const [selected, selectItem] = useState(0);
  const items = [
    'Profile Information',
    'Change Password',
    'Become PRO',
    'Help',
    'Log Out'
  ];

  const dropdownItems = [];

  for (let i = 0; i < items.length; i++) {
    dropdownItems.push(<DropdownItem item={items[i]} onSwitch={() => {
      selectItem(i);
    }} selected={selected === i ? true : false} />);
  }
  return (
    <ul data-id="dropdown" className="dropdown">
      {dropdownItems}
    </ul>
  )
}
