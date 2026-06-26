# IF Library AGENTS

## Project State
- incubating

## Scope
- Standalone Vite/React visual-novel app for original-work adaptation stories.
- Current focus is the `review-main-002` folktale adaptation, `토끼와 자라`, split out from `weapon-reinforce` adventure play.
- Keep work inside this project folder unless the user explicitly asks for workspace-level changes.

## Source of Truth
- App code: `src/App.jsx`, `src/components/`, `src/main.jsx`
- Story catalog and runtime model: `src/data/stories.js`
- Canonical imported source files: `src/data/source/`
- Static assets: `public/images/adventure/`
- Production guidelines: `docs/README.md`, `docs/visual-novel-ui-guidelines.md`, `docs/visual-novel-script-guidelines.md`

## Run and Test Commands
- Install: `npm install`
- Dev server: `npm run dev -- --host 127.0.0.1 --port 5173`
- Build: `npm run build`
- Lint: `npm run lint`
- Story validation: `npm run validate:stories`

## Change Safety Rules
- Keep `review-main-002` as `review-candidate` until the user explicitly approves it.
- Do not mix archived draft-pool stories into the default catalog.
- Preserve source script content, route structure, endings, choice levels, and staging cues when editing story data.
- Backgrounds, sprites, and text-box UI stay separate; do not bake text boxes into images.
- Prefer small, user-visible checks after layout or story-flow changes, including mobile-width verification.

## Migration Note
- This is a new standalone app created in the WAN `apps/` workspace from the current `weapon-reinforce` adventure VN materials. It is not a migration of the full `weapon-reinforce` game.
