import React from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <main className="container">
      <div className="left">
        <h1>Next JS Interview Questions and Answers</h1>
      </div>
      <div className="right">
        {data.map((data) => {
          return <SingleQuestion {...data} key={data.id} />;
        })}
      </div>
    </main>
  );
}

export default App;
