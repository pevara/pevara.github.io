import { flagGB, flagNL } from 'quasar-extras-svg-icons/country-flag-icons';

export class AppSettingsService {
    static localeOptions: MenuOption<LocaleValue>[] = [
        {
            label: 'English',
            value: 'en-US',
            disable: false,
            icon: flagGB,
        },
        {
            label: 'Nederlands',
            value: 'nl',
            disable: false,
            icon: flagNL,
        },
    ];

    static themeOptions: MenuOption<ThemeValue>[] = [
        {
            label: 'theme_light_label',
            value: 'light',
            disable: false,
            icon: 'light_mode',
        },
        {
            label: 'theme_dark_label',
            value: 'dark',
            disable: false,
            icon: 'dark_mode',
        },
        {
            label: 'theme_auto_label',
            value: 'auto',
            disable: false,
            icon: 'auto_awesome',
        },
    ];

    static convertThemeToQuasar(
        storeValue: ThemeValue
    ): ThemeValueQuasar | boolean {
        switch (storeValue) {
            case 'light':
                return false;
            case 'dark':
                return true;
            case 'auto':
                return 'auto';
            default:
                return 'auto';
        }
    }
}

export interface MenuOption<ValueType = ThemeValue | LocaleValue> {
    label: string;
    value: ValueType;
    disable: boolean;
    icon: string;
}

export type ThemeValue = 'light' | 'dark' | 'auto';
export type ThemeValueQuasar = 'auto' | boolean;

export type LocaleValue = 'en-US' | 'nl';
