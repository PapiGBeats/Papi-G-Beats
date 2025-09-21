import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Papi Gs Beats</h1>
      <p className="mb-6">Buy and download exclusive beats instantly</p>

      <div className="space-y-6">
        {/* Beat Card 1 */}
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-xl font-semibold">Royal Hip-Hop</h2>
          <audio controls className="w-full mt-2">
            <source src="/beats/royalhip-hop22.28.wav" type="audio/wav" />
            Your browser does not support the audio tag.
          </audio>
          <div className="mt-3">
            <p>$10 - Instant Download</p>
            <div className="flex space-x-4 mt-2">
              <div className="text-center">
                <img src="/cashapp-new.png" alt="CashApp QR" className="w-20 h-20 mx-auto" />
                <a href="https://cash.app/$PapiGBeats" target="_blank" rel="noopener noreferrer">
                  $PapiGBeats
                </a>
              </div>
              <div className="text-center">
                <img src="/venmo.png" alt="Venmo QR" className="w-20 h-20 mx-auto" />
                <a href="https://venmo.com/dustinfusco" target="_blank" rel="noopener noreferrer">
                  @dustinfusco
                </a>
              </div>
              <div className="text-center">
                <img src="/paypal.png" alt="PayPal QR" className="w-20 h-20 mx-auto" />
                <a href="https://paypal.me/DustinFusco" target="_blank" rel="noopener noreferrer">
                  @DustinFusco
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Beat Card 2 */}
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-xl font-semibold">De La Mer</h2>
          <audio controls className="w-full mt-2">
            <source src="/beats/delamer.wav" type="audio/wav" />
            Your browser does not support the audio tag.
          </audio>
          <div className="mt-3">
            <p>$10 - Instant Download</p>
            <div className="flex space-x-4 mt-2">
              <div className="text-center">
                <img src="/cashapp-new.png" alt="CashApp QR" className="w-20 h-20 mx-auto" />
                <a href="https://cash.app/$PapiGBeats" target="_blank" rel="noopener noreferrer">
                  $PapiGBeats
                </a>
              </div>
              <div className="text-center">
                <img src="/venmo.png" alt="Venmo QR" className="w-20 h-20 mx-auto" />
                <a href="https://venmo.com/dustinfusco" target="_blank" rel="noopener noreferrer">
                  @dustinfusco
                </a>
              </div>
              <div className="text-center">
                <img src="/paypal.png" alt="PayPal QR" className="w-20 h-20 mx-auto" />
                <a href="https://paypal.me/DustinFusco" target="_blank" rel="noopener noreferrer">
                  @DustinFusco
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Beat Card 3 */}
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-xl font-semibold">Old School</h2>
          <audio controls className="w-full mt-2">
            <source src="/beats/old-school.mp3" type="audio/mp3" />
            Your browser does not support the audio tag.
          </audio>
          <div className="mt-3">
            <p>$10 - Instant Download</p>
            <div className="flex space-x-4 mt-2">
              <div className="text-center">
                <img src="/cashapp-new.png" alt="CashApp QR" className="w-20 h-20 mx-auto" />
                <a href="https://cash.app/$PapiGBeats" target="_blank" rel="noopener noreferrer">
                  $PapiGBeats
                </a>
              </div>
              <div className="text-center">
                <img src="/venmo.png" alt="Venmo QR" className="w-20 h-20 mx-auto" />
                <a href="https://venmo.com/dustinfusco" target="_blank" rel="noopener noreferrer">
                  @dustinfusco
                </a>
              </div>
              <div className="text-center">
                <img src="/paypal.png" alt="PayPal QR" className="w-20 h-20 mx-auto" />
                <a href="https://paypal.me/DustinFusco" target="_blank" rel="noopener noreferrer">
                  @DustinFusco
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
