interface BadgeProps {
  text: string;
  type: 'pending' | 'active' | 'done' | 'waiting';
  showStatusDot?: boolean;
}
export const Badge = ({ text, type, showStatusDot = true }: BadgeProps) => {
  return (
    <div style={{ marginLeft: 'auto' }} className={`status-pill ${type}`}>
      {showStatusDot && <div className="status-dot"></div>}
      {text}
    </div>
  );
};
