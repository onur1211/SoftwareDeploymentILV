# Lab3 Onuralp Mete
Diese Readme Datei dokumentiert die Aufgabe für Lab3 Teil1 und Teil2.

# Teil 1
Vorraussetzung:
Docker und Docker Compose installieren:
Docker und Docker Compose müssen auf dem System installiert sein.

# Docker-Compose-Befehl ausführen:

Öffne ein Terminal, wechsle zum richtigen Verzeichnis, in dem sich das docker-compose.yml-Datei befindet, und führe den Befehl aus:

docker-compose up -d
-d steht für "detach" und führt die Container im Hintergrund aus ohne logging.

Die gestarteten Container können mit dem Befehl docker ps überprüfen werden:

docker ps

Dadurch sollten zwei Container angezeigt werden - einer für MySQL und einer für WordPress.

Zugriff auf WordPress:

Nachdem die Container gestartet wurden, kann man auf WordPress über http://localhost:8080 zugreifen.

Aufräumen:

Wenn die Anwendung beenden werden soll, dann gehe ins richtige Verzeichnis der docker-compose.yml-Datei und führe folgenden Befehl aus:

docker-compose down

Dies stoppt und entfernt die gestarteten Container, Netzwerke und Volumes gemäß der docker-compose.yml-Datei.


# Teil 2
...