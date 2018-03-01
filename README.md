# IBM Cloud Immersion

## Pre-requisites

0. node, npm, docker, cf cli
0. https://console.bluemix.net/docs/cloudnative/idt/index.html (as user)
0. https://kubernetes.io/docs/tasks/tools/install-kubectl/ (as root)
1. https://console.bluemix.net/docs/cli/reference/bluemix_cli/download_cli.html#download_install
2. https://www.ibm.com/support/knowledgecenter/en/SSBS6K_2.1.0/manage_cluster/install_cli.html
3. https://www.ibm.com/blogs/bluemix/2017/09/deploying-ibm-cloud-private-ibm-cloud-developer-tools-cli/

## Local

1. `npm install`
2. `npm start`

## Private

0. Update `Chart.yml` and `manifest.yml` with name of deployment
1. Configure `kubectl` from the Management Console
2. `docker login mycluster.icp:8500`
2. `idt deploy -t container --deploy-image-target mycluster.icp:8500/default/private-portal`

## Public

1. `cf login -a https://api.ng.bluemix.net -u amadeus@decoded.com -o DecodedUSA -s immersion`
2. Modify `YOURAPPNAME-HERE` in `manifest.yml`
3. `cf push`