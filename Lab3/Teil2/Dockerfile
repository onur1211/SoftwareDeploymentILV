# Verwende das offizielle Debian-Image als Basis
FROM debian:latest

# Setze Umgebungsvariablen für die MySQL-Datenbank
ENV MYSQL_ROOT_PASSWORD=root_password
ENV MYSQL_DATABASE=wordpress
ENV MYSQL_USER=wordpress_user
ENV MYSQL_PASSWORD=wordpress_password

# Installiere erforderliche Pakete (wie z.B. Apache, PHP, MySQL-Client)
RUN apt-get update && \
    apt-get install -y \
        apache2 \
        php \
        php-mysql \
        libapache2-mod-php \
        mysql-client \
        wget \
        && rm -rf /var/lib/apt/lists/*

# Herunterladen und Installieren von WordPress
RUN wget -P /var/www/html/ https://wordpress.org/latest.tar.gz && \
    tar -xzvf /var/www/html/latest.tar.gz -C /var/www/html/ --strip-components=1 && \
    rm /var/www/html/latest.tar.gz && \
    chown -R www-data:www-data /var/www/html/

# Apache-Modul aktivieren und neustarten
RUN a2enmod rewrite
RUN service apache2 restart

# Öffne den Port 80 für die Kommunikation nach außen
EXPOSE 80

# Starte Apache beim Ausführen des Containers
CMD ["apache2ctl", "-D", "FOREGROUND"]
