export function AdminCommentsIndex(props) {
  return (
    <div>
      <h1>All admin comments</h1>
        {props.adminComments.map((adminComment) => (
         <div key={adminComment.id}>
           <p>{adminComment.review_id}</p>
           <p>{adminComment.user_id}</p>
           <p>{adminComment.comment}</p>
           <p>{adminComment.created_at}</p>
         </div>
       ))}
    </div>
  );
}