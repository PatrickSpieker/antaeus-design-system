const PALETTE = {
  plum500: '#5A3F7A', plum700: '#322244', plum800: '#231830', plum900: '#15101C',
  plum300: '#A68DBD', plum50: '#F4F0F7',
  ink900: '#1A1814', ink300: '#D9D3C5', ink400: '#B5AE9F', ink500: '#8F887A',
  bone100: '#F5F1EB',
};

const SIZES = {
  sm: { padding: '7px 13px', fontSize: 12, radius: 6 },
  md: { padding: '11px 18px', fontSize: 14, radius: 10 },
  lg: { padding: '15px 24px', fontSize: 15, radius: 10 },
};

function variantStyle(variant) {
  switch (variant) {
    case 'secondary':
      return { background: PALETTE.ink900, color: '#fff', border: `1px solid ${PALETTE.ink900}`,
        boxShadow: '0 2px 0 rgba(0,0,0,0.3), 0 4px 12px rgba(26,24,20,0.18)' };
    case 'ghost':
      return { background: '#fff', color: PALETTE.plum700, border: `1px solid ${PALETTE.plum300}`,
        boxShadow: '0 1px 2px rgba(26,24,20,0.06)' };
    case 'destructive':
      return { background: '#8F3A2E', color: '#fff', border: '1px solid #6B2A21',
        boxShadow: '0 2px 0 #6B2A21, 0 4px 12px rgba(107,42,33,0.25)' };
    case 'primary':
    default:
      return { background: PALETTE.plum700, color: '#fff', border: `1px solid ${PALETTE.plum900}`,
        boxShadow: '0 2px 0 #15101C, 0 4px 12px rgba(21,16,28,0.22)' };
  }
}

export function Button({ variant = 'primary', size = 'md', disabled = false, onClick, children }) {
  const sz = SIZES[size] || SIZES.md;
  const base = variantStyle(variant);
  const style = {
    fontFamily: "'IBM Plex Sans', -apple-system, system-ui, sans-serif",
    fontWeight: 600,
    letterSpacing: '-0.005em',
    lineHeight: 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: sz.padding,
    fontSize: sz.fontSize,
    borderRadius: sz.radius,
    transition: 'all 140ms cubic-bezier(0.22, 0.61, 0.36, 1)',
    ...base,
    ...(disabled ? { background: PALETTE.ink300, color: PALETTE.ink500, border: `1px solid ${PALETTE.ink400}`, boxShadow: 'none' } : {}),
  };
  return (
    <button style={style} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
