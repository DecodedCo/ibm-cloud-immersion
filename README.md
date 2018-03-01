# IBM Cloud Immersion

## Pre-requisites

1. node, npm, docker, cf cli
2. https://console.bluemix.net/docs/cloudnative/idt/index.html (as user)
3. https://www.ibm.com/blogs/bluemix/2017/09/deploying-ibm-cloud-private-ibm-cloud-developer-tools-cli/

## Local

1. `npm install`
2. `npm start`

## Private

0. Update `Chart.yml`, `cli-config.yml` with name of deployment
1. `bx dev deploy`

## Public

1. `cf login -a https://api.ng.bluemix.net -u amadeus@decoded.com -o DecodedUSA -s immersion`
2. Modify `YOURAPPNAME` in `manifest.yml`
3. `cf push`