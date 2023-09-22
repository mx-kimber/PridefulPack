export function ServiceOfferingsNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateServiceOffering(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Service Offering</h1>
      <form onSubmit ={handleSubmit} >
        <div>
          Service: <input name="service" type="text" />
        </div>
        <div>
          Price: <input name="price" type="number" />
        </div>
        <div>
          Duration: <input name="duration" type="text" />
        </div>
        <div>
          Included: <textarea name="included" />
        </div>
        <div>
          Extra Service: <input name="extra_service" type="text" />
        </div>
        <button type="submit">Create Service Offering</button>
      </form>
    </div>
  );
}