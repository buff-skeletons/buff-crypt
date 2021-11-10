import ReactPlayer from "react-player";

const Maxim = () => {
  return (
    <div className="maxim">
      <h2>Maxim's crypt room</h2>
      <p>
        Here for my daily commit. Here is my portfolio:
        <a href="https://www.maximbelomestnov.com/">www.maximbelomestnov.com</a>
      </p>

      <div className="alarmClockRecommendation">
        <h3>
          Anyone looking for a new alarm clock that will get your ass up every
          morning, you're welcome.
        </h3>
        <ReactPlayer url="https://www.youtube.com/watch?v=enYdAxVcNZA" />
      </div>
    </div>
  );
};
export default Maxim;
