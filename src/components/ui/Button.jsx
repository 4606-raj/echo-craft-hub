import { Button as MuiButton } from "@mui/material";
import { cva } from "class-variance-authority";



export default function Button({variant = 'contained', className, text, ...props}) {

    const combinedClassName = `${buttonVariantsClass({ variant })} ${className}`;
    
    return (
        <MuiButton {...props} variant={variant} className={combinedClassName}>{text}</MuiButton>
    )
}

const buttonVariantsClass = cva(
    'w-full my-2 p-3 rounded-md', 
    {
        variants: {
            variant: {
                outlined: 'text-primary border-1 border-black-500',
                contained: 'text-white bg-primary',
            }
        },
        defaultVariants: {
            variant: 'outlined'
        }
    }
)