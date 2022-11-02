import React from "react";
import CV from '../../assets/first.pdf'


const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download className="btn">Dowuload</a>
            {/* <a href="#Contact" className="btn btn-primary">Contact</a> */}
        </div>
    )
}

export default CTA;