interface BaseButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghostMuted";
}

const variantClasses: Record<
  NonNullable<BaseButtonProps["variant"]>,
  string
> = {
  primary:
    "bg-secondary text-bg-primary hover:bg-bg-primary hover:text-secondary hover:border-primary",
  secondary:
    "bg-bg-primary text-primary border border-border hover:border-secondary hover:text-secondary",
  ghostMuted: "bg-transparent text-muted-text hover:text-primary",
};

const BaseButton = ({
  children,
  onClick,
  variant = "primary",
}: BaseButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full hover:cursor-pointer font-bold transition duration-300 ${variantClasses[variant]}`}
    >
      {children}
    </button>
  );
};

export default BaseButton;
