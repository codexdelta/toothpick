
/**
 * function to console logs of any command
 */
 let logger = (cmd)=>{
   cmd.stdout.on('data', (data) => {
     console.log(`stdout: ${data}`);
   });

   cmd.stderr.on('data', (data) => {
     console.log(`stderr: ${data}`);
   });

   cmd.on('close', (code) => {
     console.log(`child process exited with code ${code}`);
   });
 }

/**
 * Clones the repo passed in args
 */
let cloneRepo = (spawn, repo)=>{
  const ls = spawn('git', ['clone', repo]);
  logger(ls);
}

/**
 * create the md file with name of present date
 */
let createNewMD = (spawn, moment)=>{
  let fileName = String(moment().format('DD-MM-YYYY')) + '.md'
  const touch = spawn('touch', [fileName]);
  logger(touch);
}

/**
 * commits the changes and push to the origin
 */
 let add = (spawn, moment)=>{

   // let git = spawn('git');
   // console.log(git);

   const gitAdd = spawn('git', ['add', '.']);
   logger(gitAdd);

 }
/**
 * commits the changes and push to the origin
 */
 let commit = (spawn, moment)=>{

   const gitCommit = spawn('git', ['commit', '-m', moment().format('MMMM Do YYYY')]);
   logger(gitCommit)

 }
/**
 * commits the changes and push to the origin
 */
 let push = (spawn, moment)=>{

   const gitPush = spawn('git', ['push', 'origin', 'master']);
   logger(gitPush);
 }

module.exports = {
  cloneRepo: cloneRepo,
  createNewMD: createNewMD,
  add: add,
  commit: commit,
  push: push
}
