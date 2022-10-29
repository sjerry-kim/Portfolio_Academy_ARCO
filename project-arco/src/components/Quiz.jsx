const Quiz = () => {
  return (
    <div>
      <section className="quiz-box">
        <h1>Quiz</h1>
        <h2>how many animals are abondoned in a year?</h2>
        <div className="quiz-radio-box">
          <input type="radio" name="quiz" id="10,000"/>
          <label htmlFor="10,000">10,000</label>
          <input type="radio" name="quiz" id="50,000"/>
          <label htmlFor="50,000">50,000</label>
          <input type="radio" name="quiz" id="100,000"/>
          <label htmlFor="100,000">100,000</label>
        </div>
        <button>Check</button>
      </section>
    </div>
  );
}

export default Quiz;