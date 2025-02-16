import { navLinks } from "@/data/navLinks";

const NavLinks = () => {
  return (
    <ul className="flex items-center gap-8">
      {navLinks.map(({ path, label }) => (
        <li key={path}>{label}</li>
      ))}
    </ul>
  );
};

export default NavLinks;
