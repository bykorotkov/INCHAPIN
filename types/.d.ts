declare module "smooth-scrollbar" {
    interface ScrollbarOptions {
        damping?: number;
        thumbMinSize?: number;
        renderByPixels?: boolean;
        alwaysShowTracks?: boolean;
        continuousScrolling?: boolean;
        wheelEventTarget?: EventTarget;
        plugins?: any[];
    }

    export default class Scrollbar {
        constructor(selector: string | HTMLElement, options?: ScrollbarOptions);
        update(): void;
        destroy(): void;
    }
}

declare module 'react-fancybox';