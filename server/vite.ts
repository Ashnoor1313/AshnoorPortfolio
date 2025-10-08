import path from "path";
import fs from "fs";
import express, { type Express } from "express";
import type { Server } from "http";

const projectRoot = process.cwd();
const distPath = path.resolve(projectRoot, "dist", "public");
const clientIndexHtmlPath = path.resolve(projectRoot, "client", "index.html");

export function log(message: string): void {
  console.log(message);
}

export async function setupVite(app: Express, _server: Server): Promise<void> {
  const vite = await import("vite");
  const viteServer = await vite.createServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  app.use(viteServer.middlewares);

  // ✅ FIXED: use a regex instead of "*" or "(.*)"
  app.use(/.*/, async (req, res, next) => {
    try {
      const url = req.originalUrl;
      const rawTemplate = await fs.promises.readFile(clientIndexHtmlPath, "utf-8");
      const html = await viteServer.transformIndexHtml(url, rawTemplate);
      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (err) {
      viteServer.ssrFixStacktrace(err as Error);
      next(err);
    }
  });
}

export function serveStatic(app: Express): void {
  app.use(express.static(distPath, { index: false }));

  // ✅ FIXED: regex wildcard
  app.use(/.*/, (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}

