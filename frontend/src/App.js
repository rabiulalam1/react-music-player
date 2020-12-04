import Player from './components/Player'
import Song from './components/Song'
import SongData from "./utils"
import {useState} from 'react'

import "./styles/app.scss"

function App() {
  const [songs, setSongs] = useState(SongData)
  const [currentSong, setCurrentSong] = useState(songs[0])
  console.log(currentSong)
  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player currentSong={currentSong}/>
    </div>
  );
}

export default App;
