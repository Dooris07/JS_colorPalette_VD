class Color{
    constructor(name, cssValue, textColor){
        this.name = name;
        this.cssValue = cssValue;
        this.textColor = textColor;
    }
}

async function init() {

    const response = await fetch("/colors.json")

    const adatok = await response.json();

    /**@type Color[] */
    let colors = adatok.map(a => new Color(a.name, a.cssValue, a.textColor))

    console.log(colors)

    for (let i = 0; i < colors.length; i++) {
        const element = colors[i];
        displayColors(element);
    }

}
init();
 

/**@param {Color} colors*/

function displayColors(colors) {
    const div = document.createElement('div');
    const name = document.createElement('h6');
    


    div.classList.add('d-flex', 'flex-wrap', 'w-20')
    name.classList.add('text-center', 'align-middle')

    name.textContent = colors.name;
    div.style.backgroundColor = colors.cssValue;

    if (colors.textColor == "light") {
        name.classList.add('text-light')
    }


    div.appendChild(name);
    document.getElementById('main').appendChild(div);

}

