/**
 * A preload script runs before the rendered process is loaded.
 * It has access to both rendered globals (e.g. window, document) and a Node.js environment.
 * All the Node.js APIs are available in the preload process.
 * It has the same sandbox as a Chrome extension.
 * */


/**
 * Insert the version numbers into the HTML document.
 */
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for ( const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`${dependency}-version`, process.versions[dependency])
    }
})