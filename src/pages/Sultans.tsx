import React, { useEffect, useState } from "react";
import { StyledBox, StyledContent } from "../style/app.style";
import data from "../data.json";
import { useNavigate } from "react-router-dom";
import { useCounter } from "../hooks";
import { Hat } from "../assets";
import {
  StyledSultansPage,
  StyledHat,
  StyledDate,
  StyledTimeLine,
  StyledTitleBox,
} from "./styled/Sultans.style";

const { sultans } = data;

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
  let navigate = useNavigate();
  const { warTime } = useCounter();
  const [activeId, setActiveId] = useState<ActiveType>({
    active: null,
  });

  useEffect(() => {
    if (warTime) {
      return navigate("/");
    }
  }, [warTime, navigate]);

  // toggle current information box
  const isCurrentId = (id: number) => activeId.active === id;

  const handleCollapse = (id: number) => () =>
    setActiveId((prev: ActiveType) => ({
      active: prev.active === id ? null : id,
    }));

  const accordions = sultans.map(
    ({ title, img, content, id }: DataType, index) => (
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
      <StyledSultansPage>
        <StyledTitleBox>
          <h1>The greatest sultans</h1>
          <StyledHat src={Hat} alt="Hat" />
        </StyledTitleBox>

        <StyledDate>1444</StyledDate>
        <StyledTimeLine />
        {accordions}
        <StyledDate>1566</StyledDate>
      </StyledSultansPage>
    </>
  );
};

export default Sultans;
