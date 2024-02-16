# Portfolio-Universound

DataBase:
id: universound
mp: universoundHolberton

process install phpmyadmin :
sudo apt update
sudo apt install phpmyadmin apache2 php-zip php-gd php-json php-curl libapache2-mod-php
select apache2
select yes
http://localhost/phpmyadmin

if dont connect :
sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin
sudo service apache2 restart

install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

nvm install 16 pour install node 16
nvm use 16

Node 16 pour install Sequelize :

npm install sequelize mysql2


Pour utiliser les connect DB en .env
npm install dotenv

