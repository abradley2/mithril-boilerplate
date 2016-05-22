# Mithril Data

Put on your robe and wizard hat, then stream some data.

### Installation

Requires Node 0.12.x or higher, or Node 4.0.0 or higher. 
For node 0.12.x run with the --harmony flag as this application
requires the generators feature.

1. Download a shallow copy of this repository
2. Do an `npm install` in the root
3. `npm run test` and ensure everything passes
4. Configure your `local.json` file in the root so it points ot the port you wish to deploy on and a valid mongo instance.
5. Finally, `npm run deploy-production` and you will be running your own instance of Mithril data.


### local.json configuration

You must create a local.json file in the root of this directory to deploy the app.
It required the following details

```
{
	"port": 1337,
	"mongoURI": "mongodb://yourMongoDBvalidURIhere"
}
```