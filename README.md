[![CircleCI](https://circleci.com/gh/BrunoAzzi/vulcan-challenge.svg?style=svg)](https://circleci.com/gh/BrunoAzzi/vulcan-challenge)
[![Code Climate](https://codeclimate.com/github/BrunoAzzi/vulcan-challenge/badges/gpa.svg)](https://codeclimate.com/github/BrunoAzzi/vulcan-challenge)
[![Test Coverage](https://codeclimate.com/github/BrunoAzzi/vulcan-challenge/badges/coverage.svg)](https://codeclimate.com/github/BrunoAzzi/vulcan-challenge/coverage)

# Vulcan Challenge

This project is runnig in [Github Pages](https://brunoazzi.github.io/vulcan-challenge-static).

On moment I'm focused in Angular2 Apps and working in a "kind" of consulting job in SENAI, so i didn't have much time to work in this app, and, because of the specific demand to delivery the code in javascript I was afraid that a Typescript application using Angular2 wouldn't be accepted, in fact in a final stage they become the same thing, but "prevention is better than a cure". With this in mind, i apologize in advance for some awfull parts of this code, and, the lack of a lot of tests, i focused in getting things done considering time and scope. But I hope that this can show a piece of my experience until now.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:5000/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

Ordinarily I use Heroku in integration with Travis, CircleCI or Codeship to deploy my apps, but in the last days a discution about the need of Node.js server configuration to deploy front-end application took place, the main argument is the lost of productivity and extensive unnecessary configuration for the purpose to deploy a front-end application. So, for the sake of simplicity, new experiences, and unusual problems that I'm having with Heroku I choosed deploy this one challenge in Github Pages, I hope, for the best. But if you guys want that i deploy in Heroku, there is no problem.

## Running unit tests

Run `npm test` to run all tests.

Run `grunt test:unit` to execute the unit tests via [Karma](https://karma-runner.github.io), unfortunately there are only a few tests because of my limited time, so i choose to focus on the tests around the algorithm.

Run `grunt test:coverage` to execute the code coverage relatory via [Karma](https://karma-runner.github.io), this is not properly working right know, because a configuration incompatibility with browserify and karma, but the hook between the CI and the [Code Climate](https://codeclimate.com/github/BrunoAzzi/vulcan-challenge) it is valid.
