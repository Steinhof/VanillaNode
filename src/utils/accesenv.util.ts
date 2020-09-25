import Cache from "../utils/Cache";
/* eslint-disable functional/prefer-readonly-type */
/* eslint-disable functional/immutable-data */

// accesses a variable inside of process.env, throwing an error if it's not found
// always run this method in advance (i.e. upon initialisation) so that the error is thrown as early as possible
// caching the values improves performance - accessing process.env many times is bad

// Process env cache
export const envCache: Cache<string> = new Cache();

const accessEnvHelper = (key: string): string => {
    const cacheKey = cache[key];

    if (cacheKey !== undefined) {
        return cacheKey;
    }
    return (cache[key] = process.env[key]);
};

export default accessEnvHelper;
