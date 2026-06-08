import { create } from "zustand";

interface AppStore {
	liveMode: boolean;
	setLiveMode: (v: boolean) => void;
}

export const useAppStore = create<AppStore>((set) => ({
	liveMode: false,
	setLiveMode: (v: boolean) => set({ liveMode: v }),
}));

