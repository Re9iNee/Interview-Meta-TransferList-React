import "./styles.css";

import { useEffect, useState } from "react";
import List from "./components/List";
import { items } from "./data";

export default function App() {
  const [lefts, setLefts] = useState(items);
  const [checkedLefts, setCheckedLefts] = useState([]);
  const [rights, setRights] = useState([]);
  const [checkedRights, setCheckedRights] = useState([]);

  const toTheRight = () => {
    // nothing checked to move
    if (checkedLefts.length === 0) return;

    // remove it from left
    setLefts((lefts) =>
      lefts.filter((left) => !checkedLefts.includes(left)).sort()
    );
    // add it to the right
    setRights((rights) => rights.concat(checkedLefts).sort());

    setCheckedLefts([]);
  };
  const toTheLeft = () => {
    if (checkedRights.length === 0) return;

    // remove it from right
    setRights((rights) =>
      rights.filter((right) => !checkedRights.includes(right)).sort()
    );
    // add it to the left
    setLefts((lefts) => lefts.concat(checkedRights).sort());

    setCheckedRights([]);
  };

  return (
    <div className='App'>
      <section className='Container'>
        <List items={lefts} setCheckedItems={setCheckedLefts} />
        <button onClick={toTheRight}>{">"}</button>
        <button onClick={toTheLeft}>{"<"}</button>
        <List items={rights} setCheckedItems={setCheckedRights} />
      </section>
    </div>
  );
}
