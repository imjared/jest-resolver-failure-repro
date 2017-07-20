import _ from 'lodash';

export const i18n = (translations) => {
  return {
    'en-GB': _.mergeWith({}, translations[`en-US`], translations[`en-GB`]),
    'en-CA': _.mergeWith({}, translations[`en-US`], translations[`en-CA`]),
    'en-US': translations[`en-US`],
    'de-AT': _.mergeWith({}, translations[`en-US`], translations[`de-DE`], translations[`de-AT`]),
    'de-CH': _.mergeWith({}, translations[`en-US`], translations[`de-DE`], translations[`de-CH`]),
    'de-DE': _.mergeWith({}, translations[`en-US`], translations[`de-DE`]),
    'fr-CA': _.mergeWith({}, translations[`en-US`], translations[`fr-FR`], translations[`fr-CA`]),
    'fr-CH': _.mergeWith({}, translations[`en-US`], translations[`fr-FR`], translations[`fr-CH`]),
    'fr-FR': _.mergeWith({}, translations[`en-US`], translations[`fr-FR`]),
  };
};
