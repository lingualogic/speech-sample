const gulp = require('gulp');
const path = require('path');
const childProcess = require('child_process');

// Verzeichnis-Konstanten

const rootDir = path.resolve(__dirname);
const srcDir = 'src';
const appDir = 'app';
const testDir = 'e2e';
const distDir = 'dist';
const assetsDir = 'src/assets';
const buildDir = 'build';
const cordovaDir = 'cordova';
const cordovaRootDir = path.join(rootDir, cordovaDir);
const cordovaAppDir = path.join(rootDir, cordovaDir, 'app');
const cordovaWwwDir = path.join(rootDir, cordovaDir, 'app/www');
const electronDir = 'electron';
const electronWwwDir = 'electron/www';


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
  electronWwwDir,
};


// Gulp-Skripte

require('./gulp/gulp-install')(settings);
require('./gulp/gulp-cordova')(settings);
