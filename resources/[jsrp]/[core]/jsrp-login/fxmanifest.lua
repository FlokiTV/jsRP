fx_version 'bodacious'
game 'gta5'

author 'FlokiTV'
description "jsRP Login"
version '1.0.0'

client_script 'client/*.js'
server_script {
    'server/index.js',
    'server/database/*.js',
    'server/events/*.js'
}