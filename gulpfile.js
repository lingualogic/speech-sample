const gulp = require('gulp');
const path = require('path');
const childProcess = require('child_process');
const shell = require('gulp-shell');
const runSequence = require('run-sequence');


// Verzeichnis-Konstanten

const rootDir = path.resolve(__dirname);
const credentialsDir = 'credentials';
const srcDir = 'src';
const appDir = 'app';
const testDir = 'e2e';
const distDir = 'dist';
const assetsDir = 'src/assets';
const buildDir = 'build';
const cordovaDir = 'cordova-app';
const cordovaRootDir = path.join(rootDir, cordovaDir);
const cordovaAppDir = path.join(rootDir, cordovaDir, 'app');
const cordovaWwwDir = path.join(rootDir, cordovaDir, 'app/www');
const electronDir = 'electron-app';
const electronAppDir = path.join( electronDir, 'app' );
const electronWwwDir = path.join( electronDir, 'www' );


const exec = (cmd, done) => {
	const proc = childProcess.exec(cmd, {maxBuffer: 1024 * 1000}, (error, stdout, stderr) => {
		if(error) {
			console.log(`${cmd} exited with code ${error.code}`);
			done(error);
			return;
		}

		done();
	});

	proc.stdout.pipe(process.stdout);
	proc.stderr.pipe(process.stderr);
};

const settings = {
	gulp,
	exec,
	rootDir,
	credentialsDir,
	distDir,
	srcDir,
	appDir,
	testDir,
	assetsDir,
	buildDir,
	cordovaDir,
	cordovaRootDir,
	cordovaAppDir,
	cordovaWwwDir,
	electronDir,
	electronAppDir,
	electronWwwDir,
};


// Gulp-Skripte

require('./gulp/gulp-install')(settings);
require('./gulp/gulp-cordova')(settings);
require('./gulp/gulp-electron')(settings);


// Gulp-Tasks


/**
 * Installiert Electron NPM-Package
 */

gulp.task('install-electron', shell.task('npm install --save-dev electron'));


/**
 * Installiert Cordova-NPM-Package
 */

gulp.task('install-cordova-npm', shell.task('npm install --save-dev cordova'));


/**
 * Erzeugt das oeffentliche Speech-Framework
 */

gulp.task('install-cordova', function(callback) {
	runSequence(
		'install-cordova-npm',
		'cordova-install',
		callback);
});
  