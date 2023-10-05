# Lab 1 Onuralp Mete

Enter the git repository through the commandline and go into the Lab1 directory.

Important: The azure CLI must be installed for this to work.

This guide also depends on a valid azure subscribtion and the azure account must also be authenticated in the azure CLI.


# Command for creating resource group and deployment

<pre>
az deployment group create --resource-group MyResourceGroup --template-file azuredeploy.json --parameters azuredeploy.parameters.json
</pre>
