import styled from "styled-components";

export const MouseWrapper = styled.div`

.main-cursor,
.secondary-cursor {
  z-index: 10000;

  pointer-events: none;
  // overflow: hidden;
  transform: translate3d(0, 0, 0);
  position: fixed;
}

.main-cursor {
  transition: opacity 1s cubic-bezier(0.77, 0, 0.175, 1);
  animation: fadeIn 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
  mix-blend-mode: difference;

  .main-cursor-background {
    width: 15px;
    height: 15px;
    background: white;
    border-radius: 50%;
  }
}

.secondary-cursor {
  width: 60px;
  height: 60px;

  .cursor-background {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid black;
    position: relative;
    &:after,
    &:before {
      content: "";
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background: white;
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      animation: fadeOut 0.75s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
    }
    &:before {
      left: 10px;
    }

    &:after {
      right: 10px;
    }
  }
}

.slider-drag {
  .cursor-background {
    animation: scaleUp 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards,
      bgUp 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;

    &:after {
      animation: fadeIn 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards,
        translateRightDot 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
    }

    &:before {
      animation: fadeIn 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards,
        translateLeftDot 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
    }
  }

  .main-cursor {
    animation: fadeOut 0.75s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
  }
}

.hamburger {
  .cursor-background {
    animation: fadeOut 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
  }

  .main-cursor-background {
    animation: scaleUp 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes bgUp {
  from {
    background-color: transparent;
  }

  to {
    background-color: black;
  }
}

@keyframes bgDown {
  from {
    background-color: black;
  }

  to {
    background-color: transparent;
  }
}

@keyframes scaleUp {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.5);
  }
}

@keyframes scaleDown {
  from {
    transform: scale(1.5);
  }

  to {
    transform: scale(1);
  }
}

@keyframes translateLeftDot {
  from {
    transform: translate(20px, -50%);
  }

  to {
    transform: translate(0px, -50%);
  }
}

@keyframes translateRightDot {
  from {
    transform: translate(-20px, -50%);
  }

  to {
    transform: translate(0px, -50%);
  }
}

@media ${(props) => props.theme.breakpoints.lg} {
  .main-cursor,
.secondary-cursor {
  display: none;
}
}

`;
