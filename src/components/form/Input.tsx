import { InputProps } from "../../model/InputProps";

export default function Input({
    text,
    inputType,
    value,
    readOnly,
    onChange,
}: InputProps) {
    return (
        <div className="flex flex-col">
            <label className="mb-2">{text}</label>
            <input
                type={inputType ?? "text"}
                value={value}
                readOnly={readOnly}
                className={`
                    border border-purple-500 rounded-lg mb-8
                    focus:outline-none ${readOnly ? "" : "focus:bg-white"}
                    bg-gray-50 px-4 py-2
                `}
                onChange={(e) => onChange?.(e.target.value)}
            />
        </div>
    );
}
