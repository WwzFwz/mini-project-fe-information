import { Input } from "./input";

interface InputFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export function InputField({ value, onChange, placeholder }: InputFieldProps) {
  return (
    <Input value={value} onChange={onChange} className="mb-4" placeholder={placeholder} />
  );
}
