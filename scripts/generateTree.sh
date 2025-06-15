#!/bin/bash

# Print folder structure up to 3 levels, excluding node_modules, .git, etc.
find . -type d \( -path "./node_modules" -o -path "./.git" -o -path "./.next" \) -prune -false -o -type d -print | sed 's/[^-][^\/]*\//  |/g;s/  |/├── /'
