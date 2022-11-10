set echo off

echo Cleaning build directories...
echo     src/js
rm -rf "src\js\*.js"
echo     Done!

echo     dist/js
rm -rf "dist\js\*.js"
rm -rf "dist\js\*.js.map"
echo     Done!

echo     dist/css
rm -rf "dist\css\output.min.css"
echo     Done!

echo     dist/pages
rm -rf "dist\pages\*.html"
echo     Done!

echo Building all...

echo Building TailwindCSS
npx tailwindcss -i ./src/css/input.css -o ./dist/css/output.min.css -m

echo Building TypeScript
npx tsc -b -f
echo Done!

echo Building UglifyJS
npx uglifyjs --compress --mangle -o dist/js/settings.js --source-map "content=inline" -- src/js/settings.js
npx uglifyjs --compress --mangle -o dist/js/theme.js --source-map "content=inline" -- src/js/theme.js
npx uglifyjs --compress --mangle -o dist/js/popup.js --source-map "content=inline" -- src/js/belltimes.js src/js/popup.js

echo Minifying HTML
npx html-minifier --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype --minify-css true --minify-js true --input-dir .\src\pages\ --output-dir .\dist\pages\
echo Done!

echo web-ext building...
npx web-ext build -o -i "*.code-workspace" "src/" "*.bat" "package-lock.json" "*.md" "tailwind.config.js" "tsconfig.*" "**/*.js.map"
echo All done!
