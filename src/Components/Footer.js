export default function Footer({
  name,
  address,
  website,
  email,
  phone,
  bankAccount,
  bankName,
}) {
  return (
    <div>
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
          <li>
            <span className="font-bold">Your name: </span> {name}
          </li>
          <li>
            <span className="font-bold">Your email: </span>
            {email}
          </li>
          <li>
            <span className="font-bold">Your address: </span>
            {address}
          </li>
          <li>
            <span className="font-bold">Phone number:</span>
            {phone}
          </li>
          <li>
            <span className="font-bold">Account holder</span>
            {name}
          </li>
          <li>
            <span className="font-bold">Bank</span>
            {bankName}
          </li>
          <li>
            <span className="font-bold">Account Number</span> {bankAccount}
          </li>
          <li>
            <span className="font-bold">website:</span>
            <a href={website} target="_blank" rel="noopener noreferrer">
              {website}
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
