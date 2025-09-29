import { Divider } from "@mui/material";
import "./overview.css";
import Projects from "./projects";

export default function Overview() {
  return (
    <div
      style={{
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="md:hidden flex justify-center mt-20">
        <img
          src="https://www.w3schools.com/html/img_girl.jpg"
          style={{ width: "125px", height: "auto", borderRadius: "20px" }}
        ></img>
      </div>
      <div
        className="m-[15px] md:m-[125px]"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ marginRight: "20px" }}>
          <p
            style={{
              fontSize: "36px",
              fontWeight: "bold",
            }}
            className="font-bold"
          >
            Daniyal Ahmad Rizwan
          </p>
          <p>
            Building innovative web and mobile applications to solve real-world
            problems.
          </p>
        </div>
        <div className="hide-on-mobile">
          <img
            src="https://www.w3schools.com/html/img_girl.jpg"
            style={{ width: "200px", height: "auto", borderRadius: "40px" }}
          ></img>
        </div>
      </div>

      <p className="mx-4 text-center mt-6">
        Frontend-focused Software Engineer with over 4 years of experience in
        building high-performing UI components and full-stack applications using
        JavaScript, React, Vue.js, TypeScript, and Flutter. Proven ability to
        design robust frontend SDKs, enhance developer experience, and
        contribute to scalable product architectures. Passionate about building
        seamless integration layers and UI toolkits that empower platforms and
        teams alike.
      </p>
      {/* <div>
        <p
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            margin: "5px 15px",
          }}
        >
          What's new
        </p>
        <div
          style={{
            display: "flex",
            overflowX: "scroll",
            overflowY: "hidden",
            marginBottom: "10px",
          }}
        >
          <div
            style={{
              height: "165px",
              minWidth: "300px",
              background: "#1C1B1D",
              borderRadius: "15px",
              marginLeft: "15px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <img
                src={require("../assets/khata_icon.png")}
                style={{ height: "32px" }}
              ></img>
              <p style={{ margin: 0, color: "#E6E1E3" }}>Khata at Home</p>
              <img
                src="https://www.w3schools.com/html/img_girl.jpg"
                style={{
                  width: "123px",
                  height: "auto",
                  borderRadius: "12px",
                }}
              ></img>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
