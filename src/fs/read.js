import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { access, constants } from 'node:fs';
import { readFile } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    // Write your code here
    access(join(__dirname, 'files', 'fileToRead.txt'), constants.F_OK, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            readFile(join(__dirname, 'files', 'fileToRead.txt'), 'utf8', (err, data) => {
                if (err) throw new Error('FS operation failed');
                console.log(data);
            })
        }
    });
};

await read();