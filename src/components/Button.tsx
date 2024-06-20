import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  variant?:
    | 'primary'
    | 'secondary'
    | 'warning'
    | 'danger'
    | 'success'
    | 'info'
    | 'light'
    | 'dark';
  handleClick: () => void;
}
const Button = ({ children, variant = 'primary', handleClick }: Props) => {
  return (
    <button
      type="button"
      className={`btn btn-${variant}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
