import { useNavigate } from 'react-router-dom';

const MyDonationPause = () => {
  const navigate = useNavigate();

  return (
    <div className='my-dona-pause'>
      <button className='my-dona-pause-btn'
        onClick={()=>{navigate('/donation')}}>
        Go Back To Donate Again !
      </button>
    </div>
  );
}

export default MyDonationPause;