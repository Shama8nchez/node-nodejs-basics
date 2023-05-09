import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { access, constants, unlink } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
    // Write your code here
    access(join(__dirname, 'files', 'fileToRemove.txt'), constants.F_OK, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            unlink(join(__dirname, 'files', 'fileToRemove.txt'), (err) => {
                if (err) {
                    throw new Error('FS operation failed');
                }
            });
        }
    });
};

await remove();