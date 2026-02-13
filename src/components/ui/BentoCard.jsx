export const BentoCard = ({ children, className, title }) => {
  return (
    <div className={`glass-card flex flex-col gap-2 ${className}`}>
      {title && <h3 className="font-bold text-[10px] text-gray-500 uppercase tracking-[0.2em]">{title}</h3>}
      {children}
    </div>
  );
};