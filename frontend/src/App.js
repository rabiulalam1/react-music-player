import Player from './components/Player'
import Song from './components/Song'
import Library from './components/Library'
import SongData from "./utils"
import {useState} from 'react'

import "./styles/app.scss"

function App() {
  const [songs, setSongs] = useState(SongData)
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      < Library songs={songs} />
    </div>
  );
}

export default App;
