import React from 'react';
import styled from 'styled-components';

const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent>
        <img src={imageUrl} alt="Full Screen" />
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  z-index: 9;
`;

const ModalContent = styled.div`
  max-width: 90%;
  max-height:95%;
  


  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-top: 1rem;
  }
`;

export default ImageModal;