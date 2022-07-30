import React from 'react'

function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }

    var y = document.getElementById("navbartwo");
    if (y.className === "navtwo") {
        y.className += " responsive";
    } else {
        y.className = "navtwo";
    }

}

export default myFunction;