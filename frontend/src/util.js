export const playAudio = (isPlaying, audioRef) => {
    if (isPlaying) {
        audioRef.current.play()
            //Promise used, because song takes time to load
            .then(() => audioRef.current.play())
        }
}