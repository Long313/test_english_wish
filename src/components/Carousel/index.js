import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import { useState } from "react";
import { AiOutlinePause } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePreArrow";
import slider1 from '../../assets/images/vis1.jpg'
import slider2 from '../../assets/images/vis2.jpg'
import slider3 from '../../assets/images/vis3.jpg'

function Carousel() {
  const [isPause, setIsPause] = useState(false);
  const [loop, setLoop] = useState(true);
  const settings = {
    infinite: loop,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  const handlePause = () => {
    setIsPause(!isPause);
    setLoop(false)
  }
  const handlePlay = () => {
    setIsPause(!isPause)
    setLoop(true)
  }
  return (
    <><Slider {...settings}>
      <div className="container_slider">
        <img src={slider1} alt="slider"/>
        <div className="container_content">
          <p>우리 아이 독서습관 기르기</p>
          <p>화상 영어 독서 수업, 리딩타임</p>
          <button className="btn_slider">화상 영어 독서 수업, 리딩타임</button>
        </div>
      </div>
      <div className="container_slider">
        <img src={slider2} alt="slider"/>
        <div className="container_content">
          <p>우리 아이 독서습관 기르기</p>
          <p>화상 영어 독서 수업, 리딩타임</p>
          <button className="btn_slider">화상 영어 독서 수업, 리딩타임</button>
        </div>
      </div>
      <div className="container_slider">
        <img src={slider3} alt="slider"/>
        <div className="container_content">
          <p>우리 아이 독서습관 기르기</p>
          <p>화상 영어 독서 수업, 리딩타임</p>
          <button className="btn_slider">화상 영어 독서 수업, 리딩타임</button>
        </div>
      </div>
    </Slider>
    <button className="pause p_btn"><p>{isPause ? <AiOutlinePause onClick={handlePause} size={40}/> : <BsFillPlayFill onClick={handlePlay} size={40}/>}</p></button>
    </>
  )
}

export default Carousel;
