import Client from "../../core/Client";
import { IconTypes } from "./Icons";

export interface TableActionButtonType {
    type: ButtonTypesEnum;
    client: Client;
    selectedClient?: Function
    deletedClient?: Function
}

export enum ButtonTypesEnum {
    EDIT,
    DELETE,
}

export default function TableActionButton({ type, client, selectedClient, deletedClient }: TableActionButtonType) {
    const Icons: IconTypes = require("./Icons");

    switch (type) {
        case ButtonTypesEnum.EDIT:
            return (
                <button onClick={() => selectedClient?.(client)} className="flex justify-center items-center rounded-full text-green-600 hover:bg-purple-50 p-2 m-1">
                    {Icons.EditIcon}
                </button>
            );
        case ButtonTypesEnum.DELETE:
            return (
                <button onClick={() => deletedClient?.(client)} className="flex justify-center items-center rounded-full text-red-500 hover:bg-purple-50 p-2 m-1">
                    {Icons.DeleteIcon}
                </button>
            );
    }
}
