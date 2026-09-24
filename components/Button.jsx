// Load styles.css alongside this component.
export function Button({ variant = 'primary', size = 'md', disabled = false, onClick, children }) {
  const kind = ['primary', 'secondary', 'ghost', 'tertiary', 'destructive'].includes(variant) ? variant : 'primary';
  const scale = ['sm', 'md', 'lg'].includes(size) ? size : 'md';
  return (
    <button type="button" className={`btn btn-${kind} btn-${scale}`} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
