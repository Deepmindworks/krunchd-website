import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[#0A0A0A] text-white hover:bg-[#1A1A1A] hover:scale-[1.02] active:scale-[0.98]",
        gold: "bg-[#C8A951] text-[#0A0A0A] hover:bg-[#D4BA6A] hover:scale-[1.02] active:scale-[0.98] font-bold",
        outline:
          "border-2 border-[#0A0A0A] bg-transparent text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white",
        "outline-gold":
          "border-2 border-[#C8A951] bg-transparent text-[#C8A951] hover:bg-[#C8A951] hover:text-[#0A0A0A]",
        ghost:
          "bg-transparent text-[#0A0A0A] hover:bg-[#0A0A0A]/5",
        link: "text-[#C8A951] underline-offset-4 hover:underline bg-transparent",
        secondary:
          "bg-[#F5F0E8] text-[#0A0A0A] hover:bg-[#EDE5D5] hover:scale-[1.02] active:scale-[0.98]",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
