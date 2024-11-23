type ButtonProps = {
  color?: string;
  children: string;
  onClick: () => void;
};

const Button = ({ color = "primary", children, onClick }: ButtonProps) => {
  return (
    <div className={"btn btn-" + color + " ms-3"} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
