import styled from "styled-components";

export const Card = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  /* 色　X軸　Y軸　ぼかし　どれだけ広げるか */
  border-radius: 8px;
  padding: 16px;
`;
