import React from "react";
import "./Terminal.css"

function Terminal() {
    return (
        <fieldset model=".terminal" id="biotext" >
            <legend className="terminalLegend">🌌 about</legend>
            <a>-bash-3.2$ groups
                unixuser feegroup figroup fogroup fumgroup</a>
            <p>-self-taught/boot camp graduate with many projects</p>
            <p>-experience with mobile and web development with modern languages</p>
            <p>-regularly updated gitHub and linkedin</p>
            <p>-active on social media with quick responses</p>
            <p>-available for full and part time work</p>
            <a href="https://1drv.ms/w/s!AtgPspX-oSlPjLw6booJFFIk8R3N2A?e=5dbdQa" id="resume">-resume here</a>
        </fieldset>
    )
}

export default Terminal