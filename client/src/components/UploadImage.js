import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import * as cloudinary from 'cloudinary-core';

const UploadImage = (props) => {
  const { triggerDisplay, setTriggerDisplay } = props;
  const [url, setUrl] = useState("");
  const [mediaFormat, setMediaFormat] = useState("");
  const [mediaUpload, setMediaUpload] = useState(false)

  const showWidget = () => {
    const cl = cloudinary.Cloudinary.new({   cloud_name: 'dc-capstone2022',
   });
    const widget = cl.createUploadWidget({
        upload_preset: 'test2022' ,
    }, (error, result) => {
      if (!error && result && result.event === 'success') {
        setUrl(result.info.url)
        setMediaFormat(result.info.resource_type)
        setMediaUpload(true)
      } else {
        if (error) {
          console.log('error', error)
        }
      }
    });

    widget.open();
  }

  useEffect(() => {
    if (mediaUpload) {
      let mediaData = {
        mediaFormat: mediaFormat,
        mediaUrl: url,
      }
      console.log("mediaData", mediaData);
      
      setMediaUpload(false)
      setTriggerDisplay(true)
    } else return
  }, [mediaUpload])

  return (
    <>
    
          <Button variant="primary" onClick={showWidget} className='align-items-center'>Upload Media</Button>
   
    </>
  )
}

export default UploadImage;
