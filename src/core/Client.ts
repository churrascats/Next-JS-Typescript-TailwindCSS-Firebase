export default class Client {
    private _id: string;
    private _name: string;
    private _age: number;

    static newClient() {
        return new Client("", 0);
    }

    constructor(name: string, age: number, id: string = null) {
        this._name = name;
        this._age = age;
        this._id = id;
    }

    public get id(): string {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public get age(): number {
        return this._age;
    }
}
