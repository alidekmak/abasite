// deploy to production server using rsync

rsync -avz --delete ./build/ root@production-server:/path/to/deploy/