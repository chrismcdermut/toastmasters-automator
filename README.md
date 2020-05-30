# toastmasters-automator
Automate toastmasters meetings

## Environment Setup

You need node and npm on your machine
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install `toastmasters-automator`'s dependencies.

```node
npm install
```

Set up [clasp](https://github.com/google/clasp/) on your machine via npm install, then attach your google account via `clasp login`

## Usage

If you make changes to the code and want to test them out you can push to the toastmasters sheets by pushing
but you should always finish off by resetting the google app scripts to the `master` branch by bring down `master` from github and pushing to GAS(Google App Script)

```node
clasp push
```

To lint your changes you can run command `npm run pretest -- --fix`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
