import React from "react";

export const SectionFluid = ({ sectionId, children }) => {
    return (
        <div>
            <section id={sectionId}>
                <div className="container-fluid">
                    {children}
                </div>
            </section>
        </div>
    );
};