import { useAppStore } from 'src/stores/app-store';

export const TranslateProperty = <Type, Key extends keyof Type>(
    object: Type,
    property: Key | Key[] = 'label' as Key
): Type => {
    if (!object) {
        return object;
    }
    if (!Array.isArray(property)) {
        property = [property];
    }
    const $t = useAppStore().$t;
    for (const prop of property) {
        (object[prop] as unknown as string) = $t(object[prop] as string);
    }
    return object;
};

export const TranslateItemsProperty = <Type, Key extends keyof Type>(
    collection: Type[],
    property: Key | Key[] = 'label' as Key
): Type[] => {
    for (const item of collection) {
        TranslateProperty(item, property);
    }
    return collection;
};
