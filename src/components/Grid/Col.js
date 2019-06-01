import React from "react";

export const Col = ({ border, size, children }) => (
  <div className={size.split(" ").map(size => "col-" + size).join(" ")} style={{marginTop:10,marginBottom:10,borderBottom:`${border ? `${border}`: ''}`}}>
    {children}
  </div>
);