import LoginElements from "./LoginElements";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <h1 className="text-xl font-semibold">Logo</h1>
        <div className="flex items-center gap-4">
          <NavLinks></NavLinks>
          <LoginElements />
        </div>
      </div>
    </header>
  );
}
