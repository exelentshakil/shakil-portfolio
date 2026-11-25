"use client";

import { useEffect, useRef } from "react";
import { WINDOW_HTML, WINDOW_JS } from "./chat-window-data";
import "../chat-window.css";

export default function ChatWindow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || el.dataset.ready) return;
    el.dataset.ready = "1";
    new Function(WINDOW_JS)();
  }, []);

  return (
    <div id="vz">
      <div className="vz-window" ref={ref} dangerouslySetInnerHTML={{ __html: WINDOW_HTML }} />
    </div>
  );
}
