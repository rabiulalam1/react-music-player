import {useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons'

const Player = ({ currentSong, songs, setSongs, 
    isPlaying, setIsPlaying, setCurrentSong, 
    audioRef, songInfo, setSongInfo
}) => {

    useEffect(() => {
        const newSongs = songs.map(state => {
            if (currentSong.id === state.id) {
                return { ...state, active: true };
            } else {
                return { ...state, active: false}
            }
        })
        setSongs(newSongs);
    },[currentSong])

    const timeFormat = (time) => {
        return (
            Math.floor(time/60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause()
            setIsPlaying(!isPlaying)
        } else {
            audioRef.current.play()
            setIsPlaying(!isPlaying)
        }
    }
    
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo,
            currentTime: e.target.value
        })
    }

    const skipHandler = (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
        if (direction === "skipForward") {
            setCurrentSong(songs[(currentIndex+1) % songs.length])
        }
        if (direction === "skipBack") {
            if ((currentIndex - 1) % songs.length === -1) {
               return setCurrentSong(songs[songs.length - 1])
            }
            setCurrentSong(songs[(currentIndex-1) % songs.length])
        }
    }

    return (
        <div className="player">
            <div className="time-control">
                <p>{timeFormat(songInfo.currentTime)}</p>
                <input min={0}
                    max={songInfo.duration || 0}
                    value={songInfo.currentTime}
                    onChange={dragHandler}
                    type="range"
                />
                <p>{timeFormat(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon onClick={()=>skipHandler("skipBack")} className="skip-back"
                    size="2x"
                    icon={faAngleLeft}
                />
                <FontAwesomeIcon onClick={playSongHandler}
                    className="play"
                    size="2x"
                    icon={isPlaying? faPause:faPlay}
                />
                <FontAwesomeIcon onClick={()=>skipHandler("skipForward")} className="skip-forward"
                    size="2x"
                    icon={faAngleRight}
                />
            </div>
        </div>
    );
};

export default Player;