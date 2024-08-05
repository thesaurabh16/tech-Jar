import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border: 8px solid rgba(255, 255, 255, 0.2);
  border-top: 8px solid rgba(255, 255, 255, 1);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Container = styled.div`
  position: relative;
  height: 100vh;
  background-image: url('https://img.freepik.com/free-photo/autumn-night-with-lantern-hanging-scene-generated-by-ai_188544-15656.jpg?w=1060&t=st=1722701576~exp=1722702176~hmac=f18bc480a91d57957c35d5d1aa29190330daa6041ec47264b85f0efd0f1cf8aa'); /* Replace with your image path */
  background-size: cover;
  background-position: center;
`;

const LoadingAnimation = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

export default LoadingAnimation;
