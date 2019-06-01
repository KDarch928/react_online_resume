import React from "react";

export const ListID = ({ children }) => {
  return (
    <div>
      <ul id="faq-list" className="animated fadeInUp">
        {children}
      </ul>
    </div>
  );
};