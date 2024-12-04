import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { localeNames } from "@/i18n/request";
import { usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";
import ReactCountryFlag from "react-country-flag"
import { cn } from "@/utils/cn";
import { LangSwitcherProps } from "./types";

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const router = useRouter();
    const locale = useLocale();
    const pathname = usePathname();

    const handleSwitchLanguage = (value: string) => {
        router.push(pathname, { locale: value });
    };

    return (
        <div className={cn(className, 'font-[Manrope]')}>
            <Select value={locale} onValueChange={handleSwitchLanguage}>
                <SelectTrigger 
                    className="shadow"
                    aria-label="Select language"
                >
                    <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent className="fixed left-0">
                    {
                        Object.keys(localeNames).map((key: string) => {
                            const { name, country } = localeNames[key];
                            return (
                                <SelectItem
                                    key={key}
                                    value={key}
                                    className="cursor-pointer"
                                    aria-label={`Change language to ${name}`}
                                >
                                    <ReactCountryFlag 
                                        style={{marginRight: '8px', marginBottom: '2px'}} 
                                        countryCode={country} 
                                        alt={`${country} flag`} 
                                        svg 
                                    />
                                    {name}
                                </SelectItem>
                            )
                        })
                    }
                </SelectContent>
            </Select>
        </div>
    )
}