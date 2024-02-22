export default function Dates({ invoiceNumber, invoiceDate }) {
  return (
    <div>
      <article className="my-5 flex items-end justify-end">
        <ul>
          <li className="p-1">
            <span className="font-bold ">Invoice Number:</span>
            {invoiceNumber}
          </li>
          <li className="p-1">
            <span className="font-bold">Invoice date:</span>
            {invoiceDate}
          </li>
        </ul>
      </article>
    </div>
  );
}
