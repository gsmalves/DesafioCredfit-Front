import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface Props {
  hasActive: boolean;
}

export const Container = styled.div``;

export const Header = styled.div`
  background: var(--background);
  box-shadow: 0px 1px 6px #aae6e6;
  height: 120px;
`;

export const HeaderContent = styled.div<Props>`
  max-width: 1380px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  nav {
    background-color: var(--background);
    width: 350px;

    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: left 0.1s;

    max-width: 350px;
    border-right: 1px solid #dcdce6;

    ${(props) =>
      props.hasActive &&
      css`
        left: 0;
        transition: left 0.1s;
      `}

    ul {
      align-items: center;
      padding: 8px 0px 8px 16px;
      list-style: none;
      height: 60px;
      margin-top: 20px;

      li {
        text-decoration: none;
        color: #000;
        font-size: 18px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 16px;
        border-radius: 4px;
        border: 1px solid transparent;

        svg {
          margin-right: 16px;
          width: 25px;
          height: 25px;
          color: var(--light-blue);
        }

        &:hover {
          border: 1px solid #dcdce6;
        }
      }

      a {
        text-decoration: none;
        color: #000;
        font-size: 18px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        border-radius: 4px;
      }
    }

    div {
      margin-left: 0px;

      display: flex;
      position: absolute;
      right: 2px;
      top: 2px;

      svg {
        color: var(--orange);
        width: 40px;
        height: 40px;
        transition: color 0.2s;
        transition: height 0.1s;

        &:hover {
          color: ${shade(0.2, '#F9730C')};
          height: 45px;
        }
      }
    }
  }

  div {
    margin-left: 20px;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    width: 70px;

    &:hover {
      background: rgba(238, 238, 238, 0.3);
      border-radius: 50%;
    }

    svg {
      color: var(--light-blue);
      width: 60px;
      height: 60px;
      transition: color 0.2s;
      transition: height 0.1s;
      opacity: 100%;

      &:hover {
        color: ${shade(0.4, '#3ABBBA')};
      }
    }
  }

  > img {
    margin-top: -8px;
    margin-left: auto;
    max-width: 12%;

    min-width: 150px;
  }

  button {
    margin-left: auto;
    background: transparent;
    height: 60px;
    width: 60px;
    border: 1px solid #dcdce6;
    border-radius: 4px;

    & + button {
      margin-left: 10px;
    }

    svg {
      color: var(--light-blue);
      width: 25px;
      height: 25px;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.4, '#3ABBBA')};
        width: 27px;
        height: 27px;
      }
    }
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
`;

export const Schedule = styled.div`
  flex: 1;

  h1 {
    font-size: 36px;
    color: #3e3b47;
  }

  p {
    margin-top: 8px;
    color: #707070;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 18px;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      background: var(--light-blue);
      margin: 0 8px;
    }
  }
`;

export const Section = styled.div`
  margin-top: 40px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;

  ul {
    grid-gap: 24px;
    list-style: none;

    li {
      padding: 24px;
      border-radius: 8px;
      position: relative;
      box-shadow: 0px 1px 5px #e0dcdc;

      > a {
        text-decoration: none;
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 10px 0px;
        border-radius: 10px;
        margin-top: 18px;

        max-width: 420px;
        max-height: 420px;
        min-height: 250px;

        > img {
          width: 100%;
          height: 100%;
          min-width: 50px;
        }
      }

      button {
        position: absolute;
        right: 14px;
        top: 14px;
        border: 0;
        background: transparent;

        svg {
          color: #a8a8b3;
          width: 25px;
          height: 25px;
          transition: color 0.3s;

          &:hover {
            color: ${shade(0.5, '#707070')};
            width: 27px;
            height: 27px;
          }
        }
      }

      strong {
        color: #3e3b47;
        font-size: 20px;
        line-height: 26px;
        display: block;
        margin-bottom: -8px;
      }
    }
  }

  > strong {
    color: #707070;
    font-size: 20px;
    line-height: 26px;
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
`;

export const Deal = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  span {
    margin-left: auto;
    display: flex;
    align-items: center;
    color: #707070;
  }

  div {
    background: #3e3b47;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;

    img {
      width: 80px;
      height: 80px;
    }

    strong {
      margin-left: 24px;
      color: var(--background);
      font-size: 20px;
    }
  }
`;
