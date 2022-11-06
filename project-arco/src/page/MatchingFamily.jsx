import { useContext } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";
import Home from "./Home";

const MatchingFamily = () => {
  const {state} = useContext(DataContext);

  return (
    <div>
      <header className="matching-header">
        <div className="top">
          <h1 style={{margin:"15px 20px", fontSize:"3.3em"}}>Matching New Family</h1>
          <Link to='/' element={<Home />} style={{}}> 
            ARCO Home
          </Link>
        </div>
        <div className="bottom">
            <button>Adoption application</button>
          <img src={require(`../img/${"cat_hand.jpg"}`)} alt="" style={{width:"600px", height:"400px", marginTop:"50px"}} />
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
    </div>
  );
}

export default MatchingFamily;