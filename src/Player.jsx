import React, { useState } from 'react';
import AudioPlayer from 'react-audio-player';

const songs = [
  { name: "Song 1", src: "Fear.mp3" },
  { name: "Song 2", src: "Beast Mode.mp3" },
  { name: "Song 3", src: "[iSongs.info] 08 - Yaalo Yaalaa.mp3" }
];

function Player() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const playNext = () => {
    setCurrentSongIndex((currentSongIndex + 1) % songs.length);
  };

  const playPrevious = () => {
    setCurrentSongIndex((currentSongIndex - 1 + songs.length) % songs.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="App p-6">
      <h1 className="text-2xl font-bold mb-6">Media Player</h1>
      <div className="player mb-6">
        <AudioPlayer
          src={songs[currentSongIndex].src}
          autoPlay={isPlaying}
          onEnded={playNext}
          controls
          className="w-full mb-4"
        />
        <div className="controls flex justify-center space-x-4">
          <button onClick={playPrevious} className="px-4 py-2 bg-blue-500 text-white rounded">Previous</button>
          <button onClick={togglePlayPause} className="px-4 py-2 bg-blue-500 text-white rounded">
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button onClick={playNext} className="px-4 py-2 bg-blue-500 text-white rounded">Next</button>
        </div>
      </div>
      <div className="song-info mb-6">
        <h2 className="text-xl">Now Playing: {songs[currentSongIndex].name}</h2>
      </div>
      <div className="song-list">
        <h3 className="text-lg mb-4">Playlist</h3>
        <ul>
          {songs.map((song, index) => (
            <li key={index} className={`py-2 ${index === currentSongIndex ? 'font-bold' : ''}`}>
              {song.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Player;
