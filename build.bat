@echo off

echo Cleaning build directories...
echo     src/js
cmd /c del /q "src\js\*.js"
echo     Done!

echo     dist/js
cmd /c del /q "dist\js\*.js"
cmd /c del /q "dist\js\*.js.map"
echo     Done!

echo     dist/css
cmd /c del /q "dist\css\*.css"
echo     Done!

echo Building all...

echo Running TailwindCSS
cmd /c tailwindcss -i ./src/css/input.css -o ./dist/css/output.css

echo Running TypeScript
cmd /c tsc -b -f
echo Done!

echo Running UglifyJS
cmd /c uglifyjs --compress --mangle -o dist/js/popup.js --source-map "content=inline" -- src/js/belltimes.js src/js/popup.js
cmd /c uglifyjs --compress --mangle -o dist/js/settings.js --source-map "content=inline" -- src/js/settings.js
cmd /c uglifyjs --compress --mangle -o dist/js/theme.js --source-map "content=inline" -- src/js/theme.js

echo All done!
