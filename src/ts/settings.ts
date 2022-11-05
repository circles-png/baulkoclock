const themeSwitch = document.getElementById("themeSwitch") as HTMLInputElement;

chrome.storage.sync.get("baulkoTheme", (items: { [baulkoTheme: string]: boolean }) => {
    themeSwitch.checked = items.baulkoTheme
})

themeSwitch.onchange = (event) => {
    let target = event.target as HTMLInputElement;
    chrome.storage.sync.set({ baulkoTheme: target.checked }, () => {
        console.log("Successfully written baulkoTheme: ${themeSwitch.checked}")
    })
}
