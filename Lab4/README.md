# Lab4: AKS Onuralp Mete

## Schritte
Nachfolgend werden die benötigten Schritte und Commands für Lab4 erläutert.

### 1. AKS (Azure Kubernetes Service) erstellen und konfigurieren

1. Installation der Azure CLI.
2. Erstellung eines AKS-Clusters mit `az aks create`.
3. Konfiguration von kubectl mit `az aks get-credentials`.
4. Überprüfung der Verbindung mit `kubectl get nodes`.

### 2. Konfiguration und Deployment von WordPress und MySQL

1. Erstellung der YAML-Dateien für WordPress- und MySQL-Deployments.
2. Anpassung der Konfigurationsdateien, insbesondere Hinzufügen von Umgebungsvariablen für Verbindungsdaten.
3. Deployment der Anwendungen mit `kubectl apply -f 'my-deployment-file.yaml`.

## Dateiübersicht

- `wordpress-deployment.yaml`: Konfigurationsdatei für das WordPress Deployment.
- `mysql-deployment.yaml`: Konfigurationsdatei für das MySQL Deployment.