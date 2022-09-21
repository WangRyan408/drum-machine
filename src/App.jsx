
import './App.css';

function App() {
  return (
    <div className="App" id="drum-machine">
      <div>
        <div className="drum-pad" id="heater-1" data-key=""><kbd>Q</kbd></div>
        <div className="drum-pad" id="heater-2" data-key=""><kbd>W</kbd></div>
        <div className="drum-pad" id="heater-3" data-key=""><kbd>E</kbd></div>
        <div className="drum-pad" id="heater-4" data-key=""><kbd>A</kbd></div>
        <div className="drum-pad" id="clap" data-key=""><kbd>S</kbd></div>
        <div className="drum-pad" id="open-hh" data-key=""><kbd>D</kbd></div>
        <div className="drum-pad" id="kick-n-hat"><kbd>Z</kbd></div>
        <div className="drum-pad" id="kick"><kbd>X</kbd></div>
        <div className="drum-pad" id="closed-hh"><kbd>C</kbd></div>
        <audio src="../assets/Heater-1.mp3"></audio>
        <audio src="../assets/Heater-2.mp3"></audio>
        <audio src="../assets/Heater-3.mp3"></audio>
        <audio src="../assets/Heater-4_1.mp3"></audio>
        <audio src="../assets/Heater-6.mp3"></audio>
        <audio src="../assets/Dsc_Oh.mp3"></audio>
        <audio src="../assets/Cev_H2"></audio>
        <audio src="./assets/Kick_n_Hat.mp3"></audio>
        <audio src="../assets/RP4_KICK_1.mp3"></audio>
      </div>
    </div>
  );
}

export default App;
