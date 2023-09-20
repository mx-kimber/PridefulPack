export function AdminCommentsNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log('Form Data:', Object.fromEntries(params)); // Log the form data
    props.onCreateAdminComment(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Admin Comment</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Review ID: <input name="review_id" type="number" />
        </div>
        <div>
          Comment: <textarea name="comment" />
        </div>
        <button type="submit">Create Admin Comment</button>
      </form>
    </div>
  );
}

