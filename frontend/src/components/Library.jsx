import React from 'react';
import LibrarySongs from "./LibrarySongs"

const Library = ({ songs, setSongs,currentSong,
    setCurrentSong, audioRef, isPlaying, libraryState }) => {
    return (
        <div className={`library ${libraryState? 'active-library':''}`}>
            <h2>Songs</h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySongs song={song}
                        songs={songs}
                        setSongs={setSongs}
                        currentSong={currentSong}
                        setCurrentSong={setCurrentSong}
                        audioRef={audioRef}
                        isPlaying={isPlaying}
                        key={song.id}
                    />
                ))}
                
            </div>
        </div>
    );
};

export default Library;