import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const POETChatroom = () => {
  const [message, setMessage] = useState('');
  
  const poetData = {
    symbol: 'POET',
    price: 5.36,
    change: -0.28,
    changePercent: -4.97
  };

  const messages = [
    {
      id: 1,
      user: 'royalton',
      role: 'Hub Leader',
      content: 'The Q2 results show POET is making significant progress despite the temporary losses. The $30M financing at $5.00 was strategic timing.',
      votes: 22,
      time: '2 min ago'
    },
    {
      id: 2,
      user: 'OpticalInvestor',
      role: 'Regular',
      content: 'Anyone have thoughts on the Malaysia manufacturing expansion? Globetronics partnership could be huge for scaling production.',
      votes: 17,
      time: '5 min ago'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Stock Ticker */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="font-bold text-lg">$POET</span>
            <span className="text-blue-200">POET Technologies Inc.</span>
            <span className="font-semibold">${poetData.price}</span>
            <span className="text-red-400">
              {poetData.change} ({poetData.changePercent}%)
            </span>
          </div>
          <div className="text-sm text-blue-200">Market Cap: $485.73M</div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">POET</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">POET Hub</h1>
              <p className="text-sm text-gray-500">Photonic Solutions Community</p>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            <span className="text-green-600">●</span> 1,247 online
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Discussion Rooms</h3>
              <div className="space-y-2">
                <div className="bg-blue-600 text-white px-3 py-2 rounded-lg">
                  <div className="font-medium">General Discussion</div>
                  <div className="text-xs text-blue-200">1,247 members</div>
                </div>
                <div className="text-gray-700 px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <div className="font-medium">Technical Analysis</div>
                  <div className="text-xs text-gray-500">823 members</div>
                </div>
                <div className="text-gray-700 px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <div className="font-medium">News & Updates</div>
                  <div className="text-xs text-gray-500">1,856 members</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="font-semibold text-gray-900 mb-4">Hub Leaders</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">R</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">royalton</div>
                    <div className="text-xs text-gray-500">Rep: 15,420</div>
                  </div>
                  <span className="text-green-500 text-xs">●</span>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">General Discussion</h2>
                <p className="text-sm text-gray-500">Main discussion about POET Technologies</p>
              </div>
              
              <div className="p-4 space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className="flex space-x-3">
                    <div className="flex flex-col items-center space-y-1">
                      <button className="text-gray-400 hover:text-green-600">▲</button>
                      <span className="text-sm font-medium text-green-600">{msg.votes}</span>
                      <button className="text-gray-400 hover:text-red-600">▼</button>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-semibold text-gray-900">{msg.user}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          msg.role === 'Hub Leader' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {msg.role}
                        </span>
                        <span className="text-sm text-gray-500">{msg.time}</span>
                      </div>
                      <p className="text-gray-900">{msg.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-gray-200">
                <div className="flex space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">U</span>
                  </div>
                  <div className="flex-1">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share your thoughts about POET..."
                      className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows="3"
                    />
                    <div className="mt-2 flex justify-between items-center">
                      <div className="text-xs text-gray-500">
                        Tips: Use $POET to highlight stock mentions
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">POET Quick Stats</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Price:</span>
                  <span className="font-semibold">${poetData.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Volume:</span>
                  <span>2,074,675</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Market Cap:</span>
                  <span>$485.73M</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="font-semibold text-gray-900 mb-4">Latest POET News</h3>
              <div className="space-y-3">
                <div className="border-b border-gray-200 pb-2">
                  <h4 className="font-medium text-sm text-gray-900">Malaysia Expansion</h4>
                  <p className="text-xs text-gray-600 mt-1">Partnership with Globetronics announced</p>
                  <span className="text-xs text-gray-500">2 hours ago</span>
                </div>
                <div className="border-b border-gray-200 pb-2">
                  <h4 className="font-medium text-sm text-gray-900">Jefferies Upgrade</h4>
                  <p className="text-xs text-gray-600 mt-1">Price target raised to $8.50</p>
                  <span className="text-xs text-gray-500">4 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<POETChatroom />} />
        <Route path="/poet" element={<POETChatroom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
