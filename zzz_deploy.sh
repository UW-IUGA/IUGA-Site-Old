#!/bin/bash

# This is the PRIMARY deploy script for the website. You should just have to call this one file and it will
# proceed to deploy the entire codebase. 
#
# Prerequisites:
#       Docker
#           Your account has been added to the UWIUGA Docker Team
#       SSH Access to IUGA Server with sudo permissions
#           Your account also needs to be added to the docker resource group potentially.
#               This is done by doing `sudo usermod -a -G docker _______` where the blank is your
#               uwnetid
#       The ability to solve problems if something comes up
#
# Last Modified:
#       William Kwok
#       June 8, 2019


# Build and push the container
docker-compose -f "docker-compose.yml" build
docker-compose push

# SSH into the IUGA server and run an update script that is passed in through the ssh
# 
# MAKE SURE TO CHANGE THE USERNAME TO YOUR OWN!
ssh wkwok16@iuga.info 'bash -s' < zz_deploy_helper_update.sh