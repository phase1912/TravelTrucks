export const icons = {
    'AC': 'icon-wind',
    'automatic': 'icon-diagram',
    'manual': 'icon-diagram',
    'kitchen': 'icon-cup-hot',
    'TV': 'icon-tv',
    'bathroom': 'icon-ph_shower',
    'camperVan': 'icon-bi_grid-1x2',
    'alcove': 'icon-bi_grid-3x3-gap',
    'fullyIntegrated': 'icon-bi_grid-2x2',
    'engine': 'icon-fuel-pump',
    'petrol': 'icon-fuel-pump',
    'diesel': 'icon-fuel-pump',
    'hybrid': 'icon-fuel-pump',
    'radio': 'icon-ui-radios',
    'refrigerator': 'icon-solar_fridge-outline',
    'microwave': 'icon-lucide_microwave',
    'gas': 'icon-hugeicons_gas-stove',
    'water': 'icon-ion_water-outline',
};
export const formsMapping = {
    'camperVan': 'van',
    'alcove': 'alcove',
    'fullyIntegrated': 'fully integrated',
};

export type FeatureKey = keyof typeof icons;
export type FormKey = keyof typeof formsMapping;