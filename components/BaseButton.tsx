interface BaseButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const BaseButton = ({ children, onClick }: BaseButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-secondary text-bg-primary px-4 py-2 rounded-full hover:cursor-pointer hover:bg-bg-primary hover:text-secondary font-bold hover:border-primary transition duration-300"
    >
      {children}
    </button>
  );
};

export default BaseButton;
