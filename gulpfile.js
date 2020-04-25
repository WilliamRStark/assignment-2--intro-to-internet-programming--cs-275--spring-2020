const { src, dest, series, watch } = require(`gulp`);
const del = require(`del`);
const sass = require(`gulp-sass`);
const babel = require(`gulp-babel`);
const htmlCompressor = require(`gulp-htmlmin`);
const htmlValidator = require(`gulp-html`);
const jsLinter = require(`gulp-eslint`);
const jsCompressor = require(`gulp-uglify`);
const imageCompressor = require(`gulp-imagemin`);
const cache = require(`gulp-cache`);
const browserSync = require(`browser-sync`);
const reload = browserSync.reload;
const cssLinter = require(`gulp-stylelint`);
const cleanCSS = require(`gulp-clean-css`);
//const babelCore = require(`babel-core`);
//const babelPresentEnv = require(`@babel/preset-env`);

let browserChoice = `default`;

async function safari () {
    browserChoice = `safari`;
}

async function firefox () {
    browserChoice = `firefox`;
}

async function chrome () {
    browserChoice = `google chrome`;
}

async function opera () {
    browserChoice = `opera`;
}

async function edge () {
    browserChoice = `microsoft-edge`;
}

async function allBrowsers () {
    browserChoice = [
        `safari`,
        `firefox`,
        `google chrome`,
        `opera`,
        `microsoft-edge`
    ];
}

let validateHTML = () => {
    return src([`html/*.html`,`html/**/*.html`])
        .pipe(htmlValidator());
};

let compressHTML = () => {
    return src([`html/*.html`,`html/**/*.html`])
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod/html`));
};

let lintCSS = () => {

    return src(`css/*.css`)
        .pipe(cssLinter({
            failAfterError: true,
            reporters: [
                {formatter: `verbose`, console: true}
            ]
        }));

};

