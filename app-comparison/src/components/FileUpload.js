import React from 'react'

export default function FileUpload({ placeholder, onChange }) {

    const handleChange = (event) => {

        onChange(event.target.files[0]);

    }

    return (
        <div className="file-field input-field col s6">
            <div className="btn">
                <span>Upload</span>
                <input type="file" onChange={handleChange} />
            </div>

        </div>
    )
}
