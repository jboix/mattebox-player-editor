# AGENTS.md — Standing instructions for the Mattebox player editor

Place this at the repository root. It applies to every deliverable.

---

## What this project is

The **Mattebox player editor** is a static page: two documents in Monaco,
the stylesheet and the markup of a `<mattebox-player>`, and the player in a
preview that follows them. It runs on the published `@mattebox/player`, its
diagnostics and the `mattebox` engine. Read `docs/architecture.md` before
doing anything.

The editor exists to show what the player's styling seam can do with nothing
added to the player: `::part()`, the inherited `--mbx-*` tokens, tag
selectors on the controls, and the markup that composes them. What it
exports is what a page pastes. When a feature would need something the
player does not offer, that is a finding for the player's integrator log,
not a workaround in here.

## Non-negotiable rules

1. **The documents are the one truth.** The preview shows them, storage and
   the share hash carry them, the toolbar writes into them. Nothing holds
   state the documents do not.

2. **Runtime dependencies are the player, its diagnostics, the engine and
   Monaco.** Nothing else. `dependency-cruiser` enforces the list. Do not add
   a dependency to work around a problem.

3. **The player is reached through its package entries.** Its parts, tokens,
   attributes and tags are the seam; nothing under its `dist/` is.

4. **The editor's own UI is framework-free custom elements**, prefixed
   `mbe-`, like the player's controls are `mbx-`. No framework, no component
   library.

5. **The preview is a page.** The theme applies as page CSS in the preview's
   shadow tree. Never reach into the player's shadow roots to style them;
   what `::part()` cannot reach, the theme cannot reach either.

6. **Every workaround of the player is called out in a comment** where it
   happens: what was wanted, what had to be done instead, and which surface
   of the player would have made it one line.

7. **Banned TypeScript:** non-const `enum`, `namespace`, parameter properties,
   decorators.

## Before writing code

- Read the player's guide chapter 03, the element, for the parts, the tokens
  and the state attributes. The preset test holds the presets to that list.
- Check `src/workspace.ts` and `src/ui-state.ts`. The two concepts are fixed:
  the workspace (the documents) and the UI state (the layout). Do not invent
  parallel state.

## While writing code

- Explicit `.js` extensions in all import specifiers.
- `import type` for type-only imports.
- Comments explain **why**. Cite the player's guide chapter when a rule comes from it.

## Writing

Documentation, comments, commit messages, and user-facing strings use direct language.

- Write plain declarative sentences. State the fact, then at most one sentence of why.
- No em-dashes. Use commas, colons, parentheses, periods.
- No rambling, aphorisms, or clever turns. No "X is what makes Y"; write the fact or "Y because X".
- No idioms or unusual verbs. Name things for what they are. No cute jargon.
- One fact per bullet. Paragraphs of one to three short sentences.
- Reference docs carry no essays. A one-line table entry is the documentation; add a section only when asked.

## Before declaring a deliverable complete

Run every gate and paste the **actual output** into the handoff report:

```bash
npm run verify        # every gate, in CI's order
```

Then open the page (`npm run dev`) and check what the tests cannot: the
player plays, a stylesheet edit restyles it live, a markup edit recomposes
the bar, each preset applies, the preview docks on the four edges.

## Handoff report format

End every deliverable with:

```markdown
## Deliverable N Handoff

### Built
<file-by-file summary>

### Definition of Done
- [x] item — evidence
- [ ] item — why not

### Deviations from the prompt
<what, why, and whether docs need updating>

### Decisions not covered by the prompt
<anything you had to choose; flag for human review>

### Gate output
<actual command output, pasted>

### Findings for the player
<what the editor could not do with the player's seam, ordered by how much each hurt>
```

## Scope discipline

**Do not build ahead.** If you believe a deliverable's scope is wrong, say
so in the handoff report and stop. Do not expand scope unilaterally.

## When the prompt is wrong or silent

1. Check the player's guide; the option may already be decided there.
2. If still wrong, implement what you believe is correct, and **document the
   deviation prominently** in the handoff report.
3. Never silently deviate.
