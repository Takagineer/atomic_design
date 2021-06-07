import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #40514e;
`;

// 全てのページで使用できるボタンの共通部分をこのコンポーネントで表現する
// 十行目既存のコンポーネントに他のっコンポーネントのCSSを追加している。
