#!/usr/bin/env bash
set -e

echo "🔧 Updating git submodules (if any)..."
git submodule update --init --recursive || true

echo ""
echo ""
echo "📦 Installing root dependencies..."
bun install

echo "🔨 Building all plugins..."
for plugin in plugin-*; do
    if [ -d "$plugin/src" ]; then
        echo "🚀 Building $plugin..."

        if [ -f "$plugin/package.json" ]; then
            echo ""
            echo ""
            echo "📦 Installing $plugin dependencies..."
            (cd "$plugin" && bun install && bun run build)
        fi
        
    else
        echo "⚠️ Skipping $plugin (no src folder)"
    fi
done

echo ""
echo ""
echo "🧱 Building main nounspace agents application..."
bun run build

echo "🎉 Build completed successfully!"

