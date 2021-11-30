import * as React from "react";
import MGhostImg from "../../assets/img/MGhost-to-mint.png";

const About = () => {
  return (
    <div className="border-top-main">
      <div className="container py-4">
        <div className="col-12 col-md-10 px-0 mx-md-auto">
          <h1 className="text-black font-weight-bold my-5 text-4xl">
            Hello, we are a magic team!
          </h1>
          <p className="text-xl mb-5">
            Phasellus blandit leo ut odio. Etiam rhoncus. Ut non enim eleifend
            felis pretium feugiat. Aenean ut eros et nisl sagittis vestibulum.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam eget
            dui.
          </p>
          <div className="d-flex flex-row row">
            <div className="col-lg-4">
              <img
                className="block w-75 p-0 m-0 mb-5 rounded-circle"
                src={MGhostImg}
                alt="Jeremy"
              />
              <h2 className="text-xl font-weight-bold">Jeremy Douchamps</h2>
              <h4>Founder & project manager</h4>
              <h3 className="text-xl text-secondary">@gokai</h3>
            </div>
            <div className="col-lg-4">
              <img
                className="block w-75 p-0 m-0 mb-5 rounded-circle"
                src={MGhostImg}
                alt="Mghosts"
              />
              <h2 className="text-xl font-weight-bold">Albet Lanne</h2>
              <h4>Seo & social media expert</h4>
              <h3 className="text-xl text-secondary">@bebert</h3>
            </div>
            <div className="col-lg-4">
              <img
                className="block w-75 p-0 m-0 mb-5 rounded-circle"
                src={MGhostImg}
                alt="Mghosts"
              />
              <h2 className="text-xl font-weight-bold">Renen Mariano</h2>
              <h4>Graphic designer & traditional artist</h4>
              <h3 className="text-xl text-secondary">@renen02</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
