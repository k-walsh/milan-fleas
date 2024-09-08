import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./components/Main";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/bg.jpeg)`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        margin: "0 0 -20px 0",
        minHeight: "100vh",
        // opacity: 0.5,
      }}
      className="bg"
    >
      <ConfigProvider
        theme={{
          components: {
            token: {
              colorBorder: "#800000",
            },
            Collapse: {
              headerBg: "#faf5ee",
              /* here is your component tokens */
            },
          },
        }}
      >
        <Main />
      </ConfigProvider>
    </div>

    {/* <h1
      style={{
        fontSize: "100px",
        textAlign: "center",
        color: "Thistle",
        backgroundColor: "DarkMagenta",
        // margin: "auto",
      }}
    >
      hello adele!
    </h1> */}
  </React.StrictMode>
);
