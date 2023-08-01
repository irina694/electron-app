# Sample Electron App

## Author: Irina Hallinan irinahallinan@gmail.com
### Date created: July 2023

#### Description 

This Hello World open-source computer app is from the quick start tutorial on the Electron [website](https://www.electronjs.org/docs/latest/tutorial/quick-start).


#### Installing prerequisites

Before running the app for the first time, install required dependencies. 
Run from the project root directory:
```angular2html
npm install
```

#### Running the app

To run the application on your computer, after installing dependencies:
```angular2html
npm start
```

This will launch a stand-alone computer application.

#### Packaging/distributing the app

To package the application manually (creates an app for the OS on which it is running):
```angular2html
npx electron-forge import
npm run make
```

This will create the `out` folder where the package is located.
The `out` folder is not added to GitHub.

#### GitHub publishing/releases

To publish a release of the application to the public GitHub repo, make sure you have a GITHUB_TOKEN variable temporarily or permanently in your environment. 

To add a token (created in the GitHub user developer settings), On MacOS run:
```angular2html
export GITHUB_TOKEN=...
```
where `...` is the actual token value, saved privately on your computer.

Then, run the publishing command:
```angular2html
npm run publish --auth_token=${GITHUB_TOKEN}
```
This command will run configured makers and publish the output distributables to a new GitHub release. By default, the release is in the draft stage and can manually be moved to production in the GitHub repo website via the Releases page.
