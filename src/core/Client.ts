export default class Client {
    #id: string;
    #name: string;
    #age: number;

    static newClient() {
        return new Client("", 0);
    }

    constructor(name: string, age: number, id: string = null) {
        this.#name = name;
        this.#age = age;
        this.#id = id;
    }

    public get id(): string {
        return this.#id;
    }

    public get name(): string {
        return this.#name;
    }

    public get age(): number {
        return this.#age;
    }
}
