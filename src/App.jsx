import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Papi Gs Beats</h1>
      <p>Buy and download exclusive beats instantly</p>

      {/* Royal Hip-Hop */}
      <div className="beat-card">
        <h2>Royal Hip-Hop</h2>
        <audio controls>
          <source src="/beats/royalhip-hop.mp3" type="audio/mpeg" />
        </audio>
        <p>$10 - Instant Download</p>
        <div className="payments">
          <div>CashApp QR<br />$PapiGBeats</div>
          <div>Venmo QR<br />@dustinfusco</div>
          <div>PayPal QR<br />@DustinFusco</div>
        </div>
      </div>

      {/* De La Mer */}
      <div className="beat-card">
        <h2>De La Mer</h2>
        <audio controls>
          <source src="/beats/delamer.mp3" type="audio/mpeg" />
        </audio>
        <p>$10 - Instant Download</p>
        <div className="payments">
          <div>CashApp QR<br />$PapiGBeats</div>
          <div>Venmo QR<br />@dustinfusco</div>
          <div>PayPal QR<br />@DustinFusco</div>
        </div>
      </div>

      {/* Old School */}
      <div className="beat-card">
        <h2>Old School</h2>
        <audio controls>
          <source src="/beats/old-school.mp3" type="audio/mpeg" />
        </audio>
        <p>$10 - Instant Download</p>
        <div className="payments">
          <div>CashApp QR<br />$PapiGBeats</div>
          <div>Venmo QR<br />@dustinfusco</div>
          <div>PayPal QR<br />@DustinFusco</div>
        </div>
      </div>
    </div>
  );
}

export default App;
