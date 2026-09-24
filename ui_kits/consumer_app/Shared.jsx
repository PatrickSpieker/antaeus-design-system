// Small shared pieces used across screens.

function Icon({ name, size = 20, stroke = 1.5, color = 'currentColor' }) {
  const paths = {
    activity: <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.5.5 0 0 1-.96 0L9.68 3.18a.5.5 0 0 0-.96 0l-2.35 8.36A2 2 0 0 1 4.44 13H2"/>,
    heart: <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/>,
    pill: <g><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></g>,
    clipboard: <g><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></g>,
    calendar: <g><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></g>,
    stethoscope: <g><path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/></g>,
    file: <g><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></g>,
    bell: <g><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></g>,
    message: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>,
    plus: <g><path d="M5 12h14"/><path d="M12 5v14"/></g>,
    search: <g><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></g>,
    check: <path d="M20 6 9 17l-5-5"/>,
    chevronR: <path d="m9 18 6-6-6-6"/>,
    trendUp: <g><path d="M22 7 13.5 15.5 8.5 10.5 2 17"/><path d="M16 7h6v6"/></g>,
    trendDown: <g><path d="M22 17 13.5 8.5 8.5 13.5 2 7"/><path d="M16 17h6v-6"/></g>,
    home: <g><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M9 22V12h6v10"/></g>,
    user: <g><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></g>,
    droplet: <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5S13 2.5 12 2c-1 .5-3 1.5-5 3.5S4 13 4 15a7 7 0 0 0 7 7Z"/>,
    moon: <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>,
    footprints: <g><path d="M4 16v-2.38c0-.54.1-1.07.32-1.56l.82-1.89a2 2 0 0 1 3.6-.06L9.66 12"/><path d="M20 20v-2.38c0-.54-.1-1.07-.32-1.56l-.82-1.89a2 2 0 0 0-3.6-.06l-1.04 1.89"/><path d="M3 20h6"/><path d="M14 16h6"/></g>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
         strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      {paths[name] || <circle cx="12" cy="12" r="8"/>}
    </svg>
  );
}

function Chip({ tone = 'sage', children }) {
  return (
    <span className={`chip ${tone}`}>
      <span className="dot"/>{children}
    </span>
  );
}

function Card({ children, style }) {
  return <div className="card-soft" style={style}>{children}</div>;
}

function TabBar({ active = 'home', onChange = () => {} }) {
  const items = [
    { id: 'home', label: 'Today', icon: 'home' },
    { id: 'data', label: 'Record', icon: 'activity' },
    { id: 'care', label: 'Care', icon: 'stethoscope' },
    { id: 'me',   label: 'You',   icon: 'user' },
  ];
  return (
    <nav className="app-tabbar" aria-label="Main navigation">
      {items.map(it => (
        <button key={it.id} type="button" aria-current={it.id === active ? 'page' : undefined} onClick={() => onChange(it.id)}>
          <Icon name={it.icon} size={22} stroke={1.5} />
          <span style={{ fontSize: 11, fontWeight: 600 }}>{it.label}</span>
        </button>
      ))}
    </nav>
  );
}

function ScreenHeader({ eyebrow, title, subtitle }) {
  return (
    <div style={{ padding: '18px 4px 12px' }}>
      {eyebrow && <div className="eyebrow-sm" style={{ marginBottom: 10 }}>{eyebrow}</div>}
      <div className="heading-moment" style={{ fontSize: 34 }}>{title}</div>
      {subtitle && <div style={{ fontSize: 14, color: 'var(--fg-2)', marginTop: 10, lineHeight: 1.5 }}>{subtitle}</div>}
    </div>
  );
}

Object.assign(window, { Icon, Chip, Card, TabBar, ScreenHeader });
