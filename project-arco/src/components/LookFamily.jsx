import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useNavigate } from 'react-router-dom';

const LookFamily = () => {
  const navigate = useNavigate();

  const babies = [
    { name: "Jarry", 
      sex: "female", 
      age: "3", 
      Introduction:"I love taking a shower. If you become my family, you don't need to worry about the shower.",
      img: "matching1.jpg"},
    { name: "Poppi", 
      sex: "male", 
      age: "5", 
      Introduction:"Everyone says my smile is really great. I smile everyday because I love people.",
      img: "matching2.jpg"},
    { name: "Ellie", 
      sex: "female", 
      age: "4", 
      Introduction:"I'm smart and really good at playing a catch game. I'll never let you get bored.",
      img: "matching3.jpg"},
  ]

  return (
    <div>
      <h1>We looking for new Family</h1>
      <CardGroup className='m-5'>
        {
          babies.map((baby, index)=>(
              <Card key={index}>
                <Card.Img variant="top" src={require(`../img/${baby.img}`)}
                          style={{height:" 70%", objectFit:"cover"}}/>
                <Card.Body style={{height:" 30%",position:"relative",overflow:"hidden"}}>
                  <Card.Title>{baby.name} / {baby.age} / {baby.sex}</Card.Title>
                  <Card.Text style={{position:"relative",overflow:"hidden"}}>
                    Hi. I'm {baby.name}. {baby.Introduction}
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