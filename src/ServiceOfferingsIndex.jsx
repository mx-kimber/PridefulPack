export function ServiceOfferingsIndex(props) {
  return (
    <div className="main-container">
      <h1>Services</h1>
      {props.serviceOfferings.map((serviceOffering) => (
        <div key={serviceOffering.id}>
          <h2>{serviceOffering.service}</h2>
          <p>Price: {serviceOffering.price}</p>
          <p>Amount of time: {serviceOffering.duration}</p>
          <p>Included: {serviceOffering.included}</p>
          <p>extra_services: {serviceOffering.extra_service}</p>
        </div>
      ))}
    </div>
  );
}