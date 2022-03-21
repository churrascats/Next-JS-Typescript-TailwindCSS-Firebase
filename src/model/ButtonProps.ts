export interface ButtonProps {
    color: ButtonColorEnum
    children: any
    className?: string
}

export enum ButtonColorEnum {
    GREEN, BLUE, GRAY
}