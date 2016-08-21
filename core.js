
// require file system library
var fs = require('fs');

// require child_process to spawn console command calls
var exec = require('child_process').exec;

// one more line
var child = exec('cat *.js | wc -l', function(error, stdout, stderr) {
  if (error) console.log(error);
  process.stdout.write(stdout);
  process.stderr.write(stderr);
});

// recursively search a directory for anything with a specific name (the needle)
var search = function(dir, needle) {
  if(!fs.existsSync(dir)) {
    return console.log('Directory ' + dir + ' does not exist.');
  }

  var haystack = fs.readdirSync(dir), path, stats;
  for(var s = 0; s < haystack.length; s++) {
    path = dir + '/' + haystack[s];
    stats = fs.statSync(path);

    if(stats.isDirectory()) {
      search(path, needle);
    } else if(path.indexOf(needle) >= 0) {
      console.log(path);
    }
  }
};

var init = function(process) {

  var method = process.argv[2];
  var args = process.argv.shift(3);

  console.log(method);
  switch (method) {
    case 'init':
      console.log ('initializing bunny project...');
      break;
    default:
  }


};

init(process);

//search(process.argv[2], process.argv[3]);
child;
