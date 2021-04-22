#!/usr/bin/env sh

echo "################################## Run nginx"
export DOLLAR='$'
envsubst < /usr/share/nginx/html/globalConfig.js.template > /usr/share/nginx/html/config/globalConfig.js
echo "################################## Start server"
nginx -g "daemon off;"

