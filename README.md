# Messing with Webpack

This is a light django project to test out how to use Webpack with various technologies(angularjs, less, laravel-mix, etc).

## Requirements

List of system requirements in order to run this application.

1. python3 runtime, prefereably the one used in .python-version, and optionally with [pyenv](https://github.com/pyenv/pyenv).
1. [pipenv](https://pipenv.pypa.io/en/latest/)
1. nodejs, prefereably latest LTS (12.16.2 at time of publish) and with [NVM](https://github.com/nvm-sh/nvm).
1. [yarn](https://yarnpkg.com/)

## Setup

Follow the step below to get up and running.

1. Install python dependecies with `pipenv install`.
1. Install nodejs dependencies with `cd frontend && yarn`.
1. Run the django dev server locally `django runserver`.
1. In another terminal run laravel-mix/webpack with `yarn start`.
1. Open up browser at `localhost:3000`.
1. Make changes to frontend to see browser reloading.

**See the README in frontend for more info on what's powering the development process.**

## License

MIT

## Auther Information

Mauro Oviedo (aka moviedo)
