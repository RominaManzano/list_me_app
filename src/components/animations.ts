import { Keyframes, keyframes } from 'styled-components';

const zoomIn: Keyframes = keyframes`
  from {
    transform: scale(0.5);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export {
  zoomIn,
};
