import BaseButton from "./BaseButton";

interface NavbarProps {
  name: string;
  onClick?: () => void;
}

const Navbar = ({ name, onClick }: NavbarProps) => {
  return (
    <div className="flex justify-between px-96 items-center py-5 fixed top-0 left-0 right-0 bg-bg-primary z-50 border-b border-muted-text/20">
      <h3 className="font-bold text-2xl">{name}</h3>{" "}
      <div className="flex gap-8 items-center">
        <span className="text-muted-text">Work</span>
        <span className="text-muted-text">Skills</span>
        <span className="text-muted-text">Contact</span>
        <BaseButton onClick={onClick}>Hire me</BaseButton>
      </div>
    </div>
  );
};

export default Navbar;
