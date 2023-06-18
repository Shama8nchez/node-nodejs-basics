import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { access, constants, writeFile } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
    // Write your code here
    access(join(__dirname, 'files', 'fresh.txt'), constants.F_OK, (err) => {
        if (err) {
            writeFile(join(__dirname, 'files', 'fresh.txt'), 'I am fresh and young', (err) => {
                if (err) {
                    throw new Error('FS operation failed');
                }
            })
        } else {
            throw new Error('FS operation failed');
        }
    });
};

await create();