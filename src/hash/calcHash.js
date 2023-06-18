import { readFile } from 'node:fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
    // Write your code here
    const {
        createHash,
    } = await import('node:crypto');
      
    const hash = createHash('sha256');

    readFile(join(__dirname, 'files', 'fileToCalculateHashFor.txt'), 'utf8', (err, data) => {
        hash.update(data);
        console.log(hash.digest('hex'));
    })
};

await calculateHash();