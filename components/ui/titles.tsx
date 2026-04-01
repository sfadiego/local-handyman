type TitleType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
interface TitleProps {
  children: React.ReactNode;
  type?: TitleType;
  className?: string;
}
export const Title = ({ children, type = 'h1', className = '' }: TitleProps) => {
  const Tag = type;
  return <Tag className={className}>{children}</Tag>;
};
