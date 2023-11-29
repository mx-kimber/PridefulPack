import React from 'react'

export function AvatarUpload() {

  const uploadImage = (files) => {
    console.log(files[0]);
  }
  return (
    <div>
      <div>
        <h2>
          Implementing Cloudinary
        </h2>
      </div>
      <div className="input">
        <input 
          type="file"
          onChange={(event) => {
            uploadImage(event.target.files);
          }}
        />
      </div>
    </div>
  )
}

export default AvatarUpload;