# ChromeRemoteDebugREPL

REPL for Chrome browser debugging using Chrome DevTools Protocol

## Running chrome in debug mode

Prerequisite to using the module is a chrome instance running in debug mode

#### For Linux (tested on Ubuntu 16.04)

`#sudo google-chrome --remote-debugging-port=<port number>`

#### For MacOS

`sudo /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=<port number>`

## Starting the REPL

**Clone the repo -** `git clone https://github.com/hrmeetsingh/ChromeRemoteDebugREPL.git`

`cd ChromeRemoteDebugREPL`

After starting chrome with debuging flag, run the following command to start chrome devtools API

**Installing dependencies -** `yarn install`

**Starting the REPL -** `yarn start`

## Getting list of running browsers and attaching remote interface

**Getting list of browsers -** `ChromeRemoteDebugREPL:REPL> .list <port number>`

**Attaching remote interface to an instance -** `ChromeRemoteDebugREPL:REPL> .attach <port number>`

**Getting list of open pages and tabs -** `ChromeRemoteDebugREPL:REPL> pages`

**Getting hold of chrome devtools wrapper -** `ChromeRemoteDebugREPL:REPL> client`

### TODO

This is the bare minimum functionality and can be used for basic debugging of chrome browser. Needs more work on the endless possibilities the CDP offers.
