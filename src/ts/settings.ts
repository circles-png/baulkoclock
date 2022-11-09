const themeSwitch = document.getElementById("themeSwitch") as HTMLInputElement;

themeSwitch.onchange = (event) => {
    let target = event.target as HTMLInputElement;
    if (isFirefox) {
        browser.storage.sync.set({ baulkoTheme: target.checked }).then(() => {
            console.log(`Successfully written baulkoTheme for Firefox: ${themeSwitch.checked}`)
        })
    } else {
        chrome.storage.sync.set({ baulkoTheme: target.checked }, () => {
            console.log(`Successfully written baulkoTheme for Chrome: ${themeSwitch.checked}`)
        })
    }

    updateTheme()
}

getThemeFromStorage().then(dark => themeSwitch.checked = dark)
