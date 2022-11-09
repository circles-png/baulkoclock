const getThemeFromStorage = async (): Promise<boolean> => {
    let themes = [
        await chrome.storage.sync.get("baulkoTheme")
            .then((items: { [baulkoTheme: string]: boolean }): boolean => {
                let theme = items.baulkoTheme
                console.log(`Successfully read baulkoTheme for Chrome: ${theme}`)
                return theme
            }),
        await browser.storage.sync.get("baulkoTheme")
            .then((items: { [baulkoTheme: string]: browser.storage.StorageValue }): boolean => {
                let theme = items.baulkoTheme as boolean
                console.log(`Successfully read baulkoTheme for Firefox: ${theme}`)
                return theme
            }),
    ]
    if (!(themes.every((theme) => theme === themes[0]))) console.error("Themes in storage do not match!")
    return themes[0]
}

const updateTheme = (): void => {
    getThemeFromStorage()
        .then((dark) => {
            if (dark) document.body.parentElement?.classList.add("dark")
            else document.body.parentElement?.classList.remove("dark")
        })
        .then(() => {
            document.body.classList.add("transition-colors", "duration-300")
        })
}

updateTheme()
