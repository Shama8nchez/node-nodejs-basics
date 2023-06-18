import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { access, constants, rename as renameFile } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
    // Write your code here
    access(join(__dirname, 'files', 'wrongFilename.txt'), constants.F_OK, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            access(join(__dirname, 'files', 'properFilename.md'), constants.F_OK, (err) => {
                if (!err) {
                    throw new Error('FS operation failed');
                } else {
                    renameFile(join(__dirname, 'files', 'wrongFilename.txt'), join(__dirname, 'files', 'properFilename.md'), (err) => {
                        if (err) {
                            throw new Error('FS operation failed');
                        }
                    })
                }
            })
        }
    })
};

await rename();