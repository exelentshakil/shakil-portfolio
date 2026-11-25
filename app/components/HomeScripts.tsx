"use client";

import { useEffect } from "react";
import { HOME_JS } from "./home-data";
import "../chat-window.css";
import "../site-chrome.css";

export default function HomeScripts() {
  useEffect(() => {
    const w = window as unknown as { __homeInit?: boolean };
    if (w.__homeInit) return;
    w.__homeInit = true;
    new Function(HOME_JS)();
  }, []);
  return null;
}
