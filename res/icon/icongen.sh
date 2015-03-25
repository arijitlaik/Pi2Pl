mkdir android
convert icon.svg -resize 36x36 android/icon-36-ldpi.png
convert icon.svg -resize 48x48 android/icon-48-mdpi.png
convert icon.svg -resize 72x72 android/icon-72-hdpi.png
convert icon.svg -resize 96x96 android/icon-96-xhdpi.png
convert icon.svg -resize 144x144 android/icon-144-xxhdpi.png
convert icon.svg -resize 192x192 android/icon-192-xxxhdpi.png
mkdir windows-phone
convert icon.svg -resize 48x48 windows-phone/icon-48.png
convert icon.svg -resize 173x173 windows-phone/icon-173.png
