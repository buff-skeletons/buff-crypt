import { useEffect, useState } from 'react';
import song from '../audio/spookyScarySkeletons.mp3';

const Cal = () => {
  const [audio] = useState(new Audio(song));
  const [isPlaying, setIsPlaying] = useState(false);


  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  },[isPlaying]);
  
  const playThatSpookySong = () => {
    console.log('always leave your console logs in');
    setIsPlaying(!isPlaying);
  }

	return (
		<div className="cal">
			<h2>Cal's crypt room</h2>
      <h1>Spooky, Scary</h1>
      <p>How about some spooky music to listen to while you explore the crypt?</p>
      <button onClick={playThatSpookySong}> Click me 💀</button>
      <h1>Closing h1 for good SEO</h1>
		</div>
	)
}
export default Cal