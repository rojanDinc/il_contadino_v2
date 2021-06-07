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
    if (isOffsetPassed) {
        elements.forEach((el) => {
            if (el.classList.value.includes('has-text-white') === true) {
                el.classList.remove('has-text-white')
            }
        })
    } else {
        elements.forEach((el) => {
            if (el.classList.value.includes('has-text-white') === false) {
                el.classList.add('has-text-white')
            }
        })
    }
}

const elements = document.querySelectorAll('.nav-item-scroll')
const videoOverlay = document.getElementById('video-overlay')
window.onload = () => {
    onScroll()
    setMenuLinks()
}
window.onscroll = onScroll