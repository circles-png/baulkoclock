const themeSwitch = document.getElementById("themeSwitch") as HTMLInputElement;

themeSwitch.onchange = (event) => {
    let target = event.target as HTMLInputElement;
    chrome.storage.sync.set({ baulkoTheme: target.checked }, () => {
        console.log(`Successfully written baulkoTheme for Chrome: ${themeSwitch.checked}`)
    })
    browser.storage.sync.set({ baulkoTheme: target.checked }).then(() => {
        console.log(`Successfully written baulkoTheme for Firefox: ${themeSwitch.checked}`)
    })

    updateTheme()
}

getThemeFromStorage().then(dark => themeSwitch.checked = dark)
