import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal";
import endpoints from "../constants/endpoints";
import Social from "./Social";
import FallbackSpinner from "./FallbackSpinner";
import StarsComponent from "./StarsComponent/StarsComponent";

const styles = {
  nameStyle: {
    fontSize: "5em",
  },
  inlineChild: {
    display: "inline-block",
  },
  mainContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
  },
};

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.home, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return data ? (
    <Fade>
      <div className="relative overflow-hidden">
        <div className="absolute top-1/4 w-full flex justify-center z-50">
          <Social />
        </div>
        <StarsComponent showEarth={true}>
          <div className="mt-4 h-full flex flex-col items-center">
            <h1 className="text-7xl">{data?.name}</h1>
            <div className="flex-row">
              <h2 className="inline-block">I&apos;m&nbsp;</h2>
              <Typewriter
                options={{
                  loop: true,
                  autoStart: true,
                  strings: data?.roles,
                }}
              />
            </div>
          </div>
        </StarsComponent>
      </div>
    </Fade>
  ) : (
    <FallbackSpinner />
  );
}

export default Home;
