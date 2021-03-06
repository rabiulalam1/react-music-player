import Player from './components/Player'
import Song from './components/Song'
import Library from './components/Library'
import Nav from './components/Nav'
import SongData from "./song-data"
import {useState, useRef} from 'react'

import "./styles/app.scss"

function App() {
  const [songs, setSongs] = useState(SongData)
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  })
  const [libraryState, setLibraryState] = useState(false)
  
  const timeUpdateHandler=(e)=>{
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    setSongInfo({
        currentTime, duration
    })
  }
  
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
    await setCurrentSong(songs[(currentIndex + 1) % songs.length])
    if(isPlaying) audioRef.current.play()
  }
  
  return (
    <div className={`App ${libraryState? "library-active" : ""} `}>
      <Nav libraryState={libraryState} setLibraryState= {setLibraryState} />
      <Song currentSong={currentSong}/>
      <Player currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songs={songs}
        setSongs={setSongs}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />
      < Library songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        libraryState={libraryState}
      />
      <audio onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}>
      </audio>
    </div>
  );
}

export default App;
