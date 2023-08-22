import './button.css';

type BackgroundColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success';

type ButtonColorObj = {
  [key in BackgroundColor]: `#${string}`;
};

interface ButtonProps {
  color?: string;
  backgroundColor?: BackgroundColor;
  size?: 'small' | 'medium' | 'large';
  label: string;
  isDisabled?: boolean;
  onClick?: () => void;
}

const buttonColorObj: Readonly<ButtonColorObj> = {
  primary: '#1976d2',
  secondary: '#dc004e',
  error: '#f44336',
  warning: '#ff9800',
  info: '#2196f3',
  success: '#4caf50',
};

export const Button = ({
  color = '#000',
  size = 'medium',
  backgroundColor = 'primary',
  label,
  isDisabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`].join(' ')}
      style={{
        color,
        backgroundColor: isDisabled ? 'gray' : buttonColorObj[backgroundColor],
        opacity: isDisabled ? 0.5 : 1,
      }}
      disabled={isDisabled}
      {...props}
    >
      {label}
    </button>
  );
};
