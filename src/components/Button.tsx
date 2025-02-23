import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, ...props }, ref) => {
        return (
            <button
                className="bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export default Button;