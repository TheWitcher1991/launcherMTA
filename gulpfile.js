'use strict'

const gulp         = require('gulp'),
      browserSync  = require('browser-sync'),
      path         = require('path')

const src = path.join(__dirname, './app/')

gulp.task('serve', () => {
    browserSync({
        server: {
            baseDir: src
        },
        notify: true
    })
})

gulp.task('default', gulp.parallel('serve'))