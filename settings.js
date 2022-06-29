var themeSwitch = document.getElementById("flexSwitchCheckChecked");

// load theme
chrome.storage.sync.get("baulkoTheme", (value) => {
    themeSwitch.checked = value.baulkoTheme
})

themeSwitch.onclick = () => {
    chrome.storage.sync.set({baulkoTheme: themeSwitch.checked}, () => {
        console.log(`Successfully written baulkoTheme: ${themeSwitch.checked}`)
    })
}

// var themeSwitch = document.getElementById("flexSwitchCheckChecked");

// // load theme
// chrome.storage.sync.get("baulkoTheme", (value) => {
//     themeSwitch.checked = value.baulkoTheme
// })

// themeSwitch.onclick = () => {
//     chrome.storage.sync.set({baulkoTheme: themeSwitch.checked}, () => {
//         console.log(`Successfully written baulkoTheme: ${themeSwitch.checked}`)
//     })
// }