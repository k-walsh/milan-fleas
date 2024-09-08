import "../styles/styles.css";
import { markets } from "../data";
import Item from "./Header";
import { Collapse, Select } from "antd";
import { useState } from "react";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import Header from "./Header";

function Main() {
  const [fleas, setFleas] = useState(markets);

  const handleChange = (day) => {
    if (day) {
      // if not clear
      setFleas(markets.filter((flea) => flea.days.includes(day)));
    }
  };

  const handleClear = () => {
    setFleas([...markets]);
  };

  return (
    <div className="main">
      <img
        src={`${process.env.PUBLIC_URL}/construction.png`}
        alt="under construction"
        style={{ position: "absolute", top: 50, left: 100 }}
      />
      <div className="top">
        <h1>Milan Fleas</h1>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <h2>Show me flea markets on </h2>
          <Select
            placeholder="Select a day"
            allowClear={true}
            style={{ width: 140 }}
            onChange={handleChange}
            onClear={handleClear}
            options={[
              { value: "Monday", label: "Monday" },
              { value: "Tuesday", label: "Tuesday" },
              { value: "Wednesday", label: "Wednesday" },
              { value: "Thursday", label: "Thursday" },
              { value: "Friday", label: "Friday" },
              { value: "Saturday", label: "Saturday" },
              { value: "Sunday", label: "Sunday" },
            ]}
          />
        </div>
      </div>

      <div className="content">
        {fleas.length > 0 ? (
          fleas.map((market) => (
            <Collapse
              className="custom-collapse"
              defaultActiveKey={["1"]}
              onChange={() => console.log("hiii")}
            >
              <CollapsePanel header={<Header {...market} />} key={market.name}>
                <p>{market.description}</p>
              </CollapsePanel>
            </Collapse>
          ))
        ) : (
          <p>no fleas on this day</p>
        )}
      </div>
    </div>
  );
}

export default Main;

// TODO:
/**
 * margins and spacing for mobile and smaller windows
 * scroll button to scroll to top
 * info button explaining some sources and copy paste - and image rights - no intent to copy
 * clip the main content so doesn't see through the header milan fleas
 *
 * each body content
 *  - add exception if needed at top in italics
 *  - add instagram link and / or website link with a cute icon
 *  - add address (and best to link to google maps)
 *  - add maybe a link to that tik tok page showing you around
 *
 * header style for each item
 *  - center the arrow
 *  - decide on color and stuff
 *  - edit theme for boxes and borders and stuff
 *
 * maybe do what i wanted with the title - but honeslty kind of like it like this - maybe just cpaital f - could use a span i think
 */
