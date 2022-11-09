"use strict";
const themeSwitch = document.getElementById("themeSwitch");
themeSwitch.onchange = (event) => {
    let target = event.target;
    if (isFirefox) {
        browser.storage.sync.set({ baulkoTheme: target.checked }).then(() => {
            console.log(`Successfully written baulkoTheme for Firefox: ${themeSwitch.checked}`);
        });
    }
    else {
        chrome.storage.sync.set({ baulkoTheme: target.checked }, () => {
            console.log(`Successfully written baulkoTheme for Chrome: ${themeSwitch.checked}`);
        });
    }
    updateTheme();
};
getThemeFromStorage().then(dark => themeSwitch.checked = dark);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQXFCLENBQUM7QUFFL0UsV0FBVyxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFO0lBQzdCLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUEwQixDQUFDO0lBQzlDLElBQUksU0FBUyxFQUFFO1FBQ1gsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpREFBaUQsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7UUFDdkYsQ0FBQyxDQUFDLENBQUE7S0FDTDtTQUFNO1FBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRSxHQUFHLEVBQUU7WUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7UUFDdEYsQ0FBQyxDQUFDLENBQUE7S0FDTDtJQUVELFdBQVcsRUFBRSxDQUFBO0FBQ2pCLENBQUMsQ0FBQTtBQUVELG1CQUFtQixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQSJ9