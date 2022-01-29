# PingAuthorize Banking Demo

This project is a simple web frontend for a bank that allows us to demonstrate
some of the capabilities of PingAuthorize for dynamic entitlement, dynamic authorization,
and data protection within a bank platform.

## Demo

You will login to the app using the credentials of the banking customer.

In most demos will pretend as through you are a broker, teller,
or financial advisor. Unseen to your audience, you will login to the app
as the banking customer before starting your demo. This side-steps a whole
conversation about delegated authorization.

On the first tab you see the banking customer's accounts.
This tab works well for the delegated access scenario.
You can drill down to each account and see balances.
Within PingAuthorize, you can demonstrate using policy
to deny access to specific accounts (for example, based on the
banking customer's authorized consent) and/or you can demonstrate
using policy to filter or mask data.

On the second tab you have a generic form to transfer money
between any two accounts, by number. This tab works well
for either self-service or delegated access. 
Within PingAuthorize, you can demonstrate using
policy logic to allow or deny transfers.
For example, you can use a hard arbitrary limit, you can
check whether the user's profile is complete, you can check
risk scores, you can compare the attempted transfer
to a running average or recent transfers, and so on.

On the third tab you have a simple view of offers.
This tab works well for self-service. Within PingAuthorize,
you can demonstrate policy that shows offers based on
entitlement, account balances, transaction history, and so on.

Additionally, you can demonstrate showing and hiding tabs based
on the permissions returned from the bank API after login.

## The Bank API

Please see https://github.com/babbtx/mock-simple-aspsp for the Bank API.

## PingDirectory Consent and PingAuthorize Policies

Please see https://gitlab.corp.pingidentity.com/davidbabbitt/pingdata-lab-docker/-/tree/demos/fakebank
for a Docker Compose environment that includes PingDirectory for consent 
storage and PingAuthorize setup as reverse proxy to the backend API.

## Compile, Configure, Run

This section describes how to run the compiled single-page app in an NGINX container.

### Build

Build the Docker image with the compiled app within. This takes a couple of minutes:

```
docker build -t fakebank-ui -f Dockerfile-nginx .
```

### Run

To run the compiled app using the default configuration:

```
docker run --rm --name fakebank-ui -p :8443:443 fakebank-ui
open https://localhost:8443
```

### Configure for PingOne

To use your own PingOne environment and/or your own deployment of the Bank API,
configure your PingOne environment as follows:

* OAuth client uses the `Implicit` grant type
* OAuth redirect URI is `https://localhost:8443/oauth-callback.html` (or whatever port mapping you choose when you run it)
* Allowed scopes must include `accounts`
* The access token contains a `sub` attribute. This is required for the backend API.
* The access token contains an `email` attribute. This is required for the PingAuthorize demos to find the "token owner" in PingDirectory. 

Run the Docker container using the following environment variables:

* `OAUTH2_CLIENT_ID` matches your assigned Client ID in PingOne
* `OAUTH2_AUTHORIZATION_URL` is your PingOne tenant authorization URL
* `OPEN_BANKING_BASE_URL` is the base URL of the Bank API. The default is `https://bank-api.dev`. You would change this if you deployed your own copy of the Bank API or if you are proxying the Bank API through another API Gateway or PingAuthorize.
* `OPEN_BANKING_API_NAMESPACE` is the OpenBanking API path, relative to the base URL. The default is `OpenBanking/v2`. You might change this is you are proxying the Bank API through another API Gateway or PingAuthorize.

For example, to run against your own deployed Bank API:

```
docker run --rm --name fakebank-ui -p :8443:443 -e OPEN_BANKING_BASE_URL=https://your.herokuapp.com fakebank-ui 
open https://localhost:8443
```

## Develop and Deploy

This section describes how to develop and deploy this EmberJS app.

### Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Nvm](https://github.com/nvm-sh/nvm)
* [Yarn](https://yarnpkg.com/)

Get the prereqs (on a Mac):
* `brew install git nvm yarn`

### Running from Source

Customize for your environment:
* Copy `.env-example` to `.env` and customize.

> _Note:_ The default values in `.env-example` point
directly to the backend API. This obviously needs to change
to route API calls through PingAuthorize or an API Gateway for your demo.

Run:
1. `git pull` (make sure you're up to date)
1. `nvm use v10` (because this Ember app is kinda old)
1. `yarn`
1. `npm start`
1. `open http://localhost:4200`

### Compile and Deploy

Compile:
1. `git pull` (make sure you're up to date)
1. `nvm use v10` (because this Ember app is kinda old)
1. `yarn`
1. `ember build -e production`

Customize for your environment:
1. Copy `dist/assets/example.config.js` to `dist/assets/config.js` and customize.

Deploy the contents of `dist` to any webserver.

### Configure PingFederate

If you are using PingFederate as the OAuth server,
configure your environment as follows:

* OAuth client uses the `Implicit` grant type
* OAuth client ID in PingFederate matches `OAUTH2_CLIENT_ID` configured in `.env`
* The `OAUTH2_AUTHORIZATION_URL` configured in `.env` is your PingFederate authorization URL
* OAuth redirect URI is `http://localhost:4200/oauth-callback.html`
* Allowed scopes must include `accounts`
* The access token contains a `sub` attribute. This is required for the backend API.
* The access token contains an `email` attribute. This is required for the PingAuthorize demos to find the "token owner" in PingDirectory. 

For production:
* The environment variables are configured in `dist/assets/config.js`
* The OAuth redirect URI should match your webserver


### Configure PingOne

If you are using PingOne as the OAuth server,
configure your environment as follows:

* OAuth client uses the `Implicit` grant type
* The `OAUTH2_CLIENT_ID` in `.env` matches your assigned Client ID in PingOne
* The `OAUTH2_AUTHORIZATION_URL` in `.env` is your PingOne tenant authorization URL
* OAuth redirect URI is `http://localhost:4200/oauth-callback.html`
* Allowed scopes must include `accounts`
* The access token contains a `sub` attribute. This is required for the backend API.
* The access token contains an `email` attribute. This is required for the PingAuthorize demos to find the "token owner" in PingDirectory. 

For production:
* The environment variables are configured in `dist/assets/config.js`
* The OAuth redirect URI should match your webserver

### Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
