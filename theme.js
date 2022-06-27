function loadTheme() {
    chrome.storage.sync.get("baulkoTheme", (value) => {
        Array.from(document.getElementsByTagName("*")).forEach(element => {
            if (value.baulkoTheme == false) {
                element.className = element.className.replace("bg-dark", "bg-light")
                element.className = element.className.replace("text-light", "text-dark")
                if (element.tagName == "IMG") {
                    element.setAttribute("src", element.getAttribute("src").replace("light", "dark"))

                }
            }
            else if (value.baulkoTheme == true) {
                element.className = element.className.replace("bg-light", "bg-dark")
                element.className = element.className.replace("text-dark", "text-light")
                if (element.tagName == "IMG") {
                    element.setAttribute("src", element.getAttribute("src").replace("dark", "light"))
                }
            }
        });
    })
    setTimeout(loadTheme, 1)
}
loadTheme()