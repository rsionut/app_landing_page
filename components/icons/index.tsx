import { Moon, SunMedium, Star, CircleCheck } from 'lucide-react';

const icons = {
    sun: SunMedium,
    moon: Moon,
    star: Star,
    check: CircleCheck
}

export type IconKeys = keyof typeof icons;

export type IconsType = {
    [key in IconKeys]: React.ElementType;
}

export const Icons: IconsType = icons;