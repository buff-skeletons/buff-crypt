import { useEffect, useState } from 'react';
import song from '../audio/spookyScarySkeletons.mp3';
import dancingSkellies from '../images/dancingSkellies.jpg';

const Cal = () => {
  const [audio] = useState(new Audio(song));
  const [isPlaying, setIsPlaying] = useState(false);


  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  },[isPlaying, audio]);
  
  const playThatSpookySong = () => {
    console.log('always leave your console logs in');
    setIsPlaying(!isPlaying);
  }

	return (
		<div className="cal">
      <div className="imgCoffin">
        <img src={dancingSkellies} alt="Dancing Skeletons from the Spooky Scary Skeletons video." />
      </div>
      <div className="headstone">
        <h2>Cal's crypt room</h2>
        <h1>Spooky, Scary</h1>
        <p>How about some spooky music to listen to while you explore the crypt?</p>
        <button onClick={playThatSpookySong}> Click me 💀</button>
        <h1>Closing h1 for good SEO</h1>
      </div>
		</div>
	)
}
export default Cal