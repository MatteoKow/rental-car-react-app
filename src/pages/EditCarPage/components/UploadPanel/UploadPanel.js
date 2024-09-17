import React, { useState, useCallback } from 'react';

import './UploadPanel.css';
import { FaRegTrashCan } from "react-icons/fa6";
import { useDropzone } from 'react-dropzone';

import UploadImage from '../../../../img/icons/upload_image.png';


const UploadPanel = ({ images, setImages }) => {


  const onDrop = useCallback((acceptedFiles) => {
    setImages((prevImages) => [...prevImages, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const removeImage = (index, e) => {
    e.preventDefault();
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDropImage = (e, index) => {
    e.preventDefault();
    const draggedImage = images[index];
    const newImages = [...images];
    newImages.splice(index, 1);
    newImages.splice(dropZoneIndex, 0, draggedImage);
    setImages(newImages);
  };

  let dropZoneIndex = null;

  return (
    <section className='upload-panel'>
      <label className='input-name'>Dodaj zdjęcia samochodu</label>
      <section className='panel'>
        <div className="dropzone" {...getRootProps()} >
          <input {...getInputProps()} />
          <img src={UploadImage} alt="Upload" />
          <p>Dodaj zdjęcia</p>
        </div>

        {images.map((image, index) => (
          <div
            key={index}
            className="image-uploaded"
            draggable
            onDragStart={() => (dropZoneIndex = index)}
            onDragOver={onDragOver}
            onDrop={(e) => onDropImage(e, index)}
          >
            {typeof image === 'string' ? (
              <img src={image} alt={`Uploaded ${index + 1}`} />
            ) : (
              <img src={URL.createObjectURL(image)} alt={`Uploaded ${index + 1}`} />
            )}
            <button className="remove-image-button" onClick={(e) => removeImage(index, e)}>
              <FaRegTrashCan />
            </button>
          </div>
        ))}
      </section>
    </section>
  );
};

export default UploadPanel;
