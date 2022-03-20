import Client from "../core/Client";

const CLIENTS_MOCK = [
    new Client("Ana", 34, "1"),
    new Client("Bill", 45, "2"),
    new Client("Carl", 23, "3"),
    new Client("Peter", 54, "4"),
];

module.exports = Object.freeze({ CLIENTS_MOCK });
