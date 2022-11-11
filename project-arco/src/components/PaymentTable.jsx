import { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import DataContext from '../context/DataContext';

function PaymentTable() {
  const {state} = useContext(DataContext);

  return (
    <div className='payment-table'>
      <h3>Danation History</h3>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {
            state.user.userTransfer.map((t,i)=>(
              <tr>
                <td>{i+1}</td>
                <td>{t.date}</td>
                <td>{t.name}</td>
                <td>{t.amount}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  );
}

export default PaymentTable;