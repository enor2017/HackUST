import React from 'react';

const OrderTable = () => (
  <div className="card">
    <div className="card-header">
      <h2>Order History</h2>
    </div>
    <div className="card-content table-full-width">
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
            <td>Apr 5, 14:43</td>
            <td>Hot Dog and French Fries</td>
            <td>$25</td>
            <td>Dine In</td>
          </tr>
          <tr>
            <td>LG1(Canteen II)</td>
            <td>Apr 6, 11:58</td>
            <td>Dumplings with Handmade Udon<br/>7-up</td>
            <td>$44.5</td>
            <td>Dine In</td>
          </tr>
          <tr>
            <td>LG1(Canteen II)</td>
            <td>Apr 6, 17:40</td>
            <td>Roasted Duck with Rice</td>
            <td>$25</td>
            <td>Dine In</td>
          </tr>
          <tr>
            <td>LG1(Canteen II)</td>
            <td>Apr 8, 17:52</td>
            <td>BBQ Pork with Rice<br/>Iced Coffee<br/>Takeaway Box</td>
            <td>$35.5</td>
            <td>Take Away</td>
          </tr>
          <tr>
            <td>LG1(Canteen II)</td>
            <td>Apr 9, 8:17</td>
            <td>Thick Toast with Butter and Jam</td>
            <td>$16</td>
            <td>Dine In</td>
          </tr>
          <tr>
            <td>LG1(Canteen II)</td>
            <td>Apr 9, 18:25</td>
            <td>Grilled Beef With Handmade Udon</td>
            <td>$40</td>
            <td>Dine In</td>
          </tr>
          <tr>
            <td>LG1(Canteen II)</td>
            <td>Apr 10, 11:31</td>
            <td>Roasted Duck with Rice</td>
            <td>$25</td>
            <td>Dine In</td>
          </tr>
          <tr>
            <td>LG1(Canteen II)</td>
            <td>Apr 11, 12:52</td>
            <td>BBQ Pork with Rice<br/>Iced Coffee<br/>Takeaway Box</td>
            <td>$35.5</td>
            <td>Take Away</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default OrderTable;