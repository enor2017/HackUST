import React from 'react';

const OrderTable = () => (
  <div className="card">
    <div className="header">
      <h2 className="title">Order History</h2>
    </div>
    <div className="content table-full-width">
      <table className="order-table">
        <thead className="order-thead">
          <tr>
            <td>Canteen</td>
            <td>Time</td>
            <td>Food</td>
            <td>Price</td>
            <td>Type</td>
          </tr>
        </thead>
        <tbody className="order-tbody">
          <tr>
            <td>LG1(Canteen II)</td>
            <td>Apr5, 12:43</td>
            <td>***</td>
            <td>***</td>
            <td>Dine In</td>
          </tr>
          <tr>
            <td>LG1(Canteen II)</td>
            <td>Apr6, 11:58</td>
            <td>***</td>
            <td>***</td>
            <td>Dine In</td>
          </tr>
          <tr>
            <td>LG1(Canteen II)</td>
            <td>Apr6, 17:40</td>
            <td>***</td>
            <td>***</td>
            <td>Dine In</td>
          </tr>
          <tr>
            <td>LG1(Canteen II)</td>
            <td>Apr8, 17:52</td>
            <td>***</td>
            <td>***</td>
            <td>Take Away</td>
          </tr>
          <tr>
            <td>LG1(Canteen II)</td>
            <td>Apr9, 8:17</td>
            <td>***</td>
            <td>***</td>
            <td>Dine In</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default OrderTable;