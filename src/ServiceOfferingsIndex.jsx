export function ServiceOfferingsIndex(props) {
  return (
    <div className="main-container">
      <h1>Services</h1>
      {props.serviceOfferings.map((serviceOffering) => (
        <div key={serviceOffering.id}>
          <h2>{serviceOffering.service}</h2>
          <p>{serviceOffering.price}</p>
          <p>{serviceOffering.duration}</p>
          <p>{serviceOffering.included}</p>
          <p>{serviceOffering.extra_service}</p>
        </div>
      ))}
    </div>
  );
}