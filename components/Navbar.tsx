interface NavbarProps {
  name: string;
  onClick?: () => void;
}

const Navbar = ({ name, onClick }: NavbarProps) => {
  return (
    <div className="flex justify-between items-center py-4 px-32 fixed top-0 left-0 right-0 bg-bg-primary z-50 ">
      <h3 className="font-bold text-2xl">{name}</h3>{" "}
      <div className="flex gap-8 items-center">
        <span className="text-muted-text">Work</span>
        <span className="text-muted-text">Skills</span>
        <span className="text-muted-text">Contact</span>
        <button
          onClick={onClick}
          className="bg-secondary text-bg-primary px-4 py-2 rounded-full"
        >
          Hire me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
