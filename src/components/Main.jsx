import "../styles/styles.css";
import { markets } from "../data";
import Item from "./Header";
import { Collapse, Select } from "antd";
import { useState } from "react";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import Header from "./Header";
import { FaMapPin } from "react-icons/fa";
import { FaC, FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { GoInfo } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";

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
      <div
        className="top"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/bg.jpeg)`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          margin: "0 0 -20px 0",
        }}
      >
        <h1>
          Milan <span id="bigF">F</span>leas
        </h1>
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
                {console.log(market.adressLink)}

                <div className="links">
                  <a href={market.addressLink} target="_blank" rel="noreferrer">
                    <FaMapPin /> {market.address}
                  </a>

                  <div className="more">
                    {market.instagram && (
                      <a
                        href={market.instagram}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaInstagram size={"24px"} />
                      </a>
                    )}

                    {market.facebook && (
                      <a
                        href={market.facebook}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaFacebook size={"24px"} />
                      </a>
                    )}

                    {market.tiktok && (
                      <a href={market.tiktok} target="_blank" rel="noreferrer">
                        <FaTiktok size={"20px"} />
                      </a>
                    )}

                    {market.website && (
                      <a href={market.website} target="_blank" rel="noreferrer">
                        <GoInfo size={"24px"} />
                      </a>
                    )}
                  </div>
                </div>

                {market.exception && (
                  <p>
                    <i>*** {market.exception}</i>
                  </p>
                )}

                <p>{market.description}</p>
              </CollapsePanel>
            </Collapse>
          ))
        ) : (
          <p>no fleas on this day</p>
        )}
      </div>
      <div className="foot"></div>
    </div>
  );
}

export default Main;

// TODO:
/**
 * margins and spacing for mobile and smaller windows
 * scroll button to scroll to top
 * info button explaining some sources and copy paste - and image rights - no intent to copy
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
