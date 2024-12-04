#!/bin/bash
wget -qO- https://toolbelt.heroku.com/install-ubuntu.sh | sh
heroku plugins:install @heroku-cli/plugin-container-registry
heroku container:login
heroku stack:set container --app rahbee-distnode
heroku container:push web --app rahbee-distnode
heroku container:release web --app rahbee-distnode
