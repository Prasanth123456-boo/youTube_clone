import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../assets/logo.png';
import './styles/style.css';

const Video = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/videos/')
      .then(response => {
        console.log(response.data);
        setVideos(response.data);
        setLoading(false); // Set loading to false once data is loaded
      })
      .catch(error => {
        console.error('Error fetching video details:', error);
        setError('Error fetching video details');
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  return (
    <div className="video-container" >
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="videos " >    
          {videos.map((video, index) => (
            <div key={index} className="video-item" >
              <video src={video.video_file} controls autoPlay className='' style={{ width: "380px", borderRadius: "9px" }} />
              <div className='d-flex mt-2'>
                <div>
                  <img src={video.user} alt={logo} width="35" height="35" className='rounded-circle' />
                </div>
                <div className='ps-3'>
                  <p className='m-0 fs-6  vid_title' style={{ width: "300px" }}>{video.title}</p>
                  <p className='m-0 video_sub'>{video.channel}</p>
                  <p className='m-0 video_sub'>{`${video.views} . 1 year ago`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Video;
