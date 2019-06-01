import React from "react";

export const Section = ({ sectionId, children }) => {
    return (
        <div>
            <section id={sectionId}>
                <div className="container">
                    {children}
                </div>
            </section>
        </div>
    );
};
