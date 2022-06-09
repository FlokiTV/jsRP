fx_version "cerulean"
game "gta5"

author "FlokiTV"
description "jsRP MySQL Database"
version "1.0.0"

dependency "yarn"

server_script {
    "server/_init.js",
    "server/modules/*.js",
    "server/db.js",
    "server/test.js",
}