import { useContext } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import SubmitAdoptionApp from "../components/SubmitAdoptionApp";
import DataContext from "../context/DataContext";
import Home from "./Home";

const MatchingFamily = () => {
  const {state} = useContext(DataContext);

  return (
    <div className="matching-background">
      <header className="matching-header">
        <div className="top">
          <h1>Matching New Family</h1>
          <Link to='/' element={<Home />}> 
            ARCO Home
          </Link>
        </div>
        <div className="bottom">  {/* ↓ 다시 고치기 */}
          <button onClick={()=>{window.scrollTo(1600,1600)}} >Adoption <br /> application</button>
          <img src={require(`../img/${"cat_hand.jpg"}`)} />
        </div>
      </header>
      <div className="matching-cards">
        {
          state.animal.map((animal, index)=>(
              <Card key={index}>
                <Card.Img variant="top" src={require(`../img/${animal.img}`)}/>
                <Card.Body>
                  <Card.Title>{animal.name}</Card.Title>
                  <Card.Text>
                    {animal.sex} | {animal.age}  <br />
                    Neutralization : {animal.neutralization} <br />
                  </Card.Text>
                </Card.Body>
              </Card>
          ))
        }
      </div>
      <div className="adoption-app">
        <h1>Adoption Application</h1>
        <SubmitAdoptionApp />
      </div>
    </div>
  );
}

export default MatchingFamily;