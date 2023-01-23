# This is the deploy script that is run on the IUGA server that is passed in by `zzz_deploy.sh`. 
# It pulls the containers after the deploy script has built and pushed the new site containers. 
# 
# Last Modified
#       William Kwok
#       June 8, 2019

# Pull in containers that were just created from the docker compose
docker pull iuga/nginx_site
docker pull iuga/next_site

# Remove old containers
docker rm -f site
docker rm -f next_site

# First, run the container containing the nextjs application, because the nginx relies on this one
# to forward a port to.
#
# TODO: Figure out how to make this only run within a docker network. Right now it is not secure,
# since you can access port 3000 by going to http://iuga.info:3000. Just don't pass any sensitive
# data and you should be fine.
docker run -d \
-p 3000:3000 \
--name next_site \
iuga/next_site

# Run the nginx container passing in the certification files as read only, and making sure the 
# network is running off the host so it can bypass any weird issues. 
docker run -d \
--net=host \
-v /root:/root/iuga:ro \
--name site \
iuga/nginx_site
