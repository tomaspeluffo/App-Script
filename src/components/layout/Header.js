import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 40px;
  margin: 0;
  padding: 0 12px;
  background: #ededed;
  z-index: 100;
  width: 100%;
  position: fixed;
  top: 0;
`;

const HeaderContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
`;

const MenuButton = styled.button`
  font-size: 13px;
  font-weight: 400;
  color: #7d7d7d;
  transition: color 0.3s ease;
  border: none;
  height: 100%;
  cursor: pointer;

  ${({ active }) =>
    active &&
    `font-weight: 500;
       color: #4b4b4b;`}
`;

const Header = ({ setActiveTabContent }) => {
  const [activeTab, setActiveTab] = useState("Query");

  const onClickHandler = (tab) => {
    setActiveTabContent(tab);
    setActiveTab(tab);
  };

  const tabs = ["Query", "Schedule"];

  return (
    <>
      <Container>
        {tabs.map((tab) => (
          <MenuButton
            key={tab}
            onClick={() => onClickHandler(tab)}
            active={activeTab === tab}
          >
            {tab}
          </MenuButton>
        ))}
      </Container>
    </>
  );
};

export default Header;
