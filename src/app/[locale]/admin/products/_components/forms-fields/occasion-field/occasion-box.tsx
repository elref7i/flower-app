"use client";
import * as React from "react";
import { CheckIcon, ChevronDown, LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import useGetInfiniteOccasion from "./hook/useGetInfiniteOccasions";
import { useTranslations } from "next-intl";

// Occasion combobox
export default function OccasionBox({ setBoxValue }: { setBoxValue: (value: string) => void }) {
  // hooks
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const loadMore = React.useRef<HTMLInputElement | null>(null);
  const t = useTranslations("products-cu");
  const { occasions, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetInfiniteOccasion();

  //  generate occasions values and label
  const frameworks = occasions.map((occ) => {
    return { label: occ.name, value: occ._id };
  });

  // add observer to fetch occasions
  React.useEffect(() => {
    if (!loadMore.current) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (hasNextPage) fetchNextPage();
      }
    });

    if (loadMore.current) observer.observe(loadMore.current);
    return () => {
      observer.disconnect();
    };
  }, [open, loadMore.current]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        {/* trigger button */}
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between bg-white border border-zinc-300 h-12"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : `${t("select-option")}`}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search Occasion..." />
          <CommandList className="h-36 overflow-y-scroll">
            <CommandEmpty>{t("no-options")}</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    setBoxValue(framework.value);
                  }}
                >
                  {/* check icon for selected value */}
                  <CheckIcon
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>

            {/*Observer element to fetch next page */}
            <div className="text-sm text-maroon-500 min-h-1" ref={loadMore}>
              {isFetchingNextPage && (
                <span className="flex gap-5 justify-center mt-3">
                  <LoaderCircle className="animate-spin" /> please waite...
                </span>
              )}
            </div>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
