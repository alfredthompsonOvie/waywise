/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
// import styled, { css } from "styled-components";

// const Line = styled.section`
//   background-color: #fff;
//   border-radius: 5px;
//   width: 100%;
//   height: 2px;

//   &.half {
//     width: 50%;
//   }

//   &.start {
//     transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
//     transform-origin: right;
//   }

//   ${StyledBars}.open &.start {
//       transform: rotate(-90deg) translateX(2px);
//     }

//   &.end {
//     align-self: flex-end;
//     transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
//     transform-origin: left;
//   }

//   ${StyledBars}.open &.end {
//       transform: rotate(-90deg) translateX(-2px);
//     }
// `;

// const StyledBars = styled.section`
//   width: 20px;
//   height: 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   cursor: pointer;
//   transition: transform 330ms ease-out;

//   &.open {
//     transform: rotate(-45deg);
//   }
// `;

// const Line = styled.div`
//   background-color: #fff;
//   border-radius: 5px;
//   width: 100%;
//   height: 6px;

//   ${(props) =>
//     props.half &&
//     css`
//       width: 50%;
//     `}

//   ${(props) =>
//     props.start &&
//     css`
//       transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
//       transform-origin: right;

//       ${StyledBars}.open & {
//         transform: rotate(-90deg) translateX(3px);
//       }
//     `}

//   ${(props) =>
//     props.end &&
//     css`
//       align-self: flex-end;
//       transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
//       transform-origin: left;

//       ${StyledBars}.open & {
//         transform: rotate(-90deg) translateX(-3px);
//       }
//     `}
// `;

const SCREEN_SIZE = 540;

function Hamburger({ onToggleMenu, isOpen }) {
  const [isMobile, setIsMobile] = useState(
    () => window.innerWidth < SCREEN_SIZE,
  );

  function handleClick() {
    onToggleMenu();
  }

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < SCREEN_SIZE);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <div className={`wrapper-menu ${isOpen ? "open" : ""}`} onClick={handleClick}>
          <div className="line-menu half start"></div>
          <div className="line-menu"></div>
          <div className="line-menu half end"></div>
        </div>
      ) : null}
    </>
  );
}

export default Hamburger;
