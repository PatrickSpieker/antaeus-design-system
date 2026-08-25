// Today / home screen — the daily driver.

function TodayScreen() {
  const [glucoseCount, setGlucoseCount] = React.useState(118);
  React.useEffect(() => {
    // Count-up on arrival (520ms ease-out)
    let v = 0, target = 118, start = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - start) / 520);
      const eased = 1 - Math.pow(1 - p, 3);
      setGlucoseCount(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, []);

  return (
    <div className="app-scroll" style={{ paddingBottom: 140 }}>
      <ScreenHeader eyebrow="Friday · April 17" title={<>Good morning,<br/><em style={{fontStyle:'italic', color:'var(--plum-600)'}}>Anya.</em></>} />

      {/* Lead card — BP snapshot */}
      <Card style={{ marginBottom: 14 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <div>
            <div className="eyebrow-sm">Blood pressure · 7 day avg</div>
            <div style={{ marginTop: 6 }}>
              <span className="metric-big" style={{ fontSize: 40 }}>118<span style={{ color: 'var(--fg-3)' }}>/</span>76</span>
              <span style={{ fontSize: 12, color: 'var(--fg-3)', marginLeft: 8 }}>mmHg</span>
            </div>
          </div>
          <Chip tone="sage">Within range</Chip>
        </div>
        <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--border-hairline)', fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.5 }}>
          Five readings this week. <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--plum-600)' }}>Trending down</span> from last month's 124/80.
        </div>
      </Card>

      {/* 2-up mini metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
        <Card style={{ padding: 16 }}>
          <div className="eyebrow-sm">Resting HR</div>
          <div className="metric-big" style={{ fontSize: 30, marginTop: 6 }}>72</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 6, fontSize: 11, color: 'var(--sage-500)' }}>
            <Icon name="trendDown" size={12} stroke={2}/> –2 vs last wk
          </div>
        </Card>
        <Card style={{ padding: 16 }}>
          <div className="eyebrow-sm">Sleep</div>
          <div className="metric-big" style={{ fontSize: 30, marginTop: 6 }}>6<span style={{ color: 'var(--fg-3)', fontSize: 20 }}>h</span>42</div>
          <div style={{ fontSize: 11, color: 'var(--fg-3)', marginTop: 6 }}>Below your 7h target</div>
        </Card>
      </div>

      {/* Upcoming care */}
      <div className="eyebrow-sm" style={{ marginTop: 20, marginBottom: 10, paddingLeft: 4 }}>Upcoming care</div>
      <Card style={{ marginBottom: 12, padding: 0 }}>
        <div style={{ padding: 16, display: 'flex', gap: 14, alignItems: 'center' }}>
          <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--plum-100)', color: 'var(--plum-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="stethoscope" size={22}/>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 600 }}>Dr. Priya Patel</div>
            <div style={{ fontSize: 12, color: 'var(--fg-3)', marginTop: 2 }}>Endocrinology · Thursday, 2:30 PM</div>
          </div>
          <Icon name="chevronR" size={16} color="var(--fg-4)"/>
        </div>
        <div style={{ borderTop: '1px solid var(--border-hairline)', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10, background: 'var(--bone-50)' }}>
          <div style={{ width: 6, height: 6, borderRadius: 3, background: 'var(--amber-500)' }}/>
          <div style={{ fontSize: 12, color: 'var(--fg-2)' }}><strong style={{ fontWeight: 600 }}>2 prep items</strong> before your visit</div>
        </div>
      </Card>

      {/* This week — editorial moment */}
      <div style={{ marginTop: 22, padding: '22px 18px', borderRadius: 16, background: 'linear-gradient(145deg, var(--plum-100) 0%, var(--bone-100) 100%)', border: '1px solid var(--border-hairline)' }}>
        <div className="eyebrow-sm" style={{ color: 'var(--plum-700)' }}>This week</div>
        <div className="serif-moment" style={{ fontSize: 26, marginTop: 10, lineHeight: 1.15 }}>
          Three fasting readings above your target. <span style={{ fontStyle: 'italic' }}>Worth mentioning to Dr. Patel.</span>
        </div>
        <button style={{ marginTop: 14, background: 'var(--plum-500)', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 14px', fontSize: 13, fontWeight: 500, cursor: 'pointer' }}>Add to visit prep</button>
      </div>
    </div>
  );
}

Object.assign(window, { TodayScreen });
