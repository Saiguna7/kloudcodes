
import NavLink from "./NavLink";
type Link = {
    title: string;
    path: string;
  };
  
  type MenuOverlayProps = {
    links: Link[];
  };
const MenuOverlay = ({ links }:MenuOverlayProps) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;