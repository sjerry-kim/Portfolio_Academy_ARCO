import Table from 'react-bootstrap/Table';

function PaymentTable() {
  return (
    <div className='payment-table'>
      <h3>Danation History</h3>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Account holder</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2022.08.03</td>
            <td>J*****</td>
            <td>10,000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>2022.09.02</td>
            <td>J*****</td>
            <td>10,000</td>
          </tr>
          <tr>
            <td>3</td>
            <td>2022.10.03</td>
            <td>J*****</td>
            <td>10,000</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default PaymentTable;