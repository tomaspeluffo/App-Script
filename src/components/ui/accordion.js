import { useState } from "react";
import styled from "styled-components";

const AccordionTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 36px;
  background: #f7f7f7;
  border: 1px solid #e0e0e0;
  cursor: pointer;
`;

const Accordion = ({ title, Content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-item">
        <AccordionTitle onClick={() => setIsActive(!isActive)}>
          <p
            style={{
              paddingLeft: "15px",
              fontSize: "14px",
              fontFamily: "Roboto",
            }}
          >
            {title}
          </p>
        </AccordionTitle>
        {isActive && (
          <div
            style={{
              padding: "15px",
            }}
          >
            {<Content />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
