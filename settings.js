var themeSwitch = document.getElementById("flexSwitchCheckChecked");

// Load theme
chrome.storage.sync.get("baulkoTheme", (value) => {
    themeSwitch.checked = value.baulkoTheme
})

themeSwitch.onclick = () => {
    chrome.storage.sync.set({baulkoTheme: themeSwitch.checked}, () => {
        console.log("Successfully written baulkoTheme: ${themeSwitch.checked}")
    })
}

// var themeSwitch2 = document.getElementById("flexSwitchCheckUnchecked");

// // Load notification setting
// chrome.storage.sync.get("baulkoNotification", (value) => {
//     themeSwitch2.checked = value.baulkoNotification
// })

// themeSwitch2.onclick = () => {
//     chrome.storage.sync.set({baulkoNotification: themeSwitch2.checked}, () => {
//         console.log("Successfully written baulkoNotification: ${themeSwitch2.checked}")
//     })
// }