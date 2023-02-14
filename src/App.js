import { useState } from "react";
import Header from "./components/layout/Header";
import Query from "./components/layout/Query";
import Schedule from "./components/layout/Schedule";

export function App() {
  const [activeTabContent, setActiveTabContent] = useState("Query");

  return (
    <>
      <Header setActiveTabContent={setActiveTabContent} />
      {activeTabContent === "Query" ? <Query /> : <Schedule />}
    </>
  );
}
