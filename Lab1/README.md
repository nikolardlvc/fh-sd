# Lab 1

azuredeploy.json contains the definition of how the resources look like. azuredeploy.parameteres.json contains the parameters for the resources.

To deploy the following arm template you need to install azure cli and start with `az login`, after successful login you need to create a ressource group with following command `az group create --name resourceGroupName --location "West Europe"`. After that you can simply deploy the arm template with following command.

```
az deployment group create \
  --name DeployLocalTemplate \
  --resource-group yourResourceGroupName \
  --template-file "pathToArmTemplateFile" \
  --parameters "pathToParametersFile" \
```
