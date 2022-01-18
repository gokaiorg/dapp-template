import * as React from "react";

const Roadmap = () => {
  return (
    <div className="border-top-main">
      <div className="container py-4">
        <div className="col-12 col-md-10 px-0 mx-md-auto">
          <h1 className="text-black font-weight-bold my-5 text-4xl">Contact</h1>
          <p className="text-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0619345097703!2d98.32344361516604!3d7.783258394390873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30502f1d9d1fad3b%3A0xa486c37ffbc36a3b!2sGokai!5e0!3m2!1sfr!2sth!4v1642499810924!5m2!1sfr!2sth"
              width="925"
              height="450"
              loading="lazy"
            ></iframe>
          </p>
          <h2 className="text-black font-weight-bold my-5 text-4xl">
            Gokai Labs
          </h2>
          <p className="text-xl">12, 16 Soi Nam Jai, Rawai, Mueang</p>
          <p className="text-xl">Phuket District, Phuket 83100</p>
          <p className="text-xl">
            <a href="tel:+66949486177">+66 9 49 48 61 77</a>
          </p>
          <p className="text-xl">
            <a href="mailto:messge@gokai.org">Contact by mail</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
