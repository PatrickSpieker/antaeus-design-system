// Record screen — list of tracked measurements with add/log entry.

function RecordScreen({ onAdd }) {
  const metrics = [
    { name: 'Fasting glucose', value: '128', unit: 'mg/dL', tone: 'amber', sub: 'Taken 07:12', icon: 'droplet' },
    { name: 'Blood pressure',  value: '118/76', unit: 'mmHg', tone: 'sage', sub: '5 readings · 7d avg', icon: 'activity' },
    { name: 'Resting HR',      value: '72',  unit: 'bpm',  tone: 'sage', sub: 'Apple Watch', icon: 'heart' },
    { name: 'Weight',          value: '141.2', unit: 'lb', tone: 'sage', sub: 'Withings · yesterday', icon: 'trendDown' },
    { name: 'Sleep',           value: '6h 42m', unit: '', tone: 'amber', sub: 'Below target', icon: 'moon' },
    { name: 'Steps',           value: '7,814', unit: '', tone: 'sage', sub: 'Today', icon: 'footprints' },
  ];
  return (
    <div className="app-scroll" style={{ paddingBottom: 140 }}>
      <ScreenHeader eyebrow="Your record" title="What we're tracking" />

      <div className="field-control" style={{ display: 'flex', alignItems: 'center', background: '#fff', border: '1px solid var(--border-input)', borderRadius: 12, padding: '10px 12px', marginBottom: 14, gap: 8 }}>
        <Icon name="search" size={15} color="var(--fg-3)"/>
        <input aria-label="Search measurements" placeholder="Search measurements, labs, medications…" style={{ flex: 1, border: 'none', outline: 'none', fontSize: 14, background: 'transparent' }}/>
      </div>

      <Card style={{ padding: 0, marginBottom: 14 }}>
        {metrics.map((m, i) => (
          <div key={m.name} style={{
            padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 14,
            borderTop: i === 0 ? 'none' : '1px solid var(--border-hairline)',
          }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: 'var(--bone-100)', color: 'var(--plum-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name={m.icon} size={18}/>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 500 }}>{m.name}</div>
              <div style={{ fontSize: 11, color: 'var(--fg-3)', marginTop: 2 }}>{m.sub}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="metric-big" style={{ fontSize: 17 }}>{m.value}</div>
              {m.unit && <div style={{ fontSize: 10, color: 'var(--fg-3)', marginTop: 2 }}>{m.unit}</div>}
            </div>
            <Chip tone={m.tone}>{m.tone === 'sage' ? 'OK' : 'Check'}</Chip>
          </div>
        ))}
      </Card>

      <button className="btn btn-primary" onClick={onAdd} style={{ width: '100%' }}>
        <Icon name="plus" size={18} stroke={2} color="#fff"/> Add measurement
      </button>
    </div>
  );
}

// Modal sheet for adding a reading
function AddMeasurementSheet({ onClose, onSave }) {
  const [value, setValue] = React.useState('128');
  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 60,
      background: 'var(--scrim)',
      display: 'flex', alignItems: 'flex-end',
    }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{
        width: '100%', background: 'var(--bone-50)',
        borderTopLeftRadius: 28, borderTopRightRadius: 28,
        padding: '10px 20px 34px', boxShadow: '0 -12px 40px rgba(26,24,20,0.2)',
        animation: 'slideUp 360ms cubic-bezier(0.22, 0.61, 0.36, 1)',
      }}>
        <div style={{ width: 38, height: 4, background: 'var(--ink-300)', borderRadius: 2, margin: '8px auto 18px' }}/>
        <div className="eyebrow-sm">New reading</div>
        <div className="heading-moment" style={{ fontSize: 26, marginTop: 6 }}>Fasting glucose</div>

        <div className="field-control" style={{ marginTop: 20, background: '#fff', border: '1px solid var(--border-input)', borderRadius: 12, padding: '18px 16px', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <input aria-label="Fasting glucose" value={value} onChange={e => setValue(e.target.value)} style={{
            border: 'none', outline: 'none', fontFamily: 'var(--font-mono)',
            fontSize: 40, fontWeight: 500, color: 'var(--fg-1)', width: 140,
            background: 'transparent', fontVariantNumeric: 'tabular-nums',
          }}/>
          <div style={{ fontSize: 14, color: 'var(--fg-3)' }}>mg/dL</div>
        </div>

        <div style={{ fontSize: 12, color: 'var(--fg-2)', marginTop: 10, lineHeight: 1.5 }}>
          {Number(value) > 125 ? <><span style={{ color: 'var(--fg-2)', fontWeight: 600 }}>Above your target.</span> We'll flag this for Dr. Patel.</> : <>Within your target range of 80–120.</>}
        </div>

        <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
          <button className="btn btn-secondary" onClick={onClose} style={{ flex: 1 }}>Cancel</button>
          <button className="btn btn-primary" onClick={() => onSave(value)} style={{ flex: 2 }}>Save reading</button>
        </div>
      </div>
      <style>{`@keyframes slideUp { from { transform: translateY(12px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }`}</style>
    </div>
  );
}

Object.assign(window, { RecordScreen, AddMeasurementSheet });
