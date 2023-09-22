export function ReviewsNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateReview(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Review</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Reviewer ID: <input name="reviewer_id" type="number" />
        </div>
        <div>
          Rating: <input name="rating" type="number" />
        </div>
        <div>
          Comment: <textarea name="comment" />
        </div>
        <button type="submit">Create Review</button>
      </form>
    </div>
  );
}
