export interface ButtonProps {
  /** Visual style. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
  /** Size preset. */
  size?: 'sm' | 'md' | 'lg';
  /** Disable interaction. */
  disabled?: boolean;
  /** Click handler. */
  onClick?: () => void;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
