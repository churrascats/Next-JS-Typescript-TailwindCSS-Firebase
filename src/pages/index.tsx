import Layout from "../components/Layout";
import Table from "../components/Table";
import Button from "../components/utils/Button";
import Client from "../core/Client";
import { ButtonColorEnum } from "../model/ButtonProps";

export default function Home() {
    const clients: Client[] = require("../model/ClientsMock").CLIENTS_MOCK;

    function selectedClient(client: Client) {
        console.log(client.name);
    }

    function deletedClient(client: Client) {
        console.log(client.name);
    }

    return (
        <div
            className={`flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white`}
        >
            <Layout title="User Register">
                <div className="flex justify-end mb-4">
                    <Button color={ButtonColorEnum.BLUE}>New Client</Button>
                </div>
                <Table
                    clients={clients}
                    selectedClient={selectedClient}
                    deletedClient={deletedClient}
                ></Table>
            </Layout>
        </div>
    );
}
