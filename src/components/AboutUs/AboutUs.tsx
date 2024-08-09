import { PlayIcon } from '../Icons';
import './AboutUs.scss';

export default function AboutUs() {
  return (
    <section className="about-us">
      <h2 className="about-us__title">
        About us
      </h2>

      <div className="about-us__video-wrapper">
        <img
          className="about-us__video"
          src="./images/VideoPreview.webp"
          alt="Video Preview Image"
        />

        <div className="about-us__video-play-button">
          <PlayIcon />
        </div>
      </div>
    </section>
  );
}
