"use strict";
const getThemeFromStorage = async () => {
    let themes = [
        await chrome.storage.sync.get("baulkoTheme")
            .then((items) => {
            let theme = items.baulkoTheme;
            console.log(`Successfully read baulkoTheme for Chrome: ${theme}`);
            return theme;
        }),
        await browser.storage.sync.get("baulkoTheme")
            .then((items) => {
            let theme = items.baulkoTheme;
            console.log(`Successfully read baulkoTheme for Firefox: ${theme}`);
            return theme;
        }),
    ];
    if (!(themes.every((theme) => theme === themes[0])))
        console.error("Themes in storage do not match!");
    return themes[0];
};
const updateTheme = () => {
    getThemeFromStorage()
        .then((dark) => {
        if (dark)
            document.body.parentElement?.classList.add("dark");
        else
            document.body.parentElement?.classList.remove("dark");
    })
        .then(() => {
        document.body.classList.add("transition-colors", "duration-300");
    });
};
updateTheme();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy90aGVtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxtQkFBbUIsR0FBRyxLQUFLLElBQXNCLEVBQUU7SUFDckQsSUFBSSxNQUFNLEdBQUc7UUFDVCxNQUFNLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7YUFDdkMsSUFBSSxDQUFDLENBQUMsS0FBeUMsRUFBVyxFQUFFO1lBQ3pELElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUE7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2Q0FBNkMsS0FBSyxFQUFFLENBQUMsQ0FBQTtZQUNqRSxPQUFPLEtBQUssQ0FBQTtRQUNoQixDQUFDLENBQUM7UUFDTixNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7YUFDeEMsSUFBSSxDQUFDLENBQUMsS0FBOEQsRUFBVyxFQUFFO1lBQzlFLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFzQixDQUFBO1lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsOENBQThDLEtBQUssRUFBRSxDQUFDLENBQUE7WUFDbEUsT0FBTyxLQUFLLENBQUE7UUFDaEIsQ0FBQyxDQUFDO0tBQ1QsQ0FBQTtJQUNELElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQTtJQUNyRyxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNwQixDQUFDLENBQUE7QUFFRCxNQUFNLFdBQVcsR0FBRyxHQUFTLEVBQUU7SUFDM0IsbUJBQW1CLEVBQUU7U0FDaEIsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDWCxJQUFJLElBQUk7WUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBOztZQUN2RCxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQzlELENBQUMsQ0FBQztTQUNELElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDUCxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsY0FBYyxDQUFDLENBQUE7SUFDcEUsQ0FBQyxDQUFDLENBQUE7QUFDVixDQUFDLENBQUE7QUFFRCxXQUFXLEVBQUUsQ0FBQSJ9