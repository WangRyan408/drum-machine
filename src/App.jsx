import { useState } from 'react';
import './App.css';

function App() {

  function handleKeyDown(e) {
    console.log(`User pressed: ${e.keyCode}`);
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    audio.currentTime = 0;
    audio.play();
  };

  function handleClick(e) {
    console.log(`You clicked keyCode: 81`);
    const audio = document.querySelector()
  }


  return (
    <div className="App" id="drum-machine" onKeyDown={handleKeyDown} tabIndex="0">
      <div id="display">Placeholder Text</div>
      <div id="keys">
        <div className="drum-pad" id="heater-1" data-key="q" data-keycode="81" onClick={handleClick}><kbd>Q</kbd><audio data-key="q" src="../assets/Heater-1.mp3"></audio></div>
        <div className="drum-pad" id="heater-2" data-key="w" onClick={handleClick}><kbd>W</kbd><audio data-key="w" src="../assets/Heater-2.mp3"></audio></div>
        <div className="drum-pad" id="heater-3" data-key="e" onClick={handleClick}><kbd>E</kbd><audio  data-key="e"src="../assets/Heater-3.mp3"></audio></div>
        <div className="drum-pad" id="heater-4" data-key="a" onClick={handleClick}><kbd>A</kbd><audio  data-key="a"src="../assets/Heater-4_1.mp3"></audio></div>
        <div className="drum-pad" id="clap" data-key="s" onClick={handleClick}><kbd>S</kbd><audio  data-key="s" src="../assets/Heater-6.mp3"></audio></div>
        <div className="drum-pad" id="open-hh" data-key="d" onClick={handleClick}><kbd>D</kbd><audio data-key="d" src="../assets/Dsc_Oh.mp3"></audio></div>
        <div className="drum-pad" id="kick-n-hat" data-key="z" onClick={handleClick}><kbd>Z</kbd><audio data-key="z" src="../assets/Cev_H2.mp3"></audio></div>
        <div className="drum-pad" id="kick" data-key="x" onClick={handleClick}><kbd>X</kbd><audio data-key="x" src="./assets/Kick_n_Hat.mp3"></audio></div>
        <div className="drum-pad" id="closed-hh" data-key="c" onClick={handleClick}><kbd>C</kbd><audio data-key="c" src="../assets/RP4_KICK_1.mp3"></audio></div>
      </div>
    </div>
  );
}




export default App;
