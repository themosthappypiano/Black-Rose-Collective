import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface BrutalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "lg" | "sm";
}

export const BrutalButton = forwardRef<HTMLButtonElement, BrutalButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    
    const variants = {
      primary: "bg-accent text-accent-foreground border-2 border-transparent hover:border-foreground shadow-stamped hover-stamped active-stamped",
      secondary: "bg-foreground text-background border-2 border-transparent hover:bg-background hover:text-foreground hover:border-foreground shadow-stamped-white hover-stamped active-stamped",
      outline: "bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background shadow-stamped-white hover-stamped active-stamped",
      ghost: "bg-transparent text-foreground hover:text-accent border-2 border-transparent underline decoration-2 underline-offset-4",
    };

    const sizes = {
      default: "px-6 py-3 text-lg",
      sm: "px-4 py-2 text-base",
      lg: "px-10 py-5 text-2xl",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-display font-bold uppercase tracking-widest transition-all duration-200",
          "disabled:opacity-50 disabled:pointer-events-none disabled:shadow-none disabled:translate-y-0",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
BrutalButton.displayName = "BrutalButton";
