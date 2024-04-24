import {Commit} from "./types";

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
    static isEqual(obj1: any, obj2: any): boolean {
        const props1 = Object.getOwnPropertyNames(obj1);
        const props2 = Object.getOwnPropertyNames(obj2);
        if (props1.length != props2.length) return false;
        for (let i = 0; i < props1.length; i++) {
            let val1 = obj1[props1[i]];
            let val2 = obj2[props1[i]];
            let isObjects = U.isObject(val1) && U.isObject(val2);
            if (isObjects && !U.isEqual(val1, val2) || !isObjects && val1 !== val2) {
                return false;
            }
        }
        return true;
    }
    private static isObject(object: any) {
        return object != null && typeof object === 'object';
    }
}

export default U;
