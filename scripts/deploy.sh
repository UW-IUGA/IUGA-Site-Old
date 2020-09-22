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
#       3/16/2020


# Get the directory of this script
BASE="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"\

# Build and push the container
docker-compose -f "docker-compose.yml" build
docker-compose push

# SSH into the IUGA server and run an update script that is passed in through the ssh
echo -n "UW NetID: "
read username
ssh $username@iuga.info 'bash -s' < $BASE/scripts/deploy_pipe.sh
