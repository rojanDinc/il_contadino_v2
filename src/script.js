import "./styles.scss";
import drinksMenu from './static/drinks_menu.png'
import foodMenu from './static/food_menu_v2.jpeg'

const setMenuLinks = () => {
    const drinksMenuElement = document.getElementById('menu-drinks')
    drinksMenuElement.href = drinksMenu
    const foodMenuElement = document.getElementById('menu-food')
    foodMenuElement.href = foodMenu
}

const toggleHeaderBackground = (shouldToggle) => {
    const header = document.getElementById('header')
    if (shouldToggle) {
        header.classList.add('has-background-white')
        header.classList.add('header-shadow')
    } else {
        header.classList.remove('has-background-white')
        header.classList.remove('header-shadow')
    }
}

const onScroll = () => {
    const yOffset = window.pageYOffset
    const isOffsetPassed = yOffset + 20 > videoOverlay.scrollHeight
    toggleHeaderBackground(isOffsetPassed)
    elements.forEach(el => {
        if (isOffsetPassed === true && el.classList.value.includes('text-white') === true) {
            el.classList.remove('text-white')
        } else if (isOffsetPassed === false && el.classList.value.includes('text-white') === false) {
            el.classList.add('text-white')
        }
    })
}

const elements = document.querySelectorAll('.nav-item-scroll')
const videoOverlay = document.getElementById('video-overlay')
window.onload = () => {
    onScroll()
    setMenuLinks()
}
window.onscroll = onScroll