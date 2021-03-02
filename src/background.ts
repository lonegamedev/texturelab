"use strict";

import { app, protocol, BrowserWindow } from "electron";
import {
	createProtocol,
	installVueDevtools
} from "vue-cli-plugin-electron-builder/lib";
import { setupMenu } from "./menu";
const isDevelopment = process.env.NODE_ENV !== "production";

app.commandLine.appendSwitch("--disable-seccomp-filter-sandbox");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win: BrowserWindow | null;

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
	{ scheme: "app", privileges: { secure: true, standard: true } }
]);

function createWindow() {
	// Create the browser window.
	win = new BrowserWindow({
		width: 1280,
		height: 720,
		frame: false,
		webPreferences: {
			nodeIntegration: true,
			webSecurity: false
		}
	});
	win.maximize();

	setupMenu();

	if (process.env.WEBPACK_DEV_SERVER_URL) {
		// Load the url of the dev server if in development mode
		win.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string);
		//if (!process.env.IS_TEST) win.webContents.openDevTools();
	} else {
		createProtocol("app");
		// Load the index.html when not in development
		win.loadURL("app://./index.html");
	}

	win.on("closed", () => {
		win = null;
	});
}

// Quit when all windows are closed.
app.on("window-all-closed", () => {
	// On macOS it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (win === null) {
		createWindow();
	}
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
	if (isDevelopment && !process.env.IS_TEST) {
		// Install Vue Devtools
		try {
			await installVueDevtools();
		} catch (e) {
			console.error("Vue Devtools failed to install:", e.toString());
		}
	}
	
	// needed for image files to work
	// https://github.com/electron/electron/issues/23393
	protocol.registerFileProtocol('image', (request, callback) => {
		const url = request.url.replace('image://', '')

		try {
		  return callback(url)
		}
		catch (error) {
		  console.error(error)
		  return callback("");
		}
	  })

	  createWindow();
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
	if (process.platform === "win32") {
		process.on("message", data => {
			if (data === "graceful-exit") {
				app.quit();
			}
		});
	} else {
		process.on("SIGTERM", () => {
			app.quit();
		});
	}
}
