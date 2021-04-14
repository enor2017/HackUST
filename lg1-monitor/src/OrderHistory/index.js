import React from 'react';
import OrderTable from './OrderTable';

const OrderHistory = ({match}) => (
  <div className="content">
    <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <OrderTable />
      </div>
    </div>
  </div>
  </div>
);

export default OrderHistory;