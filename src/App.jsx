import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Papi Gs Beats</h1>
        <p>Buy and download exclusive beats instantly</p>
      </header>

      <div className="beat-card">
        <h2>Royal Hip-Hop</h2>
        <audio controls>
          <source src="/beats/royalhip-hop22.28.wav" type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
        <p>$10 - Instant Download</p>
        <div className="payments">
          <div>
            <img src="/cashapp-new.png" alt="CashApp QR" width="80" />
            <p>$PapiGBeats</p>
          </div>
          <div>
            <img src="/venmo.png" alt="Venmo QR" width="80" />
            <p>@dustinfusco</p>
          </div>
          <div>
            <img src="/paypal.png" alt="PayPal QR" width="80" />
            <p>@DustinFusco</p>
          </div>
        </div>
      </div>

      <div className="beat-card">
        <h2>De La Mer</h2>
        <audio controls>
          <source src="/beats/delamer.wav" type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
        <p>$10 - Instant Download</p>
        <div className="payments">
          <div>
            <img src="/cashapp-new.png" alt="CashApp QR" width="80" />
            <p>$PapiGBeats</p>
          </div>
          <div>
            <img src="/venmo.png" alt="Venmo QR" width="80" />
            <p>@dustinfusco</p>
          </div>
          <div>
            <img src="/paypal.png" alt="PayPal QR" width="80" />
            <p>@DustinFusco</p>
          </div>
        </div>
      </div>

      <div className="beat-card">
        <h2>Old School</h2>
        <audio controls>
          <source src="/beats/old-school.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p>$10 - Instant Download</p>
        <div className="payments">
          <div>
            <img src="/cashapp-new.png" alt="CashApp QR" width="80" />
            <p>$PapiGBeats</p>
          </div>
          <div>
            <img src="/venmo.png" alt="Venmo QR" width="80" />
            <p>@dustinfusco</p>
          </div>
          <div>
            <img src="/paypal.png" alt="PayPal QR" width="80" />
            <p>@DustinFusco</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
