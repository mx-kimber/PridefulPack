export function ReviewersNew(props) {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateReviewer(params, () => event.target.reset());
  };
  
  return (
    <div>
      <h1>New Reviewer</h1>
      <form onSubmit={handleSubmit} >
        <div>
          Source: <input name="source" type="text" />
        </div>
        <div>
          UID: <input name="uid" type="text" />
        </div>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <button type="submit">Create Reviewer</button>
      </form>
    </div>
  );
}
