// deploy to production server using rsync
cd ./app
npm run build
rsync -avz ./dist/ root@138.197.131.6:/var/www/abasite

# Fix permissions after deployment
ssh root@138.197.131.6 "chown -R www-data:www-data /var/www/abasite && chmod -R 755 /var/www/abasite"

#rsync -avz ../server/ root@138.197.131.6:/server

#Password: NurtureNooter1Nest