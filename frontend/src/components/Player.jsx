import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from "react"

const Player = ({ currentSong ,isPlaying, setIsPlaying}) => {
    const audioRef = useRef(null)
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    })

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
    const timeUpdateHandler=(e)=>{
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;

        setSongInfo({
            currentTime, duration
        })
    }
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo,
            currentTime: e.target.value
        })
    }

    return (
        <div className="player">
            <div className="time-control">
                <p>{timeFormat(songInfo.currentTime)}</p>
                <input min={0}
                    max={songInfo.duration}
                    value={songInfo.currentTime}
                    onChange={dragHandler}
                    type="range"
                />
                <p>{timeFormat(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back"
                    size="2x"
                    icon={faAngleLeft}
                />
                <FontAwesomeIcon onClick={playSongHandler}
                    className="play"
                    size="2x"
                    icon={isPlaying? faPause:faPlay}
                />
                <FontAwesomeIcon className="skip-forward"
                    size="2x"
                    icon={faAngleRight}
                />
            </div>
            <audio onLoadedMetadata={timeUpdateHandler}
                onTimeUpdate={timeUpdateHandler}
                ref={audioRef}
                src={currentSong.audio}>
            </audio>
        </div>
    );
};

export default Player;