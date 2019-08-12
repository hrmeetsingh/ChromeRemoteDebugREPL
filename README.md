# ChromeRemoteDebugREPL
REPL for Chrome browser debugging using Chrome DevTools Protocol

## Running chrome in debug mode 

Prerequisite to using the module is a chrome instance running in debug mode 

### For Linux (tested on Ubuntu 16.04)
`#sudo google-chrome --remote-debugging-port=<port number>`

### For MacOS
`sudo /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=<port number>`

## Running module
After chrome starts, run the following command to start chrome devtools API

__Installing dependencies -__ `yarn install`
__Starting the REPL -__ `yarn node chromeremote.js`

## Getting list of running browsers and attaching remote interface

__Getting list of browsers -__ `ChromeRemoteDebugREPL:REPL> .list <port number>`
__Attaching remote interface to an instance -__ `ChromeRemoteDebugREPL:REPL> .attach <port number>`

__Getting list pf pages -__ `ChromeRemoteDebugREPL:REPL> pages`

__Getting hold of chrome interface wrapper -__ `ChromeRemoteDebugREPL:REPL> client`

## TODO
This is still basic functionality, needs work on other supported functionalities

