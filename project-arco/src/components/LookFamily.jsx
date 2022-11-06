import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useNavigate } from 'react-router-dom';
import DataContext from '../context/DataContext';

const LookFamily = () => {
  const navigate = useNavigate();

  const {state} = useContext(DataContext);

  return (
    <div>
      <h1>We looking for new Family</h1>
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
      <button onClick={()=>{navigate('/about/matching_family')}} >Learn more about <span>Matching New Family</span></button>
    </div>
  );
}

export default LookFamily;