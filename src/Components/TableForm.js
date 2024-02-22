import { useEffect } from "react";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineDelete } from "react-icons/ai";
export default function TableForm({
  description,
  setDescription,
  quantity,
  setQuantity,
  price,
  setPrice,
  taxRate,
  setTaxRate,
  taxAmount,
  setTaxAmount,
  amount,
  setAmount,
  list,
  setList,
  total,
  setTotal,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !quantity || !price || !taxRate) {
      alert("Please fill all the inputs.");
    } else {
      const newItems = {
        id: uuidv4(),
        description,
        quantity,
        price,
        taxRate,
        taxAmount,
        amount,
      };
      setDescription("");
      setQuantity("");
      setPrice("");
      setTaxRate("");
      setTaxAmount("");
      setAmount("");
      setList([...list, newItems]);
    }
  };

  useEffect(() => {
    const calculateTaxAmount = (taxAmount) => {
      setTaxAmount((price / 100) * taxRate);
    };
    calculateTaxAmount(taxAmount);
  }, [taxAmount, price, taxRate, amount, setTaxAmount]);

  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(Number(quantity) * (Number(price) + Number(taxAmount)));
    };
    calculateAmount(amount);
  }, [quantity, price, setAmount, amount, taxAmount]);

  // calculate total amount
  useEffect(() => {
    let rows = document.querySelectorAll(".amount");
    let sum = 0;

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "amount") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
        setTotal(sum);
      }
    }
  });

  // Delete function
  const deleteRow = (id) => {
    setList(list.filter((row) => row.id !== id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className=" flex flex-col md:mt-16">
          <label htmlFor="description">Service Description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Description of service"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="md:grid grid-cols-3 gap-10 ">
          <div className=" flex flex-col">
            <label htmlFor="Quantity">Quantity</label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="price">Service price</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Item price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="taxRate">Tax Rate</label>
            <input
              type="text"
              name="taxRate"
              id="taxRate"
              placeholder="Tax Rate"
              value={taxRate}
              onChange={(e) => setTaxRate(e.target.value)}
            />
          </div>
        </div>
        <div className="md:grid grid-cols-2 gap-10 ">
          <div className=" flex flex-col">
            <label htmlFor="taxAmount">Tax Amount</label>
            <p>{taxAmount}</p>
          </div>
          <div className=" flex flex-col">
            <label htmlFor="Amount">Amount</label>
            <p>{amount}</p>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5 mb-5"
        >
          Add Table Item
        </button>
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
                      <td className="amount">{amount}</td>
                      <td>
                        <button onClick={() => deleteRow(id)}>
                          <AiOutlineDelete className="text-red-500 font-bold text-xl" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </React.Fragment>
              )
            )}
          </table>
        </div>
      </form>
      <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
          Rs.{total.toLocaleString()}
        </h2>
      </div>
    </div>
  );
}
