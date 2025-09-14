// deploy to production server using rsync
cd ./app
npm run build
rsync -avz ./dist/ root@138.197.131.6:/var/www/abasite

#rsync -avz ../server/ root@138.197.131.6:/server

#Password: NurtureNooter1Nest