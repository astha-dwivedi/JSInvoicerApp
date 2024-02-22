export default function ClientDetails({ clientName, clientAddress }) {
  return (
    <div>
      <section className="mt-19">
        <h2 className="text-xl uppercase font-bold">{clientName}</h2>
        <p>{clientAddress}</p>
      </section>
    </div>
  );
}
