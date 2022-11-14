import styled from "styled-components";
import { Container } from "../../styles/GlobalComponents";
export const POP = styled.div`







  .divider {
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    svg {
      fill: white;
      display: block;
    }
    button {
      position: absolute;
      bottom: 20%;
      left: 20%;
    }
  }
  position: relative;

  ${Container} {
    padding: 20px 0 0 0;
  }

  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;

  align-items: end;
  @media ${(props) => props.theme.breakpoints.lg} {
    height: 85vh;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    height: 75vh;
  }

  .lottie_home {
    position: absolute;
    bottom: 5%;
    left: 2%;
    cursor: pointer;
  }
`;
export const HomeWrapper = styled.div`
  transform: translateY(50px);
  width: 100%;

  .shape_color_home {
    text-align: left;
  }
  .home_left,
  .home_left {
    text-align: right;
  }

  .vertical_text {
    justify-content: end;
    font-size: 25px;
    color: #23d2fd;
  }

  .home_left {
    padding: 50px 30px 0;

    h2 {
      font-size: 60px;
      margin: 10px;
    }
    p {
      font-size: 30px;
      font-weight: 100;
    }
  }
  .shape_home {
    max-height: 500px;
    margin: auto;
  }
  .home_right {
    position: relative;
    transform: translateY(10px);
    /* .home_img_mee img:first-child{
      display: none !important;
    } */

    img {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 100%;
      object-fit: contain;
      width: 100%;
      left: 0%;

      /* transform: translate(-50%, 0); */
    }
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    .home_img_me{

}

    transform: translateY(0);
    width: 100%;
    .lottie_home {
      top: -135px;
    }
  
    .home_left {
      padding: 0;
      margin: 0 0 5% 0;
      .vertical_text {
        justify-content: center;
      }
    }
    .home_left,
    .home_left {
      text-align: center;
    }
    .shape_color_home {
      text-align: center;
    }
    .shape_home {
      max-height: 400px;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    .home_left {
      margin: 0 0 5% 0;
  
    }

    .home_img_me{

height:400px ;
}

   
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    .home_right {
      transform: translateY(20px);
    }
    .home_left {
      margin: 0 0 8% 0;
  
    }
  }


`;
