import { flagGB, flagNL } from 'quasar-extras-svg-icons/country-flag-icons';
import { AppSettingsService } from 'src/models/AppSettings';
import { expect } from '@jest/globals';

describe('AppSettingsService', () => {
    it('should contain English and Nederlands options in localeOptions', () => {
        const expectedOptions = [
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

        expect(AppSettingsService.localeOptions).toEqual(expectedOptions);
    });

    it("should return 'auto' when input is an empty string", () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const result = AppSettingsService.convertThemeToQuasar('');
        expect(result).toBe('auto');
    });

    it('should contain light, dark, and auto options', () => {
        expect(AppSettingsService.themeOptions).toEqual([
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
        ]);
    });

    it('should return true for dark theme', () => {
        const result = AppSettingsService.convertThemeToQuasar('dark');
        expect(result).toBe(true);
    });

    it('should return "auto" when storeValue is "auto"', () => {
        const result = AppSettingsService.convertThemeToQuasar('auto');
        expect(result).toBe('auto');
    });

    it('should return false for light', () => {
        const result = AppSettingsService.convertThemeToQuasar('light');
        expect(result).toBe(false);
    });

    it('should handle undefined input and return auto', () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(AppSettingsService.convertThemeToQuasar(undefined)).toBe('auto');
    });

    it('should handle numeric input and return correct Quasar theme value', () => {
        const result1 = AppSettingsService.convertThemeToQuasar('light');
        const result2 = AppSettingsService.convertThemeToQuasar('dark');
        const result3 = AppSettingsService.convertThemeToQuasar('auto');
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const result4 = AppSettingsService.convertThemeToQuasar('numeric');

        expect(result1).toBe(false);
        expect(result2).toBe(true);
        expect(result3).toBe('auto');
        expect(result4).toBe('auto');
    });

    it('should have disable set to false for all locale options', () => {
        expect(
            AppSettingsService.localeOptions.every(
                (option) => option.disable === false
            )
        ).toBe(true);
    });

    it('should have disable set to false for all themeOptions', () => {
        expect(
            AppSettingsService.themeOptions.every(
                (option) => option.disable === false
            )
        ).toBe(true);
    });

    it('should handle non-string input types', () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const result1 = AppSettingsService.convertThemeToQuasar(123);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const result2 = AppSettingsService.convertThemeToQuasar(null);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const result3 = AppSettingsService.convertThemeToQuasar(undefined);

        expect(result1).toBe('auto');
        expect(result2).toBe('auto');
        expect(result3).toBe('auto');
    });
    it('should return auto when input is null', () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const result = AppSettingsService.convertThemeToQuasar(null);
        expect(result).toBe('auto');
    });
});
