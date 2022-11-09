// @ts-ignore
const isFirefox = typeof InstallTrigger !== 'undefined';

const getThemeFromStorage = async (): Promise<boolean> => {
    return isFirefox
        ? await browser.storage.sync.get("baulkoTheme")
            .then((items: { [baulkoTheme: string]: browser.storage.StorageValue }): boolean => {
                let theme = items.baulkoTheme as boolean
                console.log(`Successfully read baulkoTheme for Firefox: ${theme}`)
                return theme
            })
        : await chrome.storage.sync.get("baulkoTheme")
            .then((items: { [baulkoTheme: string]: boolean }): boolean => {
                let theme = items.baulkoTheme
                console.log(`Successfully read baulkoTheme for Chrome: ${theme}`)
                return theme
            })

}

const updateTheme = (): void => {
    getThemeFromStorage()
        .then((dark) => {
            if (dark) document.body.parentElement?.classList.add("dark")
            else document.body.parentElement?.classList.remove("dark")
        })
}

updateTheme()
