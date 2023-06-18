function navComponent() {
    /* #################################### */
    /* Creating Elements */
    /* #################################### */
    // Navbar
    const newNavComponent = document.createElement('nav')
    newNavComponent.setAttribute('class', 'pv-nav')
    // Navbar Heading
    const newNavHeading = document.createElement('h1')
    newNavHeading.setAttribute('class', 'pv-heading')
    newNavHeading.innerText = 'Main'
    // Navbar UL
    const newNavUl = document.createElement('ul')
    newNavUl.setAttribute('class', 'pv-ul')
    // Navbar LI One
    const newNavLiOne = document.createElement('li')
    newNavLiOne.innerText = 'navli one'
    newNavLiOne.setAttribute('class', 'pv-li')
    // Navbar LI Two
    const newNavLiTwo = document.createElement('li')
    newNavLiTwo.innerText = 'navli two'
    newNavLiTwo.setAttribute('class', 'pv-li')
    /* #################################### */
    /* Appending Elements to DOM */
    /* #################################### */
    // Append Li to Ul
    newNavUl.appendChild(newNavLiOne)
    newNavUl.appendChild(newNavLiTwo)
    // Append Heading to Navbar
    newNavComponent.appendChild(newNavHeading)
    // Append Ul to Navbar
    newNavComponent.appendChild(newNavUl)

    // Return Navbar with appended items
    return newNavComponent
}
module.exports = navComponent