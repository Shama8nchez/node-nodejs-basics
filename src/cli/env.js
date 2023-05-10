import { env } from 'process';

const parseEnv = () => {
    // Write your code here
    console.log(Object.entries(env)
        .filter(([key, value]) => key.startsWith('RSS_'))
        .map(([key, value]) => `${key}=${value}`)
        .join('; '));
};

parseEnv();