import styled from "styled-components";
import { GenericStyleBox } from "../../style/app.style";
import { GUTTER } from "../../constants";

export const StyledBoxCheck = styled.div`
  ${GenericStyleBox};
  width: 95%;
  margin: ${GUTTER.medium} auto;
  font-size: 20px;

  div {
    margin: ${GUTTER.medium};
    position: relative;

    label {
      display: flex;
      align-items: center;
      color: #fff;
      cursor: pointer;
      position: relative;

      span {
        display: inline-block;
        position: relative;
        background-color: transparent;
        width: 25px;
        height: 25px;
        transform-origin: center;
        border: 2px solid #fff;
        border-radius: 50%;
        vertical-align: -6px;
        margin-right: ${GUTTER.medium};
        transition: background-color 150ms 200ms,
          transform 350ms cubic-bezier(0.78, -1.22, 0.17, 1.89);

        &:before {
          content: "";
          width: 0;
          height: 2px;
          border-radius: 2px;
          background: #fff;
          position: absolute;
          transform: rotate(45deg);
          top: 11px;
          left: 7px;
          transition: width 50ms ease 50ms;
          transform-origin: 0 0;
        }

        &:after {
          content: "";
          width: 0;
          height: 2px;
          border-radius: 2px;
          background: #fff;
          position: absolute;
          transform: rotate(305deg);
          top: 14px;
          left: 8px;
          transition: width 50ms ease;
          transform-origin: 0 0;
        }
      }

      &:hover {
        span {
          &:before {
            width: 5px;
            transition: width 100ms ease;
          }

          &:after {
            width: 10px;
            transition: width 150ms ease 100ms;
          }
        }
      }
    }

    input[type="checkbox"] {
      display: none;

      &:checked {
        + label {
          span {
            background-color: #fff;
            transform: scale(1.25); // enlarge the box

            &:after {
              width: 10px;
              background: #1790b5;
              transition: width 150ms ease 100ms; // enlarge the tick
            }

            &:before {
              width: 5px;
              background: #1790b5;
              transition: width 150ms ease 100ms; // enlarge the tick
            }
          }

          &:hover {
            // copy the states for onMouseOver to avoid flickering
            span {
              background-color: #fff;
              transform: scale(1.25); // enlarge the box

              &:after {
                width: 10px;
                background: #1790b5;
                transition: width 150ms ease 100ms; // enlarge the tick
              }

              &:before {
                width: 5px;
                background: #1790b5;
                transition: width 150ms ease 100ms; // enlarge the tick
              }
            }
          }
        }
      }
    }
  }
`;
