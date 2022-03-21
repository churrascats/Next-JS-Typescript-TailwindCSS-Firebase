export interface InputProps {
    text: string
    inputType?: 'number' | 'text'
    value: any
    readOnly?: boolean
    onChange?: (value: any) => void
}