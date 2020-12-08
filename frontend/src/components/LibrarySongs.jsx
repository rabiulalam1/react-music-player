
const LibrarySongs = ({ song, songs, setSongs, setCurrentSong,
    currentSong, audioRef, isPlaying }) => {
    const songSelectHandler = async () => {
        await setCurrentSong(song);

        const newSongs = songs.map(state => {
            if (song.id === state.id) {
                return { ...state, active: true };
            } else {
                return { ...state, active: false}
            }
        })
        console.log("LibrarySongs")
        setSongs(newSongs);
        if(isPlaying) audioRef.current.play()
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