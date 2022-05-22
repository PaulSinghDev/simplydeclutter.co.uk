import { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (props) => <button {...props} />;

export { Button };
