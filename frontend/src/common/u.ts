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
    static mean(matrix: number[][]): number {
        const flattenedArray: number[] = matrix.reduce((acc, row) => acc.concat(row), []);
        const sum: number = flattenedArray.reduce((acc, value) => acc + value, 0);
        return sum / flattenedArray.length;
    }
    static median(matrix: number[][]): number {
        const flattenedArray: number[] = matrix.reduce((acc, row) => acc.concat(row), []);
        flattenedArray.sort((a, b) => a - b);
        const length = flattenedArray.length;
        if (length % 2 === 0) {
            const mid1 = flattenedArray[length / 2 - 1];
            const mid2 = flattenedArray[length / 2];
            return (mid1 + mid2) / 2;
        } else {
            return flattenedArray[Math.floor(length / 2)];
        }
    }
    static mode(matrix: number[][]): number {
        const flattenedArray: number[] = matrix.reduce((acc, row) => acc.concat(row), []);
        const frequencyMap: { [key: number]: number } = {};
        flattenedArray.forEach(value => {
            if (frequencyMap[value]) {
                frequencyMap[value]++;
            } else {
                frequencyMap[value] = 1;
            }
        });
        let maxFrequency = 0;
        let mode = flattenedArray[0];
        for (const key in frequencyMap) {
            if (frequencyMap[key] > maxFrequency) {
                maxFrequency = frequencyMap[key];
                mode = Number(key);
            } else if (frequencyMap[key] === maxFrequency) {
                if (Number(key) < mode) {
                    mode = Number(key);
                }
            }
        }
        return mode;
    }

    static generateForks(iterations: number, forks: number): string[] {
        const forkNames: string[] = [];
        for (let i = 0; i < iterations * forks; i++) {
            const forkNumber = Math.floor(i / iterations) + 1;
            const forkName = `fork ${forkNumber}`;
            forkNames.push(forkName);
        }
        return forkNames;
    }

}

export default U;
