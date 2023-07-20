/**
 * The main process that controls application lifecycle and creates native browser window.
 */

const { app, BrowserWindow } = require('electron')
const path = require('path') // Node.js 'path' module

/**
 * Load the index.html into a new BrowserWindow instance.
 */
const createWindow = () => {
    // BrowserWindow constructor to create the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            /**
             * Attach a preload script to the renderer.
             * The __dirname string is the path of the currently executing script (project's root folder).
             * The path.join API joins multiple path segments together that works across all platforms.
             */
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')

    // Open the DevTools.
    win.webContents.openDevTools()
}


/**
 * This method is called when Electron has finished initialization
 * and is ready to create browser windows.
 * Some APIs can be used only after this event occurs.
 * Open the browser window after the app module's ready event is fired.
 * This call opens a window that displays the webpage.
 */
app.whenReady().then( () => {
    createWindow()

    /**
     * On macOS: open a new window if all windows are closed and the app is initialized.
     */
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0 ) {
            createWindow()
        }
    })
})


/**
 * Quit the application after all windows are closed (Windows & Linux)
 */
app.on('window-all-closed', () => {
    if ( process.platform !== 'darwin') {
        app.quit()
    }
})

// Include the rest of the app's specific main process code here.
// You can also put them in separate files and require them here.