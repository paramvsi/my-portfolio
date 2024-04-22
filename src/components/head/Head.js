import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Head = () => {
  return (
    <div className="py-3 lg:py-6 px-2 lg:px-3 bg-dark-teal text-white w-full flex justify-between align-middle">
      <h2 className="flex items-center justify-start gap-3">
        {" "}
        <img
          className="w-6 h-6"
          src="/assets/images/PSLogo.png"
          alt="my-logo"
        />{" "}
        Paramveer Singh
      </h2>

      <section className="flex justify-end gap-3">
        <span className="hidden lg:block">
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Hyderabad, India
        </span>
        <span className="hidden lg:block">-</span>
        <span className="hidden lg:block">
          <FontAwesomeIcon icon={faPhone} /> +91-8310820871
        </span>
        <span className="hidden lg:block">-</span>
        <span className="hidden lg:block">
          <FontAwesomeIcon icon={faEnvelope} /> paramsinghkhattra@gmail.com
        </span>
        <a href="https://www.linkedin.com/in/paramveer-singh-3623a9183/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/paramvsi">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </section>
    </div>
  );
};

export default Head;
