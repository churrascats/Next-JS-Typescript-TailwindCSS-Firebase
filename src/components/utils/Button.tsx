import { ButtonColorEnum, ButtonProps } from "../../model/ButtonProps";

export default function Button({ children, color }: ButtonProps) {
    
    switch(color){
        case ButtonColorEnum.BLUE:
            return <button className="bg-gradient-to-r from-blue-400 to-blue-700 text-white px-4 py-2 rounded">{children}</button>;
        case ButtonColorEnum.GREEN:
            return <button className="bg-gradient-to-r from-green-400 to-green-700 text-white px-4 py-2 rounded">{children}</button>;
        case ButtonColorEnum.GRAY:
            return <button className="bg-gradient-to-r from-gray-400 to-gray-700 text-white px-4 py-2 rounded">{children}</button>;
    }
    
}
