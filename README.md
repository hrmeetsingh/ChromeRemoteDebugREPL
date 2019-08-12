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

**Installing dependencies -** `yarn install`

**Starting the REPL -** `yarn node chromeremote.js`

## Getting list of running browsers and attaching remote interface

**Getting list of browsers -** `ChromeRemoteDebugREPL:REPL> .list <port number>`

**Attaching remote interface to an instance -** `ChromeRemoteDebugREPL:REPL> .attach <port number>`

**Getting list pf pages -** `ChromeRemoteDebugREPL:REPL> pages`

**Getting hold of chrome interface wrapper -** `ChromeRemoteDebugREPL:REPL> client`

## TODO

This is still basic functionality, needs work on other supported functionalities
