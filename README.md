# Sample Electron App

## Author: Irina Hallinan irinahallinan@gmail.com
### Date created: July 2023

#### Description 

This Hello World open-source computer app is from the quick start tutorial on the Electron [website](https://www.electronjs.org/docs/latest/tutorial/quick-start). 


#### Installing prerequisites

Before running the app for the first time, install required dependencies. The app is built using [node.js](https://nodejs.org/en) version 18 and [npm](https://www.npmjs.com/) version 9.

Run from the project root directory (assumes node.js and npm are installed):
```angular2html
npm install
```
This will install all app prerequisites.

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

This will create the `out` folder where the package is located. The package will be for the operating system (OS) that the command is run from.
The `out` folder is not added to GitHub.

#### GitHub publishing/releases

To publish a release of the application to the public GitHub repo, make sure you have a GITHUB_TOKEN variable temporarily or permanently stored in your environment. 

First, create the GitHub token in the GitHub user Developer Settings webpage, as Personal access token (classic) with the `public_repo` scope.

Second, add the token to the current terminal session. On MacOS run:
```angular2html
export GITHUB_TOKEN=...
```
where `...` is the actual token value, saved privately on your computer or the `.env` file (not on GitHub) after token is created.

Finally, run the publishing command:
```angular2html
npm run publish --auth_token=${GITHUB_TOKEN}
```

This command will run configured makers and publish the output distributables to a new GitHub release. By default, the release is in the draft stage and can manually be moved to production in the GitHub repo website via the Releases page.

By default, this will only publish a single distributable for your host operating system and architecture. You can publish for different architectures by passing in the `--arch` flag to your Forge commands.

