#!/usr/bin/env node
 // Get the yargs resource
const yargs = require('yargs').argv;
const { spawn } = require('child_process');
const moment = require('moment');
const utils = require('./utils');

if (yargs.init) {
  utils.cloneRepo(spawn, yargs.init)
}

if (yargs.new){
  utils.createNewMD(spawn, moment);
}

if (yargs.deploy){
  utils.commitPush(spawn, moment);
}
