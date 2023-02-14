import {} from "react";
import styled from "styled-components";
import Button from "../ui/button";
import Accordion from "../ui/accordion";
import SelectSource from "./queryContent/SelectSource";
import SelectCell from "./queryContent/SelectCell.js";
import SelectTable from "./queryContent/Selecttable";

const Container = styled.div`
  margin-top: 40px;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #4b4b4b;
  font-family: "Roboto";
`;

const Query = () => {
  const generateMetric = () => {
    console.log("Esto es un button funcionando");
  };

  return (
    <>
      <Container>
        <Title>Create new query</Title>
        <div style={{ marginTop: "15px" }}>
          <Button title={"Get Data to Table"} handler={generateMetric} />
        </div>
      </Container>
      <div style={{ marginTop: "15px" }}>
        <Accordion title={"Select Source"} Content={SelectSource} />
        <Accordion title={"Select Table"} Content={SelectTable} />
        <Accordion title={"Select Cell"} Content={SelectCell} />
      </div>
    </>
  );
};

export default Query;
