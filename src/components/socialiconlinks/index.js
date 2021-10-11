import React from "react";
import linkdata from "./linkdata";
export const SiteLinks = () => {
  return (
    <div className="col l6 s12">
      <section id="links">
        {linkdata.map((data) => (
          <a
            href={data.href}
            target="_blank"
            rel="noopener noreferrer"
            className={data.className}
          ></a>
        ))}
      </section>
    </div>
  );
};
