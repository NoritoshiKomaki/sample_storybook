import './button.css';

type ButtonTheme =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success';

type ButtonColorObj = {
  [key in ButtonTheme]: `#${string}`;
};

interface ButtonProps {
  color?: string;
  theme?: ButtonTheme;
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
  color = '#FFF',
  size = 'medium',
  theme = 'primary',
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
        backgroundColor: isDisabled ? 'gray' : buttonColorObj[theme],
        opacity: isDisabled ? 0.5 : 1,
      }}
      disabled={isDisabled}
      {...props}
    >
      {label}
    </button>
  );
};
