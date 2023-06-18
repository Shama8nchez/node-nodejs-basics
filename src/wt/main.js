import { env } from 'process';
import { Worker } from 'worker_threads';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const NUMBER_OF_PROCESSORS = env.NUMBER_OF_PROCESSORS;

const performCalculations = async () => {
    // Write your code here
    const WORKER = [];
    for (let i = 0; i < NUMBER_OF_PROCESSORS; i++) {
        WORKER.push(
            new Promise((res, rej) => {
                const worker = new Worker(join(__dirname, 'worker.js'), {
                    workerData: 10 + i
                });
                worker.on('message', data => res({status: 'resolved', data: data}));
                worker.on('error', data => rej({status: 'error', data: null}));
            })
        )
    }
    const RESULT = (await Promise.all(WORKER));
    console.log(RESULT)
};

await performCalculations();