function App() {
  return React.createElement('div', {style: {padding: '20px', fontFamily: 'Arial'}}, [
    React.createElement('div', {
      key: 'header',
      style: {background: 'linear-gradient(to right, #1e3a8a, #3730a3)', color: 'white', padding: '15px', marginBottom: '20px'}
    }, '$POET - POET Technologies Inc. - $5.36 (-4.97%)'),
    
    React.createElement('div', {
      key: 'main',
      style: {background: 'white', border: '1px solid #ddd', padding: '20px'}
    }, [
      React.createElement('h1', {key: 'title'}, 'POET Hub - Photonic Solutions Community'),
      React.createElement('p', {key: 'online'}, '🟢 1,247 members online'),
      React.createElement('div', {key: 'rooms'}, 'Discussion Rooms: General, Technical Analysis, News'),
      React.createElement('div', {key: 'chat', style: {marginTop: '20px', padding: '15px', background: '#f9f9f9'}}, 
        'Chat: "The Q2 results show POET is making significant progress..." - royalton (Hub Leader) ▲22'
      ),
      React.createElement('div', {key: 'stats', style: {marginTop: '20px'}}, 
        'POET Stats: Price $5.36 | Volume 2,074,675 | Market Cap $485.73M'
      )
    ])
  ]);
}

export default App;
