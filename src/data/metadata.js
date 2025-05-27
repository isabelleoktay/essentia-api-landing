import {
  PiVinylRecord,
  PiApproximateEqualsBold,
  PiPianoKeysFill,
  PiMusicNotesSimpleFill,
  PiDiscoBallLight,
  PiTrendUpFill,
} from "react-icons/pi";
import { TbMoodHappy } from "react-icons/tb";
import { FaVolumeUp, FaDrum } from "react-icons/fa";
import { SlEnergy } from "react-icons/sl";
import { MdOutlineTheaterComedy, MdOutlineThumbsUpDown } from "react-icons/md";

const metadata = [
  {
    icon: PiVinylRecord,
    heading: "genre",
    subheading:
      "Classifies the style of music, helping listeners find familiar or preferred sounds.",
  },
  {
    icon: TbMoodHappy,
    heading: "mood",
    subheading:
      "Captures the emotional tone of a piece, such as happy, sad, calm, or intense.",
  },
  {
    icon: PiApproximateEqualsBold,
    heading: "similarity",
    subheading:
      "Evaluates how closely a track resembles others, useful for recommendations or playlists.",
  },
  {
    icon: PiPianoKeysFill,
    heading: "Instrumentation",
    subheading:
      "Reveals which instruments are present, offering insight into texture and style.",
  },
  {
    icon: PiDiscoBallLight,
    heading: "danceability",
    subheading:
      "Assesses how suitable the music is for dancing, based on rhythm, tempo, and beat clarity.",
  },
  {
    icon: PiMusicNotesSimpleFill,
    heading: "musical key",
    subheading:
      "Indicates the tonal center of a song, shaping its emotional and harmonic character.",
  },
  {
    icon: FaVolumeUp,
    heading: "loudness",
    subheading:
      "Reflects the perceived intensity of the audio, impacting how powerful or subtle a track feels.",
  },
  {
    icon: FaDrum,
    heading: "tempo",
    subheading:
      "Measures the speed of the music, influencing energy and pacing.",
  },
  {
    icon: SlEnergy,
    heading: "arousal",
    subheading:
      "Measures the energy level of a track, from soothing to highly stimulating.",
  },
  {
    icon: MdOutlineTheaterComedy,
    heading: "valence",
    subheading:
      "Indicates the positivity or negativity conveyed by the music’s tone and harmony.",
  },
  {
    icon: MdOutlineThumbsUpDown,
    heading: "approachability",
    subheading:
      "Predicts how accessible the track is to general audiences vs. niche listeners.",
  },
  {
    icon: PiTrendUpFill,
    heading: "engagement",
    subheading:
      "Estimates how likely a listener is to stay focused or return to the music.",
  },
];

export default metadata;
