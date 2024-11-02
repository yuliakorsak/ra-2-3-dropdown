import { useState } from 'react';
import DropdownList from './DropdownList';

export default function Dropdown() {
  const [dropdownOpen, toggleDropdown] = useState(false);
  const wrapperClassList = `dropdown-wrapper${dropdownOpen ? ' open' : ''}`;

  return (
    <div className="container">
      <div data-id="wrapper" className={wrapperClassList}>
        <button data-id="toggle" className="btn" onClick={() => toggleDropdown(!dropdownOpen)}>
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </button>
        <DropdownList />
      </div>
    </div>
  )
}