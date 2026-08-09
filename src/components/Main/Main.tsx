import { AttireMotif } from "./AttireMotif";
import { Countdown } from "./Countdown";
import { Entourage } from "./Entourage";
import { EventDetails } from "./EventDetails";
import { ExtraInfo } from "./ExtraInfo";
import { Footer } from "./Footer";
import { Gallery } from "./Gallery";
import { GiftGuide } from "./GiftGuide";
import { LoveMessage } from "./LoveMessages";
import { MainHome } from "./MainHome";
import { Navbar } from "./Navbar";
import { RSVP } from "./RSVP";
import { Sponsors } from "./Sponsors";
import { Timeline } from "./Timeline";

export const Main = () => {
  return (
    <div class="container">
      {/* <audio id="bg-music" autoplay loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio> */}
      <Navbar />
      <MainHome />
      <Countdown />
      <Timeline />
      <EventDetails />
      <Sponsors />
      <Entourage />
      <Gallery />
      <LoveMessage />
      <GiftGuide />
      <AttireMotif />
      <RSVP />
      <ExtraInfo />
      <Footer />
    </div>
  );
};
