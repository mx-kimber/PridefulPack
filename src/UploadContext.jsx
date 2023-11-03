import React, { createContext, useState } from 'react'

export const UploadContext = createContext(null);

export function UploadProvider({ children }) {
  const [ latestImage, setLatestImage] = useState( UploadContext);

  return (
    <UploadContext.Provider value={{ latestImage, setLatestImage }}>
        {children}
    </UploadContext.Provider>
  )
}
