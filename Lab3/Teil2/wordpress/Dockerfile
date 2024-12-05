FROM debian:latest

RUN apt-get update && apt-get install -y \
    apache2 \
    php \
    php-mysql \
    wget \
    unzip
RUN rm -rf /var/lib/apt/lists/*

RUN rm /var/www/html/index.html

RUN wget https://wordpress.org/latest.tar.gz && \
    tar -xvzf latest.tar.gz && \
    rm latest.tar.gz && \
    mv wordpress/* /var/www/html && \
    chown -R www-data:www-data /var/www/html

# Configure Apache
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf && \
    a2enmod rewrite

# Expose port and start Apache
EXPOSE 80
CMD ["apachectl", "-D", "FOREGROUND"]