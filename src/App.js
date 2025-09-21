import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-4">Papi G's Beats</h1>
      <p className="mb-6">🔥 Buy and download exclusive beats instantly</p>

      <div className="grid gap-4">
        {/* Example beat card */}
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-xl font-semibold">Sample Beat 1</h2>
          <audio controls className="w-full mt-2">
            <source src="/beats/sample1.wav" type="audio/wav" />
            Your browser does not support the audio tag.
          </audio>
          <div className="mt-3">
            <p>$30 - Instant Download</p>
            <p className="text-sm">Pay with CashApp / Venmo / PayPal</p>
          <img 
  src="/Screenshot_20250920_185441_Cash App.png" 
  alt="CashApp QR" 
  className="w-32 h-32 mt-2"
/></div>
        </div>
      </div>

      <footer className="mt-10">
        <h2 className="text-lg font-semibold mb-2">Payment Options</h2>
        <p>📲 Scan QR to pay:</p>
        <div className="flex gap-4 mt-2">
          <img src="/cashapp.png" alt="CashApp" className="h-20" />
          <img src="/venmo.png" alt="Venmo" className="h-20" />
          <img src="/paypal.png" alt="PayPal" className="h-20" />
        </div>
      </footer>
    </div>
  )
}

export default App
