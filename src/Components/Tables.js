import React from "react";
export default function Tables({ list, total }) {
  return (
    <div>
      <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Service Description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Tax Rate</td>
            <td className="font-bold">Tax Amount</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        {list.map(
          ({
            id,
            description,
            quantity,
            price,
            taxRate,
            taxAmount,
            amount,
          }) => (
            <React.Fragment key={id}>
              <tbody>
                <tr>
                  <td>{description}</td>
                  <td>{quantity}</td>
                  <td>Rs. {price}</td>
                  <td>{taxRate}%</td>
                  <td>Rs. {taxAmount}</td>
                  <td>Rs. {amount}</td>
                </tr>
              </tbody>
            </React.Fragment>
          )
        )}
      </table>
      <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
          Rs.{total.toLocaleString()}
        </h2>
      </div>
    </div>
  );
}
