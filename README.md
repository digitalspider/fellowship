# Fellowship Baptist Church #

Church website: [fellowship.org.au](http://fellowship.org.au)

S3 bucket testing: [http://fellowship.org.au.s3-website-ap-southeast-2.amazonaws.com/]

Built with [react](https://reactjs.org/).

Deployed with [GitHub Actions](https://github.com/digitalspider/fellowship/actions)

Many thanks to Matthew Wilson for his original source code:
* [SaintfieldBaptistChurch source code](https://github.com/matthewwilson/SaintfieldBaptistChurch)
* [http://www.saintfieldbaptist.org.uk/](http://www.saintfieldbaptist.org.uk/)

## Installation
Install yarn. See https://classic.yarnpkg.com/en/docs/install#mac-stable
```
npm install --global yarn
```

Run the following for local installation
```
yarn install
yarn start
```

Run in production mode
```
yarn build
serve -s build
```

Go to http://localhost:3000 to test
