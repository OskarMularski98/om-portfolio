interface BaseSectionProps {
  children: React.ReactNode;
}

const BaseSection = ({ children }: BaseSectionProps) => {
  return <div className="py-64">{children}</div>;
};

export default BaseSection;
