#!/bin/sh

EXTENSIONS_FILE=".vscode/extensions.json"
EXTENSIONS=$(grep -o '"[^"]*"' $EXTENSIONS_FILE | grep -v 'recommendations' | sed 's/"//g')

# https://github.com/microsoft/vscode-remote-release/issues/8535
export code="$(ls ~/.vscode-server*/bin/*/bin/code-server* | head -n 1)"

for EXTENSION in $EXTENSIONS; do
    $code --install-extension $EXTENSION
done
