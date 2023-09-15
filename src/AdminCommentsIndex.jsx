export function AdminCommentsIndex(props) {
  return (
    <div>
      <h1>All admin comments</h1>
      {props.adminComments.map((adminComment) => (
        <div key={adminComment.id}>
          <p>{adminComment.comment}</p>
          <p>{adminComment.created_at}</p>
          {adminComment.review && (
            <div>
              <h2>Associated Review</h2>
              <p>Rating: {adminComment.review.rating}</p>
              <p>Comment: {adminComment.review.comment}</p>
              <p>Name: {adminComment.review.reviewer.name}</p>
              <p>Created At: {adminComment.review.created_at}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
