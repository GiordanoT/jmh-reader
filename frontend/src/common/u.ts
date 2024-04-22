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
}

export default U;
