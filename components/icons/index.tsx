import { Moon, SunMedium } from 'lucide-react';

const icons = {
    sun: SunMedium,
    moon: Moon
}

export type IconKeys = keyof typeof icons;

export type IconsType = {
    [key in IconKeys]: React.ElementType;
}

export const Icons: IconsType = icons;