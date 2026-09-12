// The boundary rules. See docs/architecture.md.
module.exports = {
  forbidden: [
    {
      name: 'runtime-deps-are-the-player-the-engine-and-monaco',
      comment:
        'The editor runs on the player, its diagnostics, the engine the player needs, and ' +
        'Monaco. Nothing else at runtime: do not add a dependency to work around a problem.',
      severity: 'error',
      // The type reference in vite-env.d.ts names Vite's client types; a type is not a runtime dependency.
      from: { path: '^src/', pathNot: '\\.d\\.ts$' },
      to: {
        dependencyTypes: ['npm', 'npm-dev', 'npm-no-pkg', 'npm-unknown'],
        dependencyTypesNot: ['type-only', 'triple-slash-type-reference'],
        pathNot:
          'node_modules/(mattebox|@mattebox/player|@mattebox/player-diagnostics|monaco-editor)/',
      },
    },
    {
      name: 'the-player-is-reached-through-its-entries',
      comment:
        "The preview takes the player's package entries, never its dist internals. Its parts, " +
        'tokens and attributes are the public seam; nothing under dist/ is.',
      severity: 'error',
      from: { path: '^src/' },
      to: {
        path: 'node_modules/@mattebox/player(-diagnostics)?/dist/',
        pathNot:
          'node_modules/@mattebox/player(-diagnostics)?/dist/(es2015/)?(index|element-entry|entries/[^/]+)\\.js$',
      },
    },
    {
      name: 'only-the-entry-wires-the-page',
      comment:
        'main.ts reads the document and wires the modules. Every other module takes what it ' +
        'needs as arguments, so it is testable without the page.',
      severity: 'error',
      from: { path: '^src/', pathNot: '^src/main\\.ts$' },
      to: { path: '^src/main\\.ts$' },
    },
    {
      name: 'no-circular',
      severity: 'error',
      from: {},
      to: { circular: true },
    },
    {
      name: 'no-orphans',
      severity: 'warn',
      from: { orphan: true, pathNot: '\\.d\\.ts$' },
      to: {},
    },
  ],
  options: {
    tsConfig: { fileName: 'tsconfig.json' },
    doNotFollow: { path: 'node_modules' },
    // Type-only imports count.
    tsPreCompilationDeps: true,
  },
};
