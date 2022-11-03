import React from "react";
import Illustration from "../Illustration";
import Hero from "./Hero";

const index = () => {
  const style = {
    position: `absolute`,
    top: `5rem`,
    left: 0,
  };
  return (
    <main>
      <article className="bg-purple ">
        <Hero />
      </article>
      <main className="position-relative mt-12 mb-40">
        <article className="container">
          <img
            style={style}
            alt="img"
            src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1667476113/samples/techstudio/Icons%20and%20Images/Icons%20and%20Images/Tech%20Studio%20images/Mask_Group_91_sm51se.png"
          />
          <h2 className="text-dark fw-bolder fs-3xl ">
            Why choose Techstudio?
          </h2>
          <article className="d-flex justify-content-end">
            <div
              style={{ width: `60%` }}
              className="row justify-content-between gap-5 mt-5"
            >
              <div className="col col-5">
                <Illustration
                  // size={`90%`}
                  img={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1667476071/samples/techstudio/Icons%20and%20Images/Tech%20Studio%20images/Group_10032_rlfitf.png`}
                  title={`Always welcoming`}
                  desc={`Our platform allows easy onboarding to any
           of our programs you wish to be part of.`}
                />
              </div>
              <div className="col col-5">
                <Illustration
                  // size={`90%`}
                  img={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1667476072/samples/techstudio/Icons%20and%20Images/Tech%20Studio%20images/Group_10034_fnf9zs.png`}
                  title={`Online and Offline Classes`}
                  desc={`Our platform provides a comfortable and seamless Online and offline class experience`}
                />
              </div>
              <div className="col col-12 mt-10">
                <Illustration
                  size={`50%`}
                  img={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1667476072/samples/techstudio/Icons%20and%20Images/Tech%20Studio%20images/Group_10033_szztme.png`}
                  title={`There when you need us`}
                  desc={`Our dedicated team of tech experts research and, compile knowledge across sectors in tech to give you the best resources needed.`}
                />
              </div>
            </div>
          </article>
        </article>
      </main>
    </main>
  );
};

export default index;
