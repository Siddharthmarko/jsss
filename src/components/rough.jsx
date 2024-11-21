import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'; // Ensure you have react-bootstrap installed

const VideoList = () => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: 'Sample Video 1',
      description: 'This is a sample description for video 1.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      link: 'https://youtube.com',
      imageUrl: 'https://via.placeholder.com/200',
    },
    {
      id: 2,
      title: 'Sample Video 2',
      description: 'This is a sample description for video 2.',
      videoUrl: 'https://www.youtube.com/embed/3JZ_D3ELwOQ',
      link: 'https://youtube.com',
      imageUrl: 'https://via.placeholder.com/200',
    },
    // Add more dummy videos here
  ]);

  return (
    <div className="row mt-3">
      {videos.map((video) => (
        <div key={video.id} className="col-lg-4">
          <div className="card shadow p-3 mb-5 bg-white rounded-4">
            {video.imageUrl && (
              <Link to={video.link} target="_blank">
                <img
                  src={video.imageUrl}
                  height={200}
                  className="card-img-top"
                  alt={`Card ${video.id}`}
                />
              </Link>
            )}
            {video.videoUrl && (
              <div className="ratio ratio-16x9">
                <iframe
                  width="560"
                  height="315"
                  src={video.videoUrl}
                  title={`YouTube video ${video.id}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            <div className="card-body">
              <h5 className="card-title mt-2">{video.title}</h5>
              <p className="card-text mt-3">{video.description}</p>
              {video.model_title && (
                <Button variant="primary" onClick={() => handleCardClick(video)}>
                  Read More
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
