# Nounspace Eliza Agents

Custom ElizaOS agents and plugins developed and maintained by the Nounspace engineering team.  
This repository contains the main agent project plus multiple external plugins included as **Git submodules**, enabling modular development and isolated plugin versioning.

---

# 🚀 What Is ElizaOS?

ElizaOS is an open-source framework for building, running, and orchestrating modern AI agents.

### Why we use it at Nounspace

- Modular plugin architecture (we maintain our own Farcaster & Twitter plugins)
- Multi-agent orchestration
- Model-agnostic (OpenAI, Ollama, Grok, Llama…)
- Built-in server + web interface
- Easy local development + clean deployment pipeline

More details can be found in the upstream project, but this README contains only what our team needs.

---

# 📦 Clone the Repo (With Submodules!)

This repo includes external plugins as submodules. Always clone recursively:

```bash
git clone --recursive https://github.com/Nounspace/nounspace-eliza-agents.git
````

If you already cloned without `--recursive`:

```bash
git submodule update --init --recursive
```

---

# 🏗 Build (Local or Render)

Nounspace uses a unified build script for local dev and Render deploys:

```
scripts/render-build.sh
```

Run it locally:

```bash
chmod +x scripts/render-build.sh
./scripts/render-build.sh
```

What the script does:

1. Updates all git submodules
2. Installs root dependencies
3. Builds every plugin found under `plugin-*`
4. Builds the main Eliza project

---

# 🔌 Working With Plugins (Important!)

Custom plugins are stored in:

```
plugin-farcaster/
plugin-twitter/
plugin-<more>/
```

Each plugin has its own package + build pipeline using `tsup`.

## Rebuilding a plugin (local development)

Whenever you modify a plugin:

```bash
cd plugin-farcaster   # or plugin-twitter
bun install
bun run build         # builds dist/
cd ..
```

Then start Eliza:

```bash
elizaos start
```

➡️ **ElizaOS will automatically load your plugin from the freshly built `dist/` folder.**

This flow ensures fast iteration with zero monorepo rebuilds.

---

# ▶️ Running the Agent

After the build script finishes:

### Production / Standard mode

```bash
bun run start
# or
elizaos start
```

This starts:

* backend server
* agents
* web UI (by default at [http://localhost:3000](http://localhost:3000))

### Development mode (with debugger attach)

```bash
bun run dev
# or
elizaos dev
```

This waits for a debugger on port **9229** before execution begins.

---

# 🧪 Testing

Before running any tests, dependencies specific to testing are auto-installed:

```bash
bun run test:install
```

### Run all tests

```bash
bun run test
```

### Component tests

Small, isolated, unit-level tests:

```bash
bun run test:component
```

### E2E tests (Cypress)

Full agent lifecycle tests via browser automation:

```bash
bun run test:e2e
```

Open Cypress UI:

```bash
bun run cy:open
```

### Coverage report

```bash
bun run test:coverage
```

### Watch mode (TDD)

```bash
bun run test:watch
```

---

# 🧹 Code Quality

Type check:

```bash
bun run type-check
```

Format:

```bash
bun run format
```

Verify formatting:

```bash
bun run format:check
```

Run everything before merging:

```bash
bun run check-all
```

---

# 🧠 Quick Summary of ElizaOS Core (For Nounspace Developers)

ElizaOS provides:

### 🔌 Rich Connectivity

Farcaster, Twitter (our custom), Discord, Telegram, and more.

### 🧠 Model-Agnostic

Supports OpenAI, Gemini, Grok, Llama, Ollama, etc.

### 🖥 Modern Web UI

Real-time agent dashboard for conversations, memory, groups, and threads.

### 👥 Multi-Agent Architecture

Specialized agents working together.

### 📄 Document ingestion (RAG)

Feed PDFs, notes, and indexed information into your agent.

### 🛠 Plugin System

We heavily rely on this — our Farcaster/Twitter plugins extend Eliza’s capabilities.

### 📦 Seamless Developer Experience

Local dev, debugging, tests, plugins — all integrated.

---

# 🧭 Architecture Overview

The upstream ElizaOS architecture looks like:

```
/packages
  server/        → Express backend for agents + API
  client/        → Web UI (React)
  cli/           → elizaos CLI
  core/          → Shared core systems
  plugin-*       → Official plugins
```

This project uses the official CLI + server packages but overrides plugins with our own.

---

# 🤝 Contributing (Internal)

* Always clone with `--recursive`
* Build individual plugins before starting Eliza
* Commit changes to submodules properly
  (`cd plugin-x && git push`)
* PRs should include:

  * passing tests
  * coverage not decreasing
  * type-safe code (type-check passing)
  * formatted code

---

# 📜 License

MIT (matching upstream ElizaOS)

---

# 🙏 Credits

ElizaOS team for the base platform.
Nounspace contributors for custom plugins and agent development.

