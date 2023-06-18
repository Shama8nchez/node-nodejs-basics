import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { access, constants } from 'node:fs';
import { copyFile, mkdir, readdir } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
    // Write your code here
    access(join(__dirname, 'files'), constants.F_OK, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            access(join(__dirname, 'files_copy'), constants.F_OK, async (err) => {
                if (err) {
                    await mkdir(join(__dirname, 'files_copy'), (err) => {
                        if (err) {
                            throw new Error('FS operation failed');
                        }
                    });

                    readdir(join(__dirname, 'files'), (err, files) => {
                        if (err) {
                            throw new Error('FS operation failed');
                        } else {
                            files.forEach((file) => {
                                copyFile(join(__dirname, 'files', file), join(__dirname, 'files_copy', file), (err) => {
                                    if (err) {
                                        throw new Error('FS operation failed');
                                    }
                                });
                            });
                        }
                    })
                } else {
                    throw new Error('FS operation failed');
                }
            })
        }
    })
};

await copy();
