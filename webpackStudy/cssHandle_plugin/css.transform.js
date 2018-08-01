module.exports = function (css) {
    console.log(css)
    console.log(window.innerWidth)
    return css.replace('red', 'green')
}