export default function DropdownItem({ item, onSwitch, selected }) {
  const active = selected ? 'active' : null;
  return (
    <li className={active}><a href="#" onClick={(e) => {
      e.preventDefault();
      onSwitch();
    }}>{item}</a></li>
  )
}
