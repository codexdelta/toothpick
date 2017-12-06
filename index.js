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

if (yargs.a){
  utils.add(spawn, moment);
}
if (yargs.c){
  utils.commit(spawn, moment);
}
if (yargs.p){
  utils.push(spawn, moment);
}
