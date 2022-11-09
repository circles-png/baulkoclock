"use strict";
const themeSwitch = document.getElementById("themeSwitch");
themeSwitch.onchange = (event) => {
    let target = event.target;
    chrome.storage.sync.set({ baulkoTheme: target.checked }, () => {
        console.log(`Successfully written baulkoTheme for Chrome: ${themeSwitch.checked}`);
    });
    browser.storage.sync.set({ baulkoTheme: target.checked }).then(() => {
        console.log(`Successfully written baulkoTheme for Firefox: ${themeSwitch.checked}`);
    });
    updateTheme();
};
getThemeFromStorage().then(dark => themeSwitch.checked = dark);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQXFCLENBQUM7QUFFL0UsV0FBVyxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFO0lBQzdCLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUEwQixDQUFDO0lBQzlDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUUsR0FBRyxFQUFFO1FBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0RBQWdELFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO0lBQ3RGLENBQUMsQ0FBQyxDQUFBO0lBQ0YsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpREFBaUQsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7SUFDdkYsQ0FBQyxDQUFDLENBQUE7SUFFRixXQUFXLEVBQUUsQ0FBQTtBQUNqQixDQUFDLENBQUE7QUFFRCxtQkFBbUIsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUEifQ==