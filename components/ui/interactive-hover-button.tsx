import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

export function InteractiveHoverButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "group/btn bg-black relative w-auto cursor-pointer overflow-hidden rounded-full border border-[#efdb92] p-2 px-3 sm:px-4 md:px-6 text-center text-xs sm:text-sm font-semibold text-[#efdb92] hover:bg-[#efdb92] hover:text-black hover:border-[#f5e8b8] hover:shadow-[0_0_15px_rgba(239,219,146,0.3)] transition-all duration-300",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="bg-[#efdb92] h-2 w-2 rounded-full transition-all duration-300 group-hover/btn:opacity-0"></div>
        <span className="inline-block transition-all duration-300 group-hover/btn:translate-x-12 group-hover/btn:opacity-0">
          {children}
        </span>
      </div>
      <div className="text-black absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover/btn:-translate-x-5 group-hover/btn:opacity-100">
        <span>{children}</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </button>
  )
}
