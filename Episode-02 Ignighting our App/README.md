# Steps to ignite App

- npm init
- npm install -D parcel (-D = dev dependancy)
- npx parcel index.html

# npx parcel index.html

- npx means executing a package
- here we are executing parcel

# Parcel

- Creates a Dev Build for you
- Creates a local server, host our app on local server
- Does HMR = Hot Module Replacement that is it automatically refreshes our app
- Uses File Watching Algorithm - written in C++ => Keeps an eye on all files, as anything changes it keeps a track
- Does Caching - Gives Faster Builds
- Does Image Optimization
- Does Minification of files => for production build
- Does Bundling => bundle all our files
- Compress files => so that size is small to ship smaller versions to production (removes white spaces)
- Uses Consistent Hashing
- Does Code Splitting - Split files
- Does Differential bundling - to support older browsers also - generates nomodule fallback for older browers
- Diagnostic
- Error Handling
- Provides HTTPs support also - can deploy your app on https too
- Does Tree Shaking - removes unused code
- Does Transpilation
- Build Different dev and produnction builds -> more optimization on prod build than dev build

# Browserslist

- In this we can mention the browser version that should be compatible with our app

# ^ and ~

- ^ installs the minor upgrade of package version
- ~ automatically upgrades to the major version of package

# package-lock.json

keeps the track of exact version that is being installed

# Transitive Dependency

As we install parcel as dependency, it comes with other dependencies as well like babel which has its own package.json
This is known as transitive dependency
