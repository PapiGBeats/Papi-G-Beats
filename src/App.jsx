import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Papi Gs Beats</h1>
      <p>Buy and download exclusive beats instantly</p>

      {/* Royal Hip-Hop */}
      <div className="beat-card">
        <h2>Royal Hip-Hop</h2>
        <audio controls loop>
          <source src="beats/royalhip-hop.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p>$10 - Instant Download</p>
        <div className="payments">
          <div>
            <p>CashApp QR</p>
            <p>$PapiGBeats</p>
          </div>
          <div>
            <p>Venmo QR</p>
            <p>@dustinfusco</p>
          </div>
          <div>
            <p>PayPal QR</p>
            <p>@DustinFusco</p>
          </div>
        </div>
      </div>

      {/* De La Mer */}
      <div className="beat-card">
        <h2>De La Mer</h2>
        <audio controls loop>
          <source src="beats/delamer.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p>$10 - Instant Download</p>
        <div className="payments">
          <div>
            <p>CashApp QR</p>
            <p>$PapiGBeats</p>
          </div>
          <div>
            <p>Venmo QR</p>
            <p>@dustinfusco</p>
          </div>
          <div>
            <p>PayPal QR</p>
            <p>@DustinFusco</p>
          </div>
        </div>
      </div>

      {/* Old School */}
      <div className="beat-card">
        <h2>Old School</h2>
        <audio controls loop>
          <source src="beats/old-school.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p>$10 - Instant Download</p>
        <div className="payments">
          <div>
            <p>CashApp QR</p>
            <p>$PapiGBeats</p>
          </div>
          <div>
            <p>Venmo QR</p>
            <p>@dustinfusco</p>
          </div>
          <div>
            <p>PayPal QR</p>
            <p>@DustinFusco</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
