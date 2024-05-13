import { contextBridge, ipcRenderer } from "electron";
import os from "os";

contextBridge.exposeInMainWorld("os", {
	homedir: () => os.homedir(),
});

type IPCData<T> = T;

contextBridge.exposeInMainWorld("ipcRenderer", {
	send: <C extends keyof unknown, T>(channel: C, data: IPCData<T>) =>
		ipcRenderer.send(channel, data),
	on: (channel: string, func) =>
		ipcRenderer.on(channel, (event, ...args) => func(...args)),
});
