import React, { useState } from "react";
import styled from "styled-components";
import { GlobalStyle, StyledBox, StyledContent } from "../style/app.style";
import { GUTTER } from "../constants";
import data from "../data.json";

const { sultans } = data;

const StyledSultansPage = styled.div`
  color: white;
  padding: ${GUTTER.medium};

  h1 {
    font-size: 62px;
    text-align: center;
    margin-bottom: 0;
  }
`;

const StyledDate = styled.span`
  display: block;
  font-size: 48px;
  text-align: center;
`;

const StyledTimeLine = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  left: 50%;
  height: 30px;
  content: "";
  z-index: -1;
  border-left: 5px dotted white;
`;

export type ActiveType = {
  active: number | null;
};

type DataType = {
  title: string;
  img: string;
  content: string;
  id: number;
};

const Sultans = () => {
  const [activeId, setActiveId] = useState<ActiveType>({
    active: null,
  });

  // toggle current information box
  const isCurrentId = (id: number) => activeId.active === id;

  const handleCollapse = (id: number) => () =>
    setActiveId((prev: ActiveType) => ({
      active: prev.active === id ? null : id,
    }));

  const accordions = sultans.map(
    ({ title, img, content, id }: DataType, index: number) => (
      <div key={index}>
        <StyledBox
          key={id}
          active={activeId}
          currentBox={id}
          onClick={handleCollapse(id)}
        >
          {isCurrentId(id) && <img src={img} alt={title} />}
          <StyledContent>
            <h2>{title}</h2>
            {isCurrentId(id) && <p>{content}</p>}
          </StyledContent>
        </StyledBox>
        <StyledTimeLine />
      </div>
    )
  );

  return (
    <>
      <GlobalStyle backgroundImage={false} />
      <StyledSultansPage>
        <h1>The Sultans</h1>

        <StyledDate>1444</StyledDate>
        <StyledTimeLine />
        {accordions}
      </StyledSultansPage>
    </>
  );
};

export default Sultans;
