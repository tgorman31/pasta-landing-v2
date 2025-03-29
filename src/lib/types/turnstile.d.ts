export interface TurnstileObject {
    render: (container: HTMLElement, options: TurnstileOptions) => string;
    reset: (widgetId?: string) => void;
    remove: (widgetId: string) => void;
}

export interface TurnstileOptions {
    sitekey: string;
    theme?: 'light' | 'dark' | 'auto';
    callback?: (token: string) => void;
    'expired-callback'?: () => void;
    'error-callback'?: () => void;
    language?: string;
    tabindex?: number;
    'response-field'?: boolean;
    'response-field-name'?: string;
}

declare global {
    interface Window {
        turnstile?: TurnstileObject;
    }
} 