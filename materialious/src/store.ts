import { persisted } from 'svelte-persisted-store';
import { writable, type Writable } from 'svelte/store';

export const returnYTDislikesInstance = persisted('returnYTDislikesInstance', import.meta.env.VITE_DEFAULT_RETURNYTDISLIKES_INSTANCE);
export const darkMode: Writable<null | boolean> = persisted("darkMode", null);
export const themeColor: Writable<null | string> = persisted("themeColor", null);

export const activePage: Writable<string | null> = writable("home");

export const playerAutoPlay = persisted("autoPlay", true);
export const playerAlwaysLoop = persisted("alwaysLoop", false);
export const playerProxyVideos = persisted("proxyVideos", false);
export const playerListenByDefault = persisted("listenByDefault", false);
export const playerSavePlaybackPosition = persisted("savePlaybackPosition", true);
export const playerDash = persisted("dashEnabled", false);

export const returnYtDislikes = persisted("returnYtDislikes", true);

export const interfaceSearchSuggestions = persisted("searchSuggestions", true);

export const auth: Writable<null | { username: string, token: string; }> = persisted("authToken", null);

export const sponsorBlock = persisted("sponsorBlock", true);
export const sponsorBlockUrl = persisted("sponsorBlockUrl", import.meta.env.VITE_DEFAULT_SPONSERBLOCK_INSTANCE);
export const sponsorBlockCategories: Writable<string[]> = persisted("sponsorBlockCategories", []);