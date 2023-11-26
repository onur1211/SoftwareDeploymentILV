# Lab3 Onuralp Mete
Diese Readme Datei dokumentiert die Aufgabe für Lab3 Teil1 und Teil2.

# Lab3 Teil 1
Vorraussetzungen:

Docker und Docker Compose müssen auf dem System installiert sein.

Dieses Verzeichnis enthält eine 'docker-compose.yml' Datei.

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


# Lab3 Teil 2
Dieses Verzeichnis enthält 2 Dockerfiles und eine Docker-Compose-Datei, um WordPress und MySQL in Docker-Containern bereitzustellen. Die Container sind auf Basis von Debian erstellt und ermöglichen die Persistenz von Daten über Volumes.

# Dateien:

Dockerfile.wordpress: Dockerfile für das WordPress-Image.
Dockerfile.mysql: Dockerfile für das MySQL-Image.
docker-compose.yml: Docker-Compose-Datei zum Starten und Verknüpfen der Container.
my.cnf: MySQL-Konfigurationsdatei.

# Docker-Images erstellen:

docker build -t wordpress_debian -f Dockerfile.wordpress
docker build -t mysql_debian -f Dockerfile.mysql

# Docker-Container starten:

docker-compose up -d
Dieser Befehl erstellt und startet die Docker-Container im Hintergrund.

# Zugriff auf WordPress:

http://localhost:8080 im Browser eingeben

# Ports:
WordPress ist auf http://localhost:8080 verfügbar.
MySQL ist auf Port 3306 verfügbar.