import { ReactElement } from "react";
import Client from "../core/Client";
import { TableProps } from "../model/TableProps";
import TableActionButton, { ButtonTypesEnum } from "./utils/TableActionButton";

export default function Table(props: TableProps) {
    const actionsVisible = props.selectedClient || props.deletedClient;

    function headerRender(): ReactElement {
        return (
            <tr>
                <th className="text-center p-4">Code</th>
                <th className="text-center p-4">Name</th>
                <th className="text-center p-4">Age</th>
                {actionsVisible ? <th className="p-4">Actions</th> : false}
            </tr>
        );
    }

    function dataRender(): JSX.Element[] {
        return props.clients?.map((client, index) => {
            return (
                <tr
                    className={`${
                        index % 2 === 0 ? "bg-purple-200" : "bg-purple-100"
                    }`}
                    key={index}
                >
                    <td className="text-center p-4">{client.id}</td>
                    <td className="text-center p-4">{client.name}</td>
                    <td className="text-center p-4">{client.age}</td>
                    {actionsVisible ? actionsRender(client) : false}
                </tr>
            );
        });
    }

    function actionsRender(client: Client) {
        return (
            <td className="flex justify-center">
                {props.selectedClient ? (
                    <TableActionButton
                        type={ButtonTypesEnum.EDIT} selectedClient={props?.selectedClient} client={client}
                    ></TableActionButton>
                ) : (
                    false
                )}
                {props.deletedClient ? (
                    <TableActionButton
                        type={ButtonTypesEnum.DELETE} deletedClient={props?.deletedClient} client={client}
                    ></TableActionButton>
                ) : (
                    false
                )}
            </td>
        );
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className="bg-gradient-to-r from-purple-500 to-purple-800 text-gray-100">
                {headerRender()}
            </thead>

            <tbody>{dataRender()}</tbody>
        </table>
    );
}
