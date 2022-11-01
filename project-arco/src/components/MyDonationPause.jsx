import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const MyDonationPause = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button 
        onClick={()=>{navigate('/donation')}}
        style={{width: "400px", height: "80px", fontSize: "1.8em", backgroundColor: "#D87E42", border:"none"}}>
        Go Back To Donate Again !
      </button>
    </div>
  );
}

export default MyDonationPause;