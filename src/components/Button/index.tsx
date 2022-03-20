export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    /**
     * Primary or secondary?
     */
    primary?: boolean;
    /**
     * How large should the button be?
     */
    size?: "small" | "medium" | "large";
}

export function Button({ onClick, primary, size = "medium", className, ...rest }: ButtonProps): JSX.Element {
    const mode = primary ? "btn--primary" : "btn--secondary";
    const mergedClasses = ["btn", mode, `btn--${size}`, className].filter((s) => s !== undefined).join(" ");
    return <button type="button" {...rest} className={mergedClasses} onClick={onClick} />;
}
