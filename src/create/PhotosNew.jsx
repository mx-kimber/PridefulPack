export function PhotosNew(props) {

    const handleSubmit = (event) => {
      event.preventDefault();
      const params = new FormData(event.target);
      props.onCreatePhoto(params, () => event.target.reset());
    };
  return (
    <div>
      <h1>New Photo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Pet Photo: <input name="pet_photo" type="text" />
        </div>
        <div>
          Pet Name: <input name="pet_name" type="text" />
        </div>
        <div>
          Caption: <textarea name="caption" />
        </div>
        <button type="submit">Create Photo</button>
      </form>
    </div>
  );
}

// create_table "photos", force: :cascade do |t|
// t.string "pet_photo"
// t.string "pet_name"
// t.text "caption"
// t.datetime "created_at", null: false
// t.datetime "updated_at", null: false
// t.integer "user_id"
// end