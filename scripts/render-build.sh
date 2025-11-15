#!/usr/bin/env bash
set -e

echo "🔧 Updating git submodules (if any)..."
git submodule update --init --recursive || true

echo "📦 Installing root dependencies..."
bun install

echo "🔨 Building all plugins..."
for plugin in plugin-*; do
    if [ -d "$plugin/src" ]; then
        echo "🚀 Building $plugin..."
        bun install
        bun build "$plugin/src/index.ts" --outdir "$plugin/dist"
    else
        echo "⚠️ Skipping $plugin (no src folder)"
    fi
done

echo "🧱 Building main Eliza application..."
bun run build

echo "🎉 Build completed successfully!"
