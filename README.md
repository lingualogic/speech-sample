# Speech-Sample

Das Speech-Sample ist eine Beispielanwendung in [Angular 6](https://angular.io/), die das [Speech-Angular](https://github.com/lingualogic/speech-angular) SDK nutzt, um die Webapp mit Sprachdiensten zu erweitern. Daraus entsteht ein sog. Voice User Infaces - VUI. Dieses ist beispielhaft implemeniert, kann allerdings beliebig geändert und erweitert werden, um so eigene VUI Szenarien zu entwicklen und zu testen.

## Voraussetzungen

Wir haben Speech-Sample auf Mac OS X 10.11, Mac OS X 10.13 getestet. Als Plattformen können eingesetzt werden:

- Mac OS X >= 10.11
- Windows >= 7
- aktuelles Linux (z.B. Ubuntu 18.04)

Als Browser sollte standardmäßig Chrome ab Version 65 genutzt werden. Wir empfehlen, Speech-Sample nur unter Chrome einzusetzen.

- Chrome >= 65 (dringend empfohlen)

Grundsätzlich ist Speech-Angular auch in Firefox, Opera, Safari und Edge nutzbar, allerdings hängt die Sprachausgabe unter diesen Browsern von der zugrunde liegenden Text-to-Speech Engine der jeweiligen Plattformen ab. Die Spracheingabe funktioniert ausschließlich in Chrome und mit Internetverbindung. 

- Firefox >= 60 (mit Einschränkungen, nur Sprachausgabe)
- Opera >= 55 (mit Einschränkungen, nur Sprachausgabe)
- Safari >= 11 (mit Einschränkungen, nur Sprachausgabe)
- Edge >= 42 (mit Einschränkungen, nur Sprachausgabe)

NodeJS muss installiert sein.

- NodeJS >= 8.9

Dieses Projekt wurde mit dem [Angular CLI](https://github.com/angular/angular-cli) generiert.
Bitte installieren, falls nicht vorhanden:

	$ npm install -g @angular/cli
	
## Installation

Zuerst muss das Speech-Sample Github-Repsitory unter [https://github.com/lingualogic/speech-sample](https://github.com/lingualogic/speech-sample) mit folgendem Befehl geklont werden:

    $ git clone https://github.com/lingualogic/speech-sample
    $ cd speech-sample

danach werden alle NPM-Pakete für Speech-Sample mit folgendem Befehl installiert:

    $ npm install


## Beispiel starten

Das Beispiel kann mit `npm start` oder mit dem Angular CLI Befehl `ng serve` gestartet werden.

	$ ng serve --open
	
Anschließend kann es in Chrome unter `http://localhost:4200/` geöffnet werden.

## Beispiel auf Android und iOS starten

Seit Speech-Angular 0.5.3 sind die Sprachdienste auch auf Android (>= 5.1) und iOS (>= 10) verfügbar. Hierzu wird Cordova genutzt. Eine Anleitung hierzu finden sich unter [cordova/README.md](./cordova/README.md).

## Beispiel erweitern

Sprachaus- und eingaben können einzeln erweitert werden.

Das beispielhafte VUI Szenario greift auf die Funktionalität des Show-Buttons zurück und erklärt mit Hilfe des Bots, wo sich die Hometaste bei einem Tablet befindet. Zur Entwicklung eines eigenen Szenarios können an dieser Stelle weitere Komponenten entwickelt und über Sprache steuerbar gemacht werden.

## Feedback und Fragen 

Für Feedback und Fragen steht das LinguaLogic Team zur Verfügung: 

Ansprechpartner: **Leo Füchsel** (leo@lingualogic.de)

## Lizenz

Speech-Sample wurde als Open Source unter der **MIT-Lizenz** veröffentlicht.
