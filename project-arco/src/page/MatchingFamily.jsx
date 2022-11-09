import { useContext } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import SubmitAdoptionApp from "../components/SubmitAdoptionApp";
import DataContext from "../context/DataContext";
import Home from "./Home";

const MatchingFamily = () => {
  const {state} = useContext(DataContext);

  return (
    <div>
      <header className="matching-header">
        <div className="top">
          <h1>Matching New Family</h1>
          <Link to='/' element={<Home />}> 
            ARCO Home
          </Link>
        </div>
        <div className="bottom">  {/* ↓ 다시 고치기 */}
          <button onClick={()=>{window.scrollTo(1400,1400)}} >Adoption <br /> application</button>
          <img src={require(`../img/${"cat_hand.jpg"}`)} />
        </div>
      </header>
      <CardGroup className='m-5'>
        {
          state.animal.map((animal, index)=>(
              <Card key={index}>
                <Card.Img variant="top" src={require(`../img/${animal.img}`)}
                          style={{height:" 70%", objectFit:"cover"}}/>
                <Card.Body style={{height:" 30%",position:"relative",overflow:"hidden"}}>
                  <Card.Title>{animal.name} / {animal.age} / {animal.sex}</Card.Title>
                  <Card.Text style={{position:"relative",overflow:"hidden"}}>
                    Hi. I'm {animal.name}. {animal.Introduction}
                  </Card.Text>
                </Card.Body>
              </Card>
          ))
        }
      </CardGroup>
      <div className="adoption-app">
        <h1>Adoption Application</h1>
        <SubmitAdoptionApp />
      </div>
    </div>
  );
}

export default MatchingFamily;