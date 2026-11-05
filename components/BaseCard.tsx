interface BaseCardProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "muted";
  className?: string;
}

const BaseCard = ({
  children,
  variant = "primary",
  className,
}: BaseCardProps) => {
  const variantClasses: Record<
    NonNullable<BaseCardProps["variant"]>,
    string
  > = {
    primary: "bg-border border border-border rounded-2xl text-muted-text",
    secondary: "bg-secondary rounded-2xl text-dark",
    muted: "bg-surface text-primary rounded-2xl",
  };
  return (
    <div className={[`${variantClasses[variant]} ${className}`].join(" ")}>
      {children}
    </div>
  );
};

export default BaseCard;
