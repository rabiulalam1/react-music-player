import React from 'react';

const LibrarySongs = ({song}) => {
    return (
        <div className="library-song">
            <img src={song.cover} alt={song.name} />
            <h3>{song.name}</h3>
        </div>
    );
};

export default LibrarySongs;