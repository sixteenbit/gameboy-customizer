# Gameboy Customizer

## Gameboy Customizer Requirements

Atomizer requires [Node.js](https://nodejs.org) v6.9.x or newer.

## Getting Started

### Download the project and install dependencies with npm

```bash
$ git clone https://github.com/sixteenbit/gameboy-customizer.git
$ cd gameboy-customizer
$ npm install
```

At this point, the project should be installed and fully running on your local machine.

## Working with this project

### Watching for Changes

```bash
$ npm run watch
```

- Watches for changes in the `assets/scss` directory. When a change is made the SCSS files are compiled, concatenated with Foundation files and saved to the `/styles` directory. Sourcemaps will be created.
- Watches for changes in the `assets/js/src` directory. When a change is made the JS files are compiled, concatenated with Foundation JS files and saved to the `/scripts` directory. Sourcemaps will be created.
- Watches for changes in the `assets/img` directory. When a change is made the image files are optimized and saved over the original image.

## Compile and Minify All Theme Assets

```bash
$ npm run build
```

Compiles and minifies all scripts and styles.

### Compile Specific Assets

- `$ npm run styles` - to compile all SCSS files in the `assets/scss` directory.
- `$ npm run scripts` - to compile all JS files in the `assets/js/src` directory.
- `$ npm run images` - to optimize all image files in the `assets/img` directory.

### Credits

- Forked from https://github.com/omariosouto/gameboy-css
- Background images from www.subtlepatterns.com

## To Do

* Dropdown options for colors
* Maybe do a color picker for each?
* Dropdown for themes such as Famicom and snes purple
