import { useState } from "react";
import { ButtonColorEnum } from "../../model/ButtonProps";
import { FormProps } from "../../model/FormProps";
import Button from "../utils/Button";
import Input from "./Input";

export default function Form({ client }: FormProps) {
    const [name, setName] = useState(client?.name ?? "");
    const [age, setAge] = useState(client?.age ?? 0);

    return (
        <div>
            {client?.id ? <Input text="Code" value={client.id}></Input> : false}
            <Input
                onChange={setName}
                text="Name"
                value={name}
                inputType="text"
            ></Input>

            <Input
                onChange={setAge}
                text="Age"
                value={age}
                inputType="number"
            ></Input>

            <div className="flex justify-end mt-7">
                <Button className="mr-2" color={ButtonColorEnum.BLUE}>
                    {client?.id ? "Edit" : "Save"}
                </Button>
                <Button color={ButtonColorEnum.GRAY}>Cancel</Button>
            </div>
        </div>
    );
}
