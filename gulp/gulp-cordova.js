/**
 * Gulp-Datei zur Erzeugung der Cordova-Version der Speech-SampleApp
 */


const rimraf = require('rimraf');
const path = require('path');
const inject = require('gulp-inject-string');
const runSequence = require('gulp4-run-sequence');


module.exports = ({ gulp, exec, distDir, appDir, cordovaRootDir, cordovaAppDir, cordovaWwwDir }) => {


    gulp.task('cordova-create-app', (done) => {
        exec(`cd ${cordovaRootDir} && cordova create ${appDir}`, done);
    });


    gulp.task('cordova-copy-original', () => {
        return gulp.src([
            `${cordovaRootDir}/config.xml`,
            `${cordovaRootDir}/package.json`,
        ])
            .pipe(gulp.dest( cordovaAppDir ));
    });


    gulp.task('cordova-install-browser', (done) => {
        exec(`cd ${cordovaAppDir} && cordova platform add browser`, done);
    });


    gulp.task('cordova-install-android', (done) => {
        exec(`cd ${cordovaAppDir} && cordova platform add android`, done);
    });

    gulp.task('cordova-install-ios', (done) => {
        exec(`cd ${cordovaAppDir} && cordova platform add ios`, done);
    });

    gulp.task('cordova-install-speechsynthesis', (done) => {
        exec(`cd ${cordovaAppDir} && cordova plugin add https://github.com/macdonst/SpeechSynthesisPlugin`, done);
    });

    gulp.task('cordova-install-speechrecognition', (done) => {
      exec(`cd ${cordovaAppDir} && cordova plugin add https://github.com/macdonst/SpeechRecognitionPlugin`, done);
    });

    gulp.task('cordova-install', (done) => {
        runSequence(
            'cordova-create-app',
            'cordova-copy-original',
            // auf allen Plattformen verfuegbar
            'cordova-install-browser',
            'cordova-install-android',
            // nur auf Mac-Rechner verfuegbar, wird separat installiert
            // 'cordova-install-ios',
            'cordova-install-speechsynthesis',
            'cordova-install-speechrecognition',
            (err) => {
                if(err) {
                    // eslint-disable-next-line
                    console.log('failed to install to cordova project');
                    done(err);
                    return;
                }
                // eslint-disable-next-line
                console.log('DONE!');
                done();
            }
        );
    });


    gulp.task('cordova-prepare', (done) => {
        rimraf( cordovaWwwDir, done );
    });

    gulp.task('cordova-copy-dist', () => {
        return gulp.src( `${distDir}/**/*`)
            .pipe( gulp.dest( cordovaWwwDir ));
    });

    gulp.task('cordova-replace-href', (done) => {
      gulp.src(path.join( cordovaWwwDir, 'index.html' ))
          .pipe(inject.replace('<base href="/">', '<base href="./">'))
          .pipe(gulp.dest( cordovaWwwDir ))
          .on( 'end', done );
  });

    gulp.task('cordova-replace-cordova', (done) => {
        gulp.src(path.join( cordovaWwwDir, 'index.html' ))
            .pipe(inject.replace('<!-- CORDOVA JS -->', '<script type="text/javascript" src="cordova.js"></script>'))
            .pipe(gulp.dest( cordovaWwwDir ))
            .on( 'end', done );
    });

    gulp.task('cordova-remove-absolute-assets', (done) => {
        gulp.src(path.join( cordovaWwwDir, '**', '*.js' ))
            .pipe(inject.replace( '/assets/', 'assets/' ))
            .pipe(gulp.dest( cordovaWwwDir ))
            .on( 'end', done );
    });


    gulp.task('cordova-generate', (done) => {
        runSequence(
            'cordova-prepare',
            'cordova-copy-dist',
            'cordova-replace-href',
            'cordova-replace-cordova',
            'cordova-remove-absolute-assets',
            (err) => {
                if(err) {
                    // eslint-disable-next-line
                    console.log('failed to build dist to cordova project');
                    done(err);
                    return;
                }
                // eslint-disable-next-line
                console.log('DONE!');
                done();
            }
        );
    });


    // Cordova-App ausfuehren

    gulp.task('cordova-run-browser', (done) => {
        exec(`cd ${cordovaAppDir} && cordova run browser --debug`, done);
    });

    gulp.task('cordova-run-android', (done) => {
        exec(`cd ${cordovaAppDir} && cordova run android --debug`, done);
    });

    gulp.task('cordova-run-ios', (done) => {
        exec(`cd ${cordovaAppDir} && cordova run ios --debug`, done);
    });


    gulp.task('cordova-browser', (done) => {
        runSequence(
            'cordova-generate',
            'cordova-run-browser',
            (err) => {
                if(err) {
                    // eslint-disable-next-line
                    console.log('failed to build dist to cordova project');
                    done(err);
                    return;
                }
                // eslint-disable-next-line
                console.log('DONE!');
                done();
            }
        );
    });

    gulp.task('cordova-android', (done) => {
        runSequence(
            'cordova-generate',
            'cordova-run-android',
            (err) => {
                if(err) {
                    // eslint-disable-next-line
                    console.log('failed to build dist to cordova project');
                    done(err);
                    return;
                }
                // eslint-disable-next-line
                console.log('DONE!');
                done();
            }
        );
    });

    gulp.task('cordova-ios', (done) => {
        runSequence(
            'cordova-generate',
            'cordova-run-ios',
            (err) => {
                if(err) {
                    // eslint-disable-next-line
                    console.log('failed to build dist to cordova project');
                    done(err);
                    return;
                }
                // eslint-disable-next-line
                console.log('DONE!');
                done();
            }
        );
    });

};
