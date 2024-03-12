import {
  SpectrumLoader,
  LooopiaLoader,
  JumpSlider,
  StairLoader,
  CountDownTimer,
} from "../../Components";
import "./allLoaders.css";

function Loaders() {
  return (
    <>
      <CountDownTimer />
      <JumpSlider />
      <LooopiaLoader />
      <SpectrumLoader />
      <StairLoader />
    </>
  );
}

export default Loaders;
