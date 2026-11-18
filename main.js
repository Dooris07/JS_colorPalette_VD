class Color {
    constructor(name, cssValue, textColor) {
        this.name = name;
        this.cssValue = cssValue;
        this.textColor = textColor;
    }
}


async function init() {
    const response = await fetch("/colors.json");
    const adatok = await response.json();

    /**@type Color[] */
    let colors = adatok.map(a => new Color(a.name, a.cssValue, a.textColor))
    console.log(colors)
    for (let i = 0; i < adatok.length; i++) {
        const element = adatok[i];
        setTimeout(() => {
            document.getElementById("szoveg").textContent = "";
            displayColor(element);
        }, 3000)
    }
}
init();

/**@param {Color} colors*/
function displayColor(colors) {
    const cont = document.createElement("div");
    const title = document.createElement("h5");
    const main = document.getElementById("main");

    main.classList.add('d-flex', 'flex-wrap', 'w-10')

    cont.classList.add('text-center', 'm-2', 'mx-auto')
    cont.style.backgroundColor = colors.cssValue;
    cont.style.width = "400px";
    cont.style.height = "300px";
    
    if (colors.textColor == "light") {
        title.classList.add('text-light')
    }

    title.textContent = colors.name;

    title.style.lineHeight = "300px";
    title.style.verticalAlign = "middle";

    cont.appendChild(title)
    document.getElementById("main").appendChild(cont)
}







