import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { localeNames } from "@/i18n/request";
import { usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";

export const LangSwitcher = () => {
    const router = useRouter();
    const locale = useLocale();
    const pathname = usePathname();

    const handleSwitchLanguage = (value: any) => {
        router.push(pathname, { locale: value });
    };

    return (
        <Select value={locale} onValueChange={handleSwitchLanguage}>
            <SelectTrigger>
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {
                    Object.keys(localeNames).map((key: string) => {
                        const name = localeNames[key];
                        return (
                            <SelectItem
                                aria-label={key}
                                className="cursor-pointer"
                                key={key}
                                value={key}
                            >
                                {name}
                            </SelectItem>
                        )
                    })
                }
            </SelectContent>
        </Select>
    )
}