import { useDispatch, useSelector } from "react-redux";
import { increaseAngry, increaseHappy, increaseSad } from "../modules/emotionBox";

const EmotionBox = () => {
  const happy = useSelector((state)=>state.emotionBox.happy);
  const sad = useSelector((state)=>state.emotionBox.sad);
  const angry = useSelector((state)=>state.emotionBox.angry);

  const dispatch = useDispatch();

  return (
    <div className="emotion-box">
        <div className="happy-box">
        <p>{happy}</p>
        <button className="happy-face" onClick={()=>{dispatch(increaseHappy())}}>🥰</button>
        </div>

        <div className="sad-box">
        <p>{sad}</p>
        <button className="sad-face" onClick={()=>{dispatch(increaseSad())}}>😢</button>
        </div>

        <div className="angry-box">
        <p>{angry}</p>
        <button className="angry-face" onClick={()=>{dispatch(increaseAngry())}}>😡</button>
        </div>
  </div>
  );
}

export default EmotionBox;