import crypto from 'crypto';
import {Dictionary} from './types';

class U {
    static sleep(s: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, s * 1000));
    }
    static random(): string {
        return crypto.randomBytes(128).toString('base64');
    }
    static encrypt(password: string): string {
        return crypto.createHmac('sha256', password).update('SECRET_KEY').digest('hex');
    }
    static token(): string {
        return U.encrypt(U.random());
    }
    static keepKeys(dict: Dictionary, keys: string[]): Dictionary {
        return Object.fromEntries(
            Object.entries(dict).filter(([key]) => keys.includes(key))
        );
    }
    static wrapper<T>(obj: unknown): T {
        return obj as T;
    }
    static getRandomString(length: number): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let randomString = '';
        let index = 0;
        while(index < length) {
            const randomNumber = Math.floor(Math.random() * characters.length);
            randomString += characters.charAt(randomNumber);
            index += 1;
        }
        return randomString;
    }
    static clean(e: Dictionary): Dictionary {
        delete e['_id']; delete e['__v'];
        return e;
    }
}

export default U;
