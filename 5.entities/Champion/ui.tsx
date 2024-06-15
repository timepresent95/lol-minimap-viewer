import { HTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { Champion } from "./model";

interface Props extends Champion, Omit<HTMLAttributes<HTMLDivElement>, "id"> {
  fullRounded?: boolean;
  size?: string;
  levelDirection?: "left" | "right";
  championImgUrl: string;
}

function ChampionComponent({
  championImgUrl,
  level,
  fullRounded,
  size,
  levelDirection = "left",
  ...props
}: Props) {
  return (
    <ChampionContainer {...props} $size={size} $levelDirection={levelDirection}>
      <ChampionPortrait src={championImgUrl} $fullRounded={fullRounded} />
      {level && (
        <ChampionLevel $direction={levelDirection}>{level}</ChampionLevel>
      )}
    </ChampionContainer>
  );
}

const ChampionContainer = styled.div<{
  $size?: string;
  $levelDirection: "left" | "right";
}>`
  width: ${(props) => props.$size ?? "100%"};
  height: ${(props) => props.$size ?? "100%"};
  position: relative;

  ${(props) =>
    props.$levelDirection === "left"
      ? css`
          margin-left: 0.5rem;
        `
      : css`
          margin-right: 0.5rem;
        `}
`;

const ChampionPortrait = styled.img<{ $fullRounded?: boolean }>`
  width: 100%;
  height: 100%;
  border-radius: ${(props) => (props.$fullRounded ? "100%" : "4px")};
`;

const ChampionLevel = styled.span<{ $direction: "left" | "right" }>`
  border-radius: 100%;
  position: absolute;
  bottom: 0;

  color: white;
  font-size: 1rem;
  background-color: var(--slate-700); //700
  padding: 1px;
  ${(props) =>
    props.$direction === "left"
      ? css`
          left: 0;
          transform: translateX(-50%);
        `
      : css`
          right: 0;
          transform: translateX(50%);
        `}
`;

ChampionComponent.displayName = "ChampionComponent";
export default ChampionComponent;
