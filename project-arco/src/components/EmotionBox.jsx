const EmotionBox = () => {

  //const number = useSelector()

  return (
    <div className="emotion-box">
        <div className="happy-box">
        <p>0</p>
        <button className="happy-face">🥰</button>
        </div>

        <div className="sad-box">
        <p>0</p>
        <button className="sad-face">😢</button>
        </div>

        <div className="angry-box">
        <p>0</p>
        <button className="angry-face">😡</button>
        </div>
  </div>
  );
}

export default EmotionBox;