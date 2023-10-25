import React, { useState } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export function ImageUploader() {
    const [ photos, setPhotos ] = useState([]);
    return (
        <div>
            <FilePond
                files={photos}
                onupdatefiles={setPhotos}
                allowMultiple={true}
                maxFiles={3}
                server="http://localhost:3000/photos.json" 
                name="files"
            />
        </div>
    );
}
