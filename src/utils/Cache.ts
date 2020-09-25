// Add driver functionality
class Cache<T> extends Map {
    // Add key-value pair to cache
    public add(key: string, val: T): void {
        this.set(key, val);
    }

    // Delete cache element
    public del(key: string): void {
        this.delete(key);
    }

    // Clear cache elements that start with prefix
    public clr(): void {
        this.clear();
        // this.forEach((val, key) => {
        //     if (key.startsWith(prefix)) {
        //         this.allocated -= dataSize(val);
        //         this.delete(key);
        //         if (fn) fn(key, val);
        //     }
        // });
    }
}

export default Cache;
