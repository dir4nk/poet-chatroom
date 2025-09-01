import React from 'react';

function App() {
  return (
    <div style={{padding: '20px', fontFamily: 'Arial, sans-serif'}}>
      <div style={{background: 'linear-gradient(to right, #1e3a8a, #3730a3)', color: 'white', padding: '15px', marginBottom: '20px'}}>
        <h2>$POET - POET Technologies Inc. - $5.36 (-4.97%)</h2>
      </div>
      
      <div style={{background: 'white', border: '1px solid #ddd', padding: '20px', marginBottom: '20px'}}>
        <h1>POET Hub - Photonic Solutions Community</h1>
        <p>🟢 1,247 members online</p>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '20px'}}>
        <div style={{background: 'white', border: '1px solid #ddd', padding: '15px'}}>
          <h3>Discussion Rooms</h3>
          <div style={{background: '#2563eb', color: 'white', padding: '10px', marginBottom: '10px', borderRadius: '5px'}}>
            <div>General Discussion</div>
            <small>1,247 members</small>
          </div>
          <div style={{padding: '10px', marginBottom: '10px', borderRadius: '5px', background: '#f9f9f9'}}>
            <div>Technical Analysis</div>
            <small>823 members</small>
          </div>
        </div>

        <div style={{background: 'white', border: '1px solid #ddd', padding: '15px'}}>
          <h3>General Discussion</h3>
          <div style={{marginBottom: '20px', padding: '15px', border: '1px solid #eee'}}>
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
              <div style={{marginRight: '15px', textAlign: 'center'}}>
                <div>▲</div>
                <div style={{color: 'green', fontWeight: 'bold'}}>22</div>
                <div>▼</div>
              </div>
              <div>
                <div><strong>royalton</strong> <span style={{background: '#fef3c7', color: '#92400e', padding: '2px 8px', borderRadius: '10px', fontSize: '12px'}}>Hub Leader</span></div>
                <p>The Q2 results show POET is making significant progress despite the temporary losses. The $30M financing at $5.00 was strategic timing.</p>
              </div>
            </div>
          </div>
          
          <div style={{border: '1px solid #ddd', padding: '15px', borderRadius: '5px'}}>
            <textarea 
              placeholder="Share your thoughts about POET..."
              style={{width: '100%', height: '80px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px'}}
            ></textarea>
            <div style={{marginTop: '10px', textAlign: 'right'}}>
              <button style={{background: '#2563eb', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>
                Send
              </button>
            </div>
          </div>
        </div>

        <div style={{background: 'white', border: '1px solid #ddd', padding: '15px'}}>
          <h3>POET Quick Stats</h3>
          <div style={{marginBottom: '10px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <span>Current Price:</span>
              <span><strong>$5.36</strong></span>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <span>Volume:</span>
              <span>2,074,675</span>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <span>Market Cap:</span>
              <span>$485.73M</span>
            </div>
          </div>
          
          <h3>Latest POET News</h3>
          <div style={{fontSize: '14px'}}>
            <div style={{marginBottom: '10px', paddingBottom: '10px', borderBottom: '1px solid #eee'}}>
              <div><strong>Malaysia Expansion</strong></div>
              <div style={{color: '#666'}}>Partnership with Globetronics announced</div>
              <div style={{color: '#999', fontSize: '12px'}}>2 hours ago</div>
            </div>
            <div>
              <div><strong>Jefferies Upgrade</strong></div>
              <div style={{color: '#666'}}>Price target raised to $8.50</div>
              <div style={{color: '#999', fontSize: '12px'}}>4 hours ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
