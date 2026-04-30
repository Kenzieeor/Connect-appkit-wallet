// Harus dijalankan sebelum Lit di-import

declare global {
  var litIssuedWarnings: Set<string> | undefined;
}

globalThis.litIssuedWarnings ??= new Set();

// Disable Lit dev mode warning
globalThis.litIssuedWarnings.add(
  "Lit is in dev mode. Not recommended for production! See https://lit.dev/msg/dev-mode for more information.",
);

// Disable Multiple versions warning
globalThis.litIssuedWarnings.add(
  "Multiple versions of Lit loaded. Loading multiple versions is not recommended. See https://lit.dev/msg/multiple-versions for more information.",
);

export {};
