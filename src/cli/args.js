import { argv } from 'process';

const parseArgs = () => {
    // Write your code here
    const result = [];
    for(let i = 0; i < argv.length; i++) {
        if (argv[i].startsWith('--')) {
            result.push(`${argv[i].slice(2)} is ${argv[i + 1]}`);
        } 
    }
    console.log(result.join(', '));
};

parseArgs();