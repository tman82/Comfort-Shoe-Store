import React, { useState } from 'react'

function UploadPhoto() {
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)
  
    const uploadImage = async e => {
      const files = e.target.files
      const data = new FormData()
      data.append('file', files[0])
      data.append('upload_preset', 'e2gb0pts')
      setLoading(true)
      
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/tretesting/image/upload',
        {
          method: 'POST',
          body: data
        }
      )
  
      const file = await res.json()
  
      setImage(file.secure_url)
      setLoading(false)
    }
  
    return (
      <div className="App">
        <h1>Upload Image</h1>
        <input 
          type="file"
          name="file"
          placeholder="Upload an image"
          onChange={uploadImage}
        />
        {loading ? (
          <h3>Loading...</h3>
        ): (
          <img src={image} alt="pic" style={{width: '340px'}} />
        )}
      </div>
    );
}

export default UploadPhoto
