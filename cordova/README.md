# Speech-Sample auf iOS und Android

Hier wird die Speech-Sample App in Cordova für Android und iOS erzeugt.

## Voraussetzungen

Unter [docs/platform/Cordova.md](./../docs/platform/Cordova.md) wird die Installation von Cordova beschrieben.


## Installation

Für die Installation muss nicht in den Cordova-Ordner gewechselt werden.
Folgender Befehl installiert die Cordova-Plattformen für Browser und Android:

	$ npm run install:cordova

Möchte man iOS ebenfalls nutzen, wird noch dieser Befehl ausgeführt:

	$ npm run install:cordova:ios


## Beispiel starten

Zuerst muss die Speech-Sample App selbst erzeugt werden:

	$ ng build

Danach kann die Browser-Version testen:

	$ npm run cordova

Die **Android-Version** wird mit folgendem Befehl gestartet. Vorher sollte ein Android-Gerät an den Computer angeschlossen werden:

	$ npm run cordova:android


Die **iOS-Version** wird mit folgendem Befehl ausgeführt. Vorher sollte ein iOS-Gerät an den Computer angeschlossen werden:

	$ npm run cordova:ios

## Bekannte Fehler
Bei der iOS-Version tritt häufig ein Fehler wegen der Signatur auf:

	CordovaError: Promise rejected with non-error: 'Error code 65 for command: xcodebuild with args: -exportArchive,-archivePath,Speech-SampleApp.xcarchive,-exportOptionsPlist,/Users/leo/lingualogic/git/web/public/speech-sample/cordova/app/platforms/ios/exportOptions.plist,-exportPath,
			
Dieser  Fehler kann nur in **XCode** gelöst werden. Dazu wird folgende XCode-Projektdatei geöffnet:

	speech-sample/cordova/app/platforms/ios/Speech-SampleApp.xcodeproj

In `File | Project Setting` muss das `Build System` auf `Legacy Build System` gesetzt werden. Zudem muss ein gültiges `Team` angegeben werden.
