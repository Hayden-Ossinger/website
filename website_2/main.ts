import { animate } from "./3d/3d";
// import {}

const portfolioBasic = document.getElementById("topButtonBasic");
const portfolio3d = document.getElementById("topButton3D");

if (portfolioBasic) {
    portfolioBasic.addEventListener("click", function () {
        const all3d = document.getElementsByClassName("3d");
        console.log(all3d.length);
        
        return alert("Switching to basic");
    });
}

if (portfolio3d) {
    portfolio3d.addEventListener("click", function () {

        return alert("Switching to 3d");
    });
}
