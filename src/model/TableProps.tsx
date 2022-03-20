import Client from "../core/Client";

export interface TableProps {
    clients: Client[];
    selectedClient?: (cliente: Client) => void
    deletedClient?: (cliente: Client) => void
}
