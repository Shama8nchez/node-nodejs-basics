import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { access, constants } from 'node:fs';
import { readdir } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
    // Write your code here
    access(join(__dirname, 'files'), constants.F_OK, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            readdir(join(__dirname, 'files'), (err, files) => {
                if (err) {
                    throw new Error('FS operation failed');
                } else {
                    console.log(files);
                }
            })
        }
    });
};

await list();