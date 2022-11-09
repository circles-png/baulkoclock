"use strict";
const isFirefox = typeof InstallTrigger !== 'undefined';
const getThemeFromStorage = async () => {
    return isFirefox
        ? await browser.storage.sync.get("baulkoTheme")
            .then((items) => {
            let theme = items.baulkoTheme;
            console.log(`Successfully read baulkoTheme for Firefox: ${theme}`);
            return theme;
        })
        : await chrome.storage.sync.get("baulkoTheme")
            .then((items) => {
            let theme = items.baulkoTheme;
            console.log(`Successfully read baulkoTheme for Chrome: ${theme}`);
            return theme;
        });
};
const updateTheme = () => {
    getThemeFromStorage()
        .then((dark) => {
        if (dark)
            document.body.parentElement?.classList.add("dark");
        else
            document.body.parentElement?.classList.remove("dark");
    });
};
updateTheme();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy90aGVtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsTUFBTSxTQUFTLEdBQUcsT0FBTyxjQUFjLEtBQUssV0FBVyxDQUFDO0FBRXhELE1BQU0sbUJBQW1CLEdBQUcsS0FBSyxJQUFzQixFQUFFO0lBQ3JELE9BQU8sU0FBUztRQUNaLENBQUMsQ0FBQyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7YUFDMUMsSUFBSSxDQUFDLENBQUMsS0FBOEQsRUFBVyxFQUFFO1lBQzlFLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFzQixDQUFBO1lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsOENBQThDLEtBQUssRUFBRSxDQUFDLENBQUE7WUFDbEUsT0FBTyxLQUFLLENBQUE7UUFDaEIsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDLE1BQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQzthQUN6QyxJQUFJLENBQUMsQ0FBQyxLQUF5QyxFQUFXLEVBQUU7WUFDekQsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQTtZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLDZDQUE2QyxLQUFLLEVBQUUsQ0FBQyxDQUFBO1lBQ2pFLE9BQU8sS0FBSyxDQUFBO1FBQ2hCLENBQUMsQ0FBQyxDQUFBO0FBRWQsQ0FBQyxDQUFBO0FBRUQsTUFBTSxXQUFXLEdBQUcsR0FBUyxFQUFFO0lBQzNCLG1CQUFtQixFQUFFO1NBQ2hCLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ1gsSUFBSSxJQUFJO1lBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTs7WUFDdkQsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUM5RCxDQUFDLENBQUMsQ0FBQTtBQUNWLENBQUMsQ0FBQTtBQUVELFdBQVcsRUFBRSxDQUFBIn0=