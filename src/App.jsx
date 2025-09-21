import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Papi Gs Beats</h1>
      <h2>Buy and download exclusive beats instantly</h2>

      {/* Royal Hip-Hop */}
      <div className="beat-card">
        <h3>Royal Hip-Hop</h3>
        <audio controls>
          <source src="/beats/royalhip-hop22.28.wav" type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
        <p>$10 - Instant Download</p>
        <div className="payment">
          <div>
            <img src="/cashapp-new.png" alt="CashApp QR" />
            <span>$PapiGBeats</span>
          </div>
          <div>
            <img src="/venmo.png" alt="Venmo QR" />
            <span>@dustinfusco</span>
          </div>
          <div>
            <img src="/paypal.png" alt="PayPal QR" />
            <span>@DustinFusco</span>
          </div>
        </div>
      </div>

      {/* De La Mer */}
      <div className="beat-card">
        <h3>De La Mer</h3>
        <audio controls>
          <source src="/beats/delamer.wav" type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
        <p>$10 - Instant Download</p>
        <div className="payment">
          <div>
            <img src="/cashapp-new.png" alt="CashApp QR" />
            <span>$PapiGBeats</span>
          </div>
          <div>
            <img src="/venmo.png" alt="Venmo QR" />
            <span>@dustinfusco</span>
          </div>
          <div>
            <img src="/paypal.png" alt="PayPal QR" />
            <span>@DustinFusco</span>
          </div>
        </div>
      </div>

      {/* Old School */}
      <div className="beat-card">
        <h3>Old School</h3>
        <audio controls>
          <source src="/beats/old-school.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        <p>$10 - Instant Download</p>
        <div className="payment">
          <div>
            <img src="/cashapp-new.png" alt="CashApp QR" />
            <span>$PapiGBeats</span>
          </div>
          <div>
            <img src="/venmo.png" alt="Venmo QR" />
            <span>@dustinfusco</span>
          </div>
          <div>
            <img src="/paypal.png" alt="PayPal QR" />
            <span>@DustinFusco</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
