export function ReviewersIndex(props) {
  return (
    <div className="main-container">
      <h1>Reviewers</h1>
      {props.reviewers.map((reviewer) => (
        <div key={reviewer.id}>
          <h2>{reviewer.name}</h2>
          <p>Email: {reviewer.email}</p>
          <p>Source: {reviewer.source}</p>
          <p>UID: {reviewer.uid}</p>
        </div>
      ))}
    </div>
  );
}

// table ref

// create_table "reviewers", force: :cascade do |t|
// t.string "source"
// t.string "uid"
// t.string "email"
// t.string "name"
// t.datetime "created_at", null: false
// t.datetime "updated_at", null: false
// end