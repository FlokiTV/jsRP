fx_version 'bodacious'
game 'gta5'

author 'FlokiTV'
description "jsRP Login"
version '1.0.0'

ui_page 'nui/index.html'
-- ui_page 'http://localhost:3000/nui'

files {
    "nui/**.js",
    "nui/**.png",
    "nui/**.html",
    "nui/**.json",
    "nui/**.css",
}

client_script 'client/*.js'
server_script 'server/*.js'
shared_script 'shared.js'
