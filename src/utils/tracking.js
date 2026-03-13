const OUTBOUND_BASE_URL = 'https://ricoai.app/api/outbound';
const RICO_BASE_URL = 'https://ricoai.app';
const APP_STORE_DIRECT_URL = 'https://apps.apple.com/us/app/rico-ai-skincare-scanner/id6741412208';

const DEFAULT_UTM = {
    utm_source: 'direct',
    utm_medium: 'website',
    utm_campaign: 'homepage',
};

const getSourceParams = () => {
    if (typeof window === 'undefined') {
        return new URLSearchParams();
    }
    return new URLSearchParams(window.location.search);
};

const appendIfPresent = (params, key, value) => {
    if (value) params.set(key, value);
};

const buildUtmParams = (context = 'primary_cta') => {
    const sourceParams = getSourceParams();
    const utmParams = new URLSearchParams();

    appendIfPresent(utmParams, 'utm_source', sourceParams.get('utm_source') || DEFAULT_UTM.utm_source);
    appendIfPresent(utmParams, 'utm_medium', sourceParams.get('utm_medium') || DEFAULT_UTM.utm_medium);
    appendIfPresent(utmParams, 'utm_campaign', sourceParams.get('utm_campaign') || DEFAULT_UTM.utm_campaign);
    appendIfPresent(utmParams, 'utm_term', sourceParams.get('utm_term'));
    appendIfPresent(utmParams, 'utm_id', sourceParams.get('utm_id'));

    // Keep ad click identifiers intact for downstream attribution.
    appendIfPresent(utmParams, 'gclid', sourceParams.get('gclid'));
    appendIfPresent(utmParams, 'fbclid', sourceParams.get('fbclid'));
    appendIfPresent(utmParams, 'ttclid', sourceParams.get('ttclid'));

    utmParams.set('utm_content', context || sourceParams.get('utm_content') || 'primary_cta');
    return utmParams;
};

export const APP_STORE_LINK = APP_STORE_DIRECT_URL;

export const trackEvent = (eventName, params = {}) => {
    console.log(`[Track Event]: ${eventName}`, params);
};

export const getUTMLink = (context = 'primary_cta') => {
    const sourceParams = getSourceParams();

    // Primary path: direct App Store with campaign context (never 404).
    const appStoreParams = new URLSearchParams();
    appStoreParams.set('ct', context || 'primary_cta');
    appStoreParams.set('pt', sourceParams.get('utm_source') || DEFAULT_UTM.utm_source);
    appStoreParams.set('mt', '8');
    return `${APP_STORE_DIRECT_URL}?${appStoreParams.toString()}`;
};

export const getTrackedRicoLink = (path = '/', context = 'site_link') => {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    const linkParams = buildUtmParams(context);
    return `${RICO_BASE_URL}${normalizedPath}?${linkParams.toString()}`;
};
