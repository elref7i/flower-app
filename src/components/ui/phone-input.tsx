"use client";

import * as React from "react";
import { useLocale } from "next-intl"; // 👈 عشان نعرف اللغة الحالية
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils/cn";

type PhoneInputProps = Omit<
  React.ComponentProps<"input">,
  "onChange" | "value" | "ref"
> &
  Omit<RPNInput.Props<typeof RPNInput.default>, "onChange"> & {
    onChange?: (value: RPNInput.Value) => void;
  };

const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps> =
  React.forwardRef<React.ElementRef<typeof RPNInput.default>, PhoneInputProps>(
    ({ className, onChange, value, ...props }, ref) => {
      const locale = useLocale(); // 👈 تحديد اللغة الحالية
      const isRTL = locale === "ar";

      return (
        <RPNInput.default
          ref={ref}
          className={cn(
            "flex w-full",
            isRTL ? "flex-row-reverse text-right" : "flex-row text-left", // 👈 قلب الاتجاه في العربي
            className
          )}
          flagComponent={FlagComponent}
          countrySelectComponent={(selectProps) => (
            <CountrySelect {...selectProps} isRTL={isRTL} />
          )}
          defaultCountry="EG"
          inputComponent={(inputProps) => (
            <InputComponent {...inputProps} isRTL={isRTL} />
          )}
          smartCaret={false}
          value={value || undefined}
          onChange={(value) => onChange?.(value || ("" as RPNInput.Value))}
          {...props}
        />
      );
    }
  );
PhoneInput.displayName = "PhoneInput";

// ✅ تعديل InputComponent لدعم RTL
const InputComponent = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & { isRTL?: boolean }
>(({ className, isRTL, ...props }, ref) => (
  <Input
    className={cn(
      "h-10",
      isRTL
        ? "rounded-r-none border-r-0 text-right"
        : "rounded-l-none border-l-0 text-left",
      className
    )}
    {...props}
    ref={ref}
    dir={isRTL ? "rtl" : "ltr"} // 👈 دعم RTL
  />
));
InputComponent.displayName = "InputComponent";

type CountryEntry = { label: string; value: RPNInput.Country | undefined };

type CountrySelectProps = {
  disabled?: boolean;
  value: RPNInput.Country;
  options: CountryEntry[];
  onChange: (country: RPNInput.Country) => void;
  isRTL?: boolean;
};

// ✅ تعديل CountrySelect لدعم RTL
const CountrySelect = ({
  disabled,
  value: selectedCountry,
  options: countryList,
  onChange,
  isRTL,
}: CountrySelectProps) => {
  const scrollAreaRef = React.useRef<HTMLDivElement>(null);
  const [searchValue, setSearchValue] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Popover
      open={isOpen}
      modal
      onOpenChange={(open) => {
        setIsOpen(open);
        open && setSearchValue("");
      }}
    >
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className={cn(
            "flex gap-1 h-10 px-3",
            isRTL
              ? "rounded-l-none rounded-r-lg border-l-0 flex-row-reverse"
              : "rounded-r-none rounded-l-lg border-r-0 flex-row"
          )}
          disabled={disabled}
        >
          <FlagComponent
            country={selectedCountry}
            countryName={selectedCountry}
          />
          <ChevronsUpDown
            className={cn(
              "-mr-2 size-4 opacity-50",
              disabled ? "hidden" : "opacity-100"
            )}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[300px] p-0"
        side={isRTL ? "left" : "right"} // 👈 فتح الـ Popover في الناحية الصح
      >
        <Command dir={isRTL ? "rtl" : "ltr"}>
          <CommandInput
            value={searchValue}
            onValueChange={(value) => {
              setSearchValue(value);
              setTimeout(() => {
                if (scrollAreaRef.current) {
                  const viewportElement =
                    scrollAreaRef.current.querySelector(
                      "[data-radix-scroll-area-viewport]"
                    );
                  if (viewportElement) {
                    viewportElement.scrollTop = 0;
                  }
                }
              }, 0);
            }}
            placeholder="Search country..."
          />
          <CommandList>
            <ScrollArea ref={scrollAreaRef} className="h-72">
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {countryList.map(({ value, label }) =>
                  value ? (
                    <CountrySelectOption
                      key={value}
                      country={value}
                      countryName={label}
                      selectedCountry={selectedCountry}
                      onChange={onChange}
                      onSelectComplete={() => setIsOpen(false)}
                      isRTL={isRTL}
                    />
                  ) : null
                )}
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

interface CountrySelectOptionProps extends RPNInput.FlagProps {
  selectedCountry: RPNInput.Country;
  onChange: (country: RPNInput.Country) => void;
  onSelectComplete: () => void;
  isRTL?: boolean;
}

const CountrySelectOption = ({
  country,
  countryName,
  selectedCountry,
  onChange,
  onSelectComplete,
  isRTL,
}: CountrySelectOptionProps) => {
  const handleSelect = () => {
    onChange(country);
    onSelectComplete();
  };

  return (
    <CommandItem
      className={cn("gap-2", isRTL && "flex-row-reverse text-right")}
      onSelect={handleSelect}
    >
      <FlagComponent country={country} countryName={countryName} />
      <span className="flex-1 text-sm">{countryName}</span>
      <span className="text-sm text-foreground/50">
        {`+${RPNInput.getCountryCallingCode(country)}`}
      </span>
      <CheckIcon
        className={`ml-auto size-4 ${
          country === selectedCountry ? "opacity-100" : "opacity-0"
        }`}
      />
    </CommandItem>
  );
};

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
  const Flag = flags[country];
  return (
    <span className="flex h-4 w-6 overflow-hidden rounded-sm bg-foreground/20 [&_svg:not([class*='size-'])]:size-full">
      {Flag && <Flag title={countryName} />}
    </span>
  );
};

export { PhoneInput };
