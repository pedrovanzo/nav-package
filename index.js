function navComponent() {
    // Navbar
    const newNavComponent = document.createElement('nav')
    // newNavComponent.className('pv-nav')
    newNavComponent.setAttribute('class', 'pv-nav')
    // Navbar Heading
    const newNavHeading = document.createElement('h1')
    // newNavHeading.className('pv-heading')
    newNavHeading.setAttribute('class', 'pv-heading')
    // Navbar UL
    const newNavUl = document.createElement('ul')
    newNavUl.setAttribute('class', 'pv-ul')
    // Navbar LI
    const newNavLi = document.createElement('li')
    newNavLi.setAttribute('class', 'pv-li')

    /* APPEND LOGIC */

    // Append Li to Ul
    newNavUl.appendChild(newNavLi, newNavLi, newNavLi)
    // Append Heading to Navbar
    newNavComponent.appendChild(newNavHeading)
    // Append Ul to Navbar
    newNavComponent.appendChild(newNavUl)

    // Return Navbar with appended items
    return newNavComponent
}
module.exports = navComponent