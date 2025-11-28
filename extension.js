import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';

// Empty entry point extension
// GNOME Shell 47+ automatically provides -st-accent-color and -st-accent-fg-color
// CSS variables, and stylesheet.css is automatically loaded on enable.
export default class TintedShellExtension extends Extension {
    enable() {
        // stylesheet.css is automatically loaded by GNOME Shell
    }

    disable() {
        // stylesheet.css is automatically unloaded by GNOME Shell
        // This extension supports 'unlock-dialog' in metadata.json to keep styling
        // consistent on the lock screen.
    }
}
