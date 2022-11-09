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
cmd /c del /q "dist\css\output.min.css"
echo     Done!

echo     dist/pages
cmd /c del /q "dist\pages\*.html"
echo     Done!

echo Building all...

echo Building TailwindCSS
cmd /c tailwindcss -i ./src/css/input.css -o ./dist/css/output.min.css -m

echo Building TypeScript
cmd /c tsc -b -f
echo Done!

echo Building UglifyJS
cmd /c uglifyjs --compress --mangle -o dist/js/popup.js --source-map "content=inline" -- src/js/belltimes.js src/js/popup.js
cmd /c uglifyjs --compress --mangle -o dist/js/settings.js --source-map "content=inline" -- src/js/settings.js
cmd /c uglifyjs --compress --mangle -o dist/js/theme.js --source-map "content=inline" -- src/js/theme.js

echo Minifying HTML
cmd /c html-minifier --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype --minify-css true --minify-js true --input-dir .\src\pages\ --output-dir .\dist\pages\
echo Done!

echo web-ext building...
cmd /c web-ext build -o -i "*.code-workspace" "src/" "*.bat" "package-lock.json" "*.md" "tailwind.config.js" "tsconfig.*" "**/*.js.map"
echo All done!
