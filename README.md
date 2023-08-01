# Sample Electron App

## Author: Irina Hallinan irinahallinan@gmail.com
### Date created: July 2023

This Hello World open-source computer app is from the quick start tutorial on the Electron [website](https://www.electronjs.org/docs/latest/tutorial/quick-start).

To install dependencies, from the project root directory:
```angular2html
npm install
```

To run the application on your computer, after installing dependencies,
```angular2html
npm start
```

To package the application the first time:
```angular2html
npx electron-forge import
npm run make
```

This will create the `out` folder where the package is located.
The `out` folder is not added to GitHub.

To publish an update to the application:
```angular2html
npm run publish
```
This command will run configured makers and publish the output distributables to a new GitHub release.
