const { app, BrowserWindow } = require('electron')

let mainWindow

const createMainWindow = () => {
    mainWindow = new BrowserWindow({
        width: 500,
        height: 800,
    })

    mainWindow.loadFile('./app/index.html')
}

app.whenReady().then(() => {
    createMainWindow()
    
    app.on('window-all-closed', () => {
        if(process.platform !== 'darwin') app.quit()
    })
})