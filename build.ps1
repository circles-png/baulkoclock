tailwindcss -i ./src/css/input.css -o ./dist/css/output.css
tsc -p ./tsconfig.json
uglifyjs --compress --mangle -o dist/js/popup.js --source-map "content=inline" -- src/js/belltimes.js src/js/popup.js
uglifyjs --compress --mangle -o dist/js/settings.js --source-map "content=inline" -- src/js/settings.js
