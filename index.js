const os = require('os')

//Begin of application
setInterval(() => {
    //Clear the console
    console.clear()

    //Take functions of 'os' object
    const { freemem, totalmem } = os


    //Variable that appears in console table
    const status = {
        total: parseInt(totalmem() / 1024 / 1024) + 'MB', //convert from byte to megabite and add "MB"
        free: parseInt(freemem() / 1024 / 1024) + 'MB',
        usage: ((freemem() / totalmem()) * 100).toFixed(2) + '%'
    }

    console.table(status)


}, 1000)
