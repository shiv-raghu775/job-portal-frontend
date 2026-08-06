import { Radio as RadioPrimitive } from "@base-ui/react/radio"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group"

import { cn } from "@/lib/utils"

function RadioGroup({
   
  className,
  ...props
}) {
   
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn("grid w-full gap-2", className)}
      {...props} />
  );
}

function RadioGroupItem({ className, ...props }) {
  return (
    <RadioPrimitive.Root
      className={cn(
        "relative flex h-5 w-5 items-center justify-center rounded-full border-2 border-black cursor-pointer",
        className
      )}
      {...props}
    >
      <RadioPrimitive.Indicator>
        <div className="h-2.5 w-2.5 rounded-full bg-black" />
      </RadioPrimitive.Indicator>
    </RadioPrimitive.Root>
  );
}

export { RadioGroup, RadioGroupItem }
