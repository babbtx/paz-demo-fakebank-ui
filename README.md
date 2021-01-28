# PingDataGovernance Banking Demo

This project is a simple web frontend for a broker or teller app that allows us to demonstrate
some of the capabilities of PingDataGovernance for dynamic authorization and data protection
within a bank platform.

## Demo

You will be accessing the app as though you are a broker, teller,
or financial advisor. Unseen to your audience, you will actually
login to the app using the credentials of the banking customer.

On the first tab you see the banking customer's accounts.
You can drill down to each account and see balances.
Within PingDataGovernance, you can demonstrate using policy
to deny access to specific accounts (for example, based on the
banking customer's authorized consent) and/or you can demonstrate
using policy to filter or mask data.

On the second tab you have a generic form to transfer money
between any two accounts, by number. Within PingDataGovernance,
you can demonstrate using policy logic to allow or deny transfers.
For example, you can use a hard arbitrary limit, you can
check whether the user's profile is complete, you can
compare the attempted transfer to a running average or recent
transfers, and so on.

## The Backend API

Please see https://github.com/babbtx/mock-simple-aspsp for the backend API.

## PingDirectory Consent and PingDataGovernance Policies

Please see https://gitlab.corp.pingidentity.com/davidbabbitt/pingdata-lab-docker/-/tree/demos/fakebank
for a Docker Compose environment that includes PingDirectory for consent 
storage and PingDataGovernance setup as reverse proxy to the backend API.

## Install, Configure, Run, Deploy

### Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Nvm](https://github.com/nvm-sh/nvm)
* [Yarn](https://yarnpkg.com/)

Get the prereqs (on a Mac):
* `brew install git nvm yarn`

### Running from Source

Get the source:
1. `git clone <repository-url>` this repository
1. `cd dg-demo-fakebank-ui`

Customize for your environment:
* Copy `.env-example` to `.env` and customize.

> _Note:_ The default values in `.env-example` point
directly to the backend API. This obviously needs to change
to route API calls through DG or an API Gateway for your demo.

Run:
1. `git pull` (if cloned previously)
1. `nvm use v10` (because this Ember app is kinda old)
1. `yarn`
1. `ember s`
1. `open http://localhost:4200`

### Compile and Deploy

Compile:
1. `git pull` (if cloned previously)
1. `nvm use v10` (because this Ember app is kinda old)
1. `yarn`
1. `ember build -e production`

Customize:
1. Copy `dist/assets/example.config.js` to `dist/assets/config.js` and customize.

Deploy to any webserver.

## Configure PingFederate

If you are using PingFederate as the OAuth server,
configure your environment as follows:

* OAuth client uses the `Implicit` grant type
* OAuth client ID in PingFederate matches `OAUTH2_CLIENT_ID` configured in `.env` or `dist/assets/config.js`
* The `OAUTH2_AUTHORIZATION_URL` configured in `.env` or `dist/assets/config.js` is your PingFederate authorization URL
* OAuth redirect URI is `http://localhost:4200/oauth-callback.html`
* Allowed scopes must include `accounts`
* The access token contains a `sub` attribute. This is required for the backend API.
* The access token contains an `email` attribute. This is required for PingDataGovernance to find
the "token owner" in PingDirectory. 

## Configure PingOne

If you are using PingOne as the OAuth server,
configure your environment as follows:

* OAuth client uses the `Implicit` grant type
* The `OAUTH2_CLIENT_ID` configured in `.env` or `dist/assets/config.js` matches your assigned Client ID in PingOne
* The `OAUTH2_AUTHORIZATION_URL` configured in `.env` or `dist/assets/config.js` is your PingOne tenant authorization URL
* OAuth redirect URI is `http://localhost:4200/oauth-callback.html`
* Allowed scopes must include `accounts`
* The access token contains a `sub` attribute. This is required for the backend API.
* The access token contains an `email` attribute. This is required for PingDataGovernance to find
  the "token owner" in PingDirectory.

## Building, Hacking

This is a standard EmberJS application (if a bit out of date.)
The following is boilderplate from Ember.

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
