interface BaseSectionProps {
  children: React.ReactNode;
}

const BaseSection = ({ children }: BaseSectionProps) => {
  return <div className="py-[96px]">{children}</div>;
};

export default BaseSection;
