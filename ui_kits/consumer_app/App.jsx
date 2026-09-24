    function App() {
      const [tab, setTab] = React.useState('home');
      const [sheet, setSheet] = React.useState(false);

      // Persist tab across reload
      React.useEffect(() => {
        const saved = localStorage.getItem('antaeus.tab');
        if (saved) setTab(saved);
      }, []);
      React.useEffect(() => { localStorage.setItem('antaeus.tab', tab); }, [tab]);

      const Screen = {
        home: <TodayScreen/>,
        data: <RecordScreen onAdd={() => setSheet(true)}/>,
        care: <CareScreen/>,
        me:   <YouScreen/>,
      }[tab];

      return (
        <div>
          <IOSDevice width={402} height={874}>
            <div className="app-screen" data-screen-label={`01 ${tab}`}>
              {/* Make top padding for status bar / dynamic island */}
              <div style={{ flex: 1, overflow: 'hidden', paddingTop: 54, position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, paddingTop: 54, overflowY: 'auto' }}>
                  {Screen}
                </div>
              </div>
              <TabBar active={tab} onChange={setTab}/>
              {sheet && <AddMeasurementSheet onClose={() => setSheet(false)} onSave={() => setSheet(false)}/>}
            </div>
          </IOSDevice>
          <div className="caption">Antaeus Health · Consumer App · Today / Record / Care / You</div>
        </div>
      );
    }
    ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
