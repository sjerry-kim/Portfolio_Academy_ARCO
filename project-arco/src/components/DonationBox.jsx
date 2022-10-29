import { Link } from "react-router-dom";

const DonationBox = () => {
  return (
    <div>
      <section className="donation-box">
        <h1>We need your help!</h1>
        <Link to='/donation'>
          Donation to ARCO
        </Link>
      </section>
    </div>
  );
}

export default DonationBox;