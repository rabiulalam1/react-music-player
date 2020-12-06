import React from 'react';

const LibrarySongs = ({ song, songs, setSongs, setCurrentSong,
    currentSong, audioRef, isPlaying }) => {
    const songSelectHandler = () => {
        setCurrentSong(song);

        const newSongs = songs.map(state => {
            if (song.id === state.id) {
                return { ...state, active: true };
            } else {
                return { ...state, active: false}
            }
        })
        setSongs(newSongs);
        if (isPlaying) {
            audioRef.current.play()
                //Promise used, because song takes time to load
                .then(() => audioRef.current.play())
            }
    } 

    return (
        <div onClick={songSelectHandler}
            className={`library-song ${song.active ? 'selected' : ''}`}>
            <img src={song.cover} alt={song.name} />
            <h3>{song.name}</h3>
        </div>
    );
};

export default LibrarySongs;