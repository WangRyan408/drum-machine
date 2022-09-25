import { useState } from 'react';
import './App.css';

function App() {

  const [input, changeInput] = useState('');
  
  const names = {
    'q': "Heater 1",
    'w': "Heater 2",
    'e': "Heater 3",
    'a': "Heater 4",
    's': "Clap",
    'd': "Open HH",
    'z': "Kick N' Hat",
    'x': "Kick",
    'c': "Closed HH",
  }

  function handleKeyDown(e) {
    const audio = document.querySelector(`audio[data-key="${e.key.toLowerCase()}"]`);
    audio.currentTime = 0;
    audio.play();
    displayKeyPress(e.key.toLowerCase());
    console.log(audio.id);
  };

  function handleClick(e) {
    const audio = e.currentTarget.childNodes[1];
    audio.currentTime = 0;
    audio.play();
    displayClick(e);
  }

  function displayKeyPress(key) {
    changeInput(names[key]);
  }

  function displayClick(e) {
    changeInput(e.currentTarget.id);
  }



  return (
    <div className="App" id="drum-machine" onKeyDown={handleKeyDown} tabIndex="0">
      <div id="display" dangerouslySetInnerHTML={{__html: input}}></div>
      <div id="keys">
        <div className="drum-pad" id="heater-1" data-key="q" data-keycode="81" onClick={handleClick}><kbd>Q</kbd><audio className="clip" id="Q" data-key="q" src="../assets/Heater-1.mp3"></audio ></div>
        <div className="drum-pad" id="heater-2" data-key="w" onClick={handleClick}><kbd>W</kbd><audio className="clip" id="W" data-key="w" src="../assets/Heater-2.mp3"></audio></div>
        <div className="drum-pad" id="heater-3" data-key="e" onClick={handleClick}><kbd>E</kbd><audio className="clip" id="E" data-key="e" src="../assets/Heater-3.mp3"></audio></div>
        <div className="drum-pad" id="heater-4" data-key="a" onClick={handleClick}><kbd>A</kbd><audio className="clip" id="A" data-key="a" src="../assets/Heater-4_1.mp3"></audio></div>
        <div className="drum-pad" id="clap" data-key="s" onClick={handleClick}><kbd>S</kbd><audio className="clip" id="S" data-key="s" src="../assets/Heater-6.mp3"></audio></div>
        <div className="drum-pad" id="open-hh" data-key="d" onClick={handleClick}><kbd>D</kbd><audio className="clip" id="D" data-key="d" src="../assets/Dsc_Oh.mp3"></audio></div>
        <div className="drum-pad" id="kick-n-hat" data-key="z" onClick={handleClick}><kbd>Z</kbd><audio className="clip" id="Z" data-key="z" src="../assets/Cev_H2.mp3"></audio></div>
        <div className="drum-pad" id="kick" data-key="x" onClick={handleClick}><kbd>X</kbd><audio className="clip" id="X" data-key="x" src="./assets/Kick_n_Hat.mp3"></audio></div>
        <div className="drum-pad" id="closed-hh" data-key="c" onClick={handleClick}><kbd>C</kbd><audio className="clip" id="C" data-key="c" src="../assets/RP4_KICK_1.mp3"></audio></div>
      </div>
    </div>
  );
}




export default App;
