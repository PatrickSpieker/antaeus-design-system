// Care team + messages.

function CareScreen() {
  const team = [
    { name: 'Dr. Priya Patel',  role: 'Endocrinology · Primary',  initials: 'PP', note: 'Thu 2:30 PM' },
    { name: 'Dr. Marcus Okafor', role: 'Cardiology',                initials: 'MO', note: 'Next: May 3' },
    { name: 'Elena Reyes, RD',   role: 'Nutrition',                 initials: 'ER', note: 'Messaged you' },
  ];
  const messages = [
    { from: 'Dr. Patel', when: 'Yesterday', preview: 'Your lab results look reassuring — let\'s discuss the glucose trend at our visit.', unread: true },
    { from: 'Antaeus',  when: 'Apr 14',   preview: 'Your refill for metformin is ready for pickup at Walgreens (2nd Ave).', unread: false },
  ];
  return (
    <div className="app-scroll" style={{ paddingBottom: 140 }}>
      <ScreenHeader eyebrow="Care" title="Your team" />

      <Card style={{ padding: 0, marginBottom: 18 }}>
        {team.map((p, i) => (
          <div key={p.name} style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 14, borderTop: i === 0 ? 'none' : '1px solid var(--border-hairline)' }}>
            <div style={{ width: 44, height: 44, borderRadius: 22, background: 'var(--plum-100)', color: 'var(--plum-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontSize: 18 }}>
              {p.initials}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 500 }}>{p.name}</div>
              <div style={{ fontSize: 11, color: 'var(--fg-3)', marginTop: 2 }}>{p.role}</div>
            </div>
            <div style={{ fontSize: 11, color: 'var(--fg-3)' }}>{p.note}</div>
          </div>
        ))}
      </Card>

      <div className="eyebrow-sm" style={{ marginBottom: 10, paddingLeft: 4 }}>Messages</div>
      <Card style={{ padding: 0 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ padding: '14px 16px', display: 'flex', gap: 12, borderTop: i === 0 ? 'none' : '1px solid var(--border-hairline)' }}>
            {m.unread && <div style={{ width: 8, height: 8, borderRadius: 4, background: 'var(--plum-500)', marginTop: 6, flexShrink: 0 }}/>}
            <div style={{ flex: 1, paddingLeft: m.unread ? 0 : 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{m.from}</div>
                <div style={{ fontSize: 11, color: 'var(--fg-3)' }}>{m.when}</div>
              </div>
              <div style={{ fontSize: 13, color: 'var(--fg-2)', marginTop: 4, lineHeight: 1.45 }}>{m.preview}</div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}

function YouScreen() {
  const rows = [
    { label: 'Personal details', icon: 'user' },
    { label: 'Connected devices', icon: 'activity' },
    { label: 'Data sharing', icon: 'file' },
    { label: 'Notifications', icon: 'bell' },
    { label: 'Privacy & security', icon: 'clipboard' },
  ];
  return (
    <div className="app-scroll" style={{ paddingBottom: 140 }}>
      <ScreenHeader eyebrow="Your profile" title="Anya Rao" subtitle="Member since March 2025 · 34 readings logged this month" />
      <Card style={{ padding: 0, marginBottom: 14 }}>
        {rows.map((r, i) => (
          <div key={r.label} style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 14, borderTop: i === 0 ? 'none' : '1px solid var(--border-hairline)' }}>
            <div style={{ width: 34, height: 34, borderRadius: 8, background: 'var(--bone-100)', color: 'var(--plum-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name={r.icon} size={16}/>
            </div>
            <div style={{ flex: 1, fontSize: 14 }}>{r.label}</div>
            <Icon name="chevronR" size={16} color="var(--fg-3)"/>
          </div>
        ))}
      </Card>
      <button className="btn btn-secondary" style={{ width: '100%' }}>Sign out</button>
    </div>
  );
}

Object.assign(window, { CareScreen, YouScreen });
