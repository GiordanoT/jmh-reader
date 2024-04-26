class U {
    static wrapper<T>(object: unknown): T {
        return object as T;
    }
    static removeDuplicates<T>(array: T[]): T[] {
        return array.reduce((previous: T[], current: T) => {
            if (!previous.includes(current))
                previous.push(current);
            return previous;
        }, []);
    }
    static sleep(s: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, s * 1000));
    }
    static refresh(): void {
        window.location.reload();
    }
    static groupBy<T, K>(list: T[], getKey: (item: T) => K): Map<K, T[]> {
        return list.reduce((map, item) => {
            const key = getKey(item);
            const group = map.get(key);
            if (group === undefined) map.set(key, [item]);
            else group.push(item);
            return map;
        }, new Map<K, T[]>());
    }
}

export default U;
