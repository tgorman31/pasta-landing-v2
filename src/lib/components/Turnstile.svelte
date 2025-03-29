<script lang="ts">
    import { onMount } from 'svelte';
    import type { TurnstileOptions } from '$lib/types/turnstile';

    export let sitekey: string;
    export let theme: 'light' | 'dark' | 'auto' = 'light';
    export let callback: ((token: string) => void) | undefined = undefined;
    
    let widget: string | undefined;
    let turnstileElement: HTMLDivElement;

    onMount(() => {
        if (!window.turnstile) {
            const script = document.createElement('script');
            script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);

            script.onload = () => {
                renderWidget();
            };
        } else {
            renderWidget();
        }

        return () => {
            if (widget && window.turnstile) {
                window.turnstile.remove(widget);
            }
        };
    });

    function renderWidget(): void {
        if (turnstileElement && window.turnstile) {
            const options: TurnstileOptions = {
                sitekey,
                theme,
                callback: (token: string) => {
                    if (callback) callback(token);
                }
            };
            widget = window.turnstile.render(turnstileElement, options);
        }
    }
</script>

<div bind:this={turnstileElement} class="cf-turnstile"></div>

<style>
    .cf-turnstile {
        margin: 1rem 0;
    }
</style> 