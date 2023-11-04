import React, { useContext, useEffect } from 'react'
import { UploadContext } from './UpLoadContext';


export function LatestImage() {

  const { latestImage, setLatestImage } = useContext(UploadContext);

  useEffect(() => {

    fetch("http://localhost:3000/latest.json")
      .then(response => response.json())
      .then(fileData => {
        setLatestImage(fileData.avatar_url);
      })
      .catch((error) => console.log(error));
  }, [latestImage]);
  return (
    <div>
      <img src={latestImage} alt ="latest image" className="latest-image" />
    </div>
  )
}


export default LatestImage