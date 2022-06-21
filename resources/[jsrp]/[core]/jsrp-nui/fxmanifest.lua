fx_version "cerulean"
game "gta5"

author 'FlokiTV'
description "jsRP Simple Svelte NUI Example"
version '1.0.0'

-- ui_page 'http://localhost:3000/nui' 
ui_page 'nui/index.html' 

files {
    "nui/**.js",
    "nui/**.png",
    "nui/**.html",
    "nui/**.json",
    "nui/**.css",
}

client_script {
    "client/index.js",
    "client/listeners.js",
    "client/nui.js",
}
server_script 'server.js'