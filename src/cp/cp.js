import { spawn } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
    // Write your code here
    const ls = spawn('node', [join(__dirname, 'files', 'script.js'), ...args]);

    ls.stdout.on('data', data => console.log(data.toString()));
    ls.stderr.on('data', data => console.log(data));
    process.stdin.pipe(ls.stdin)
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['Arg1', 'Arg2']);
