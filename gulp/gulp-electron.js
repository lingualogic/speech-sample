/**
 * Gulp-Datei zur Erzeugung der Electron-Version der Sample-App
 */


const del = require('del');
const path = require('path');
const inject = require('gulp-inject-string');
const shell = require('gulp-shell');
const runSquence = require('run-sequence');


// Electron spezifisch


var packager = require('electron-packager');
// var electronPackage = require('electron/package.json');
// var globalPkg = require('./../package.json');
var localPkg = require('./../electron-app/package.json');


module.exports = ({ gulp, exec, srcDir, distDir, electronDir, electronAppDir, electronWwwDir }) => {


    // pull the electron version from the package.json file
    // var electronVersion = electronPackage.version;

    var opts = {
        name: localPkg.productName,
        // platform: 'darwin',
        // arch: 'x64',                             // ia32, x64 or all
        dir: `./${electronDir}`,                      // source location of app
        out: `./${electronAppDir}`,                 // destination location for app os/native binaries
        // ignore: config.electronignore,           // don't include these directories in the electron app build
        // icon: config.icon,
        // asar: {unpackDir: config.electroncompiled}, // compress project/modules into an asar blob but don't use asar to pack the native compiled modules
        overwrite: true,
        prune: true,
        // electronVersion: electronVersion ,       // Tell the packager what version of electron to build with
        // appCopyright: pkg.copyright,            // copyright info
        appVersion: localPkg.version,         // The version of the application we are building
        win32metadata: {                        // Windows Only config data
            CompanyName: localPkg.authors,
            ProductName: localPkg.productName,
            FileDescription: localPkg.description,
            OriginalFilename: localPkg.productName + '.exe'
        }
    };


    gulp.task('electron-prepare', () => {
        return del([
            electronWwwDir,
            electronAppDir
        ]);
    });


    gulp.task('electron-switch-zone-mix', (done) => {
        gulp.src(`${srcDir}/polyfills.ts`)
        .pipe(inject.replace("import 'zone.js/dist/zone';", "import 'zone.js/dist/zone-mix';"))
        .pipe(gulp.dest( srcDir ))
        .on('end', done);
    });


    gulp.task('electron-switch-zone', (done) => {
        gulp.src(`${srcDir}/polyfills.ts`)
        .pipe(inject.replace("import 'zone.js/dist/zone-mix';", "import 'zone.js/dist/zone';"))
        .pipe(gulp.dest( srcDir ))
        .on('end', done);
    });


    gulp.task('electron-ng-build', shell.task('ng build --base-href ./'));


    gulp.task('electron-copy-dist', () => {
        return gulp.src(path.join(distDir, '**', '*'))
        .pipe(gulp.dest(electronWwwDir));
    });


    gulp.task('electron-remove-absolute-assets', (done) => {
        gulp.src(path.join(electronWwwDir, '**', '*.js'))
        .pipe(inject.replace('/assets/', 'assets/'))
        .pipe(gulp.dest(electronWwwDir))
        .on('end', done);
    });


    gulp.task('electron-mkdir-app', (done) => {
        exec(`mkdir ${electronAppDir}`, done);
    });


    // Build the electron app

    gulp.task('electron-build-app', function (done) {
    
        console.log('Launching task to package binaries for ' + opts.name + ' v' + opts['appVersion']);
    
        packager(opts, function (err, appPath) {
            console.log(' <- packagerDone() ' + err + ' ' + appPath);
            console.log(' all done!');
            done();
        });
    });


    gulp.task('electron-run-app', (done) => {
        exec(`electron ${electronDir}`, done);
    });


    gulp.task('electron-build', (done) => {
        runSquence(
            'electron-prepare',
            'electron-switch-zone-mix',
            'electron-ng-build',
            'electron-switch-zone',
            'electron-copy-dist',
            'electron-remove-absolute-assets',
            'electron-mkdir-app',
            'electron-build-app',
            (err) => {
                if(err) {
                console.log('failed to build dist to cordova project');
                done(err);
                return;
                }
                console.log('DONE!');
                done();
            }
        )
    });


    gulp.task('electron-run', (done) => {
        runSquence(
            'electron-build',
            'electron-run-app',
            (err) => {
                if(err) {
                console.log('failed to build dist to cordova project');
                done(err);
                return;
                }
                console.log('DONE!');
                done();
            }
        )
    });

};
