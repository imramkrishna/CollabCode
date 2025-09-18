   function getIconByExtension(extension: string) {
        switch (extension) {
            // JavaScript & TypeScript
            case 'js':
            case 'jsx':
                return '🟨'; // JavaScript
            case 'ts':
            case 'tsx':
                return '🔷'; // TypeScript
            case 'mjs':
            case 'cjs':
                return '🟨'; // JavaScript modules
            
            // Web Technologies
            case 'html':
            case 'htm':
                return '🌐'; // HTML
            case 'css':
            case 'scss':
            case 'sass':
            case 'less':
                return '🎨'; // CSS/Styling
            case 'vue':
                return '💚'; // Vue.js
            case 'svelte':
                return '🧡'; // Svelte
            
            // Python
            case 'py':
            case 'pyx':
            case 'pyw':
            case 'pyi':
                return '�'; // Python
            case 'ipynb':
                return '📊'; // Jupyter Notebook
            
            // Java & JVM Languages
            case 'java':
                return '☕'; // Java
            case 'kt':
            case 'kts':
                return '🟣'; // Kotlin
            case 'scala':
                return '🔴'; // Scala
            case 'groovy':
                return '🟫'; // Groovy
            case 'clj':
            case 'cljs':
                return '🟢'; // Clojure
            
            // C/C++ Family
            case 'c':
                return '⚙️'; // C
            case 'cpp':
            case 'cxx':
            case 'cc':
            case 'c++':
                return '⚙️'; // C++
            case 'h':
            case 'hpp':
            case 'hxx':
                return '📋'; // Header files
            case 'cs':
                return '🔵'; // C#
            
            // Mobile Development
            case 'swift':
                return '🦉'; // Swift
            case 'm':
            case 'mm':
                return '📱'; // Objective-C
            case 'dart':
                return '🎯'; // Dart/Flutter
            
            // Other Languages
            case 'go':
                return '🐹'; // Go
            case 'rs':
                return '🦀'; // Rust
            case 'php':
                return '🐘'; // PHP
            case 'rb':
            case 'rbw':
                return '💎'; // Ruby
            case 'pl':
            case 'pm':
                return '🐪'; // Perl
            case 'r':
            case 'rmd':
                return '📈'; // R
            case 'jl':
                return '🟡'; // Julia
            case 'lua':
                return '🌙'; // Lua
            case 'sh':
            case 'bash':
            case 'zsh':
            case 'fish':
                return '🐚'; // Shell scripts
            case 'ps1':
            case 'psm1':
                return '🔷'; // PowerShell
            case 'bat':
            case 'cmd':
                return '⚫'; // Batch files
            
            // Functional Languages
            case 'hs':
            case 'lhs':
                return '🟪'; // Haskell
            case 'ml':
            case 'mli':
                return '🟠'; // OCaml
            case 'fs':
            case 'fsx':
                return '🔵'; // F#
            case 'elm':
                return '🌳'; // Elm
            case 'ex':
            case 'exs':
                return '🟣'; // Elixir
            case 'erl':
            case 'hrl':
                return '🔴'; // Erlang
            
            // Data & Config Files
            case 'json':
            case 'jsonc':
                return '📋'; // JSON
            case 'xml':
            case 'xsd':
            case 'xsl':
                return '📄'; // XML
            case 'yaml':
            case 'yml':
                return '📝'; // YAML
            case 'toml':
                return '⚙️'; // TOML
            case 'ini':
            case 'cfg':
            case 'conf':
                return '⚙️'; // Config files
            case 'env':
                return '🔐'; // Environment files
            
            // Database
            case 'sql':
            case 'mysql':
            case 'pgsql':
                return '🗄️'; // SQL
            case 'db':
            case 'sqlite':
            case 'sqlite3':
                return '�'; // Database files
            
            // Documentation
            case 'md':
            case 'markdown':
                return '📝'; // Markdown
            case 'txt':
                return '�📄'; // Text
            case 'rst':
                return '📚'; // reStructuredText
            case 'adoc':
            case 'asciidoc':
                return '�'; // AsciiDoc
            case 'tex':
            case 'latex':
                return '�📄'; // LaTeX
            
            // Images
            case 'jpg':
            case 'jpeg':
            case 'png':
            case 'gif':
            case 'webp':
            case 'bmp':
            case 'tiff':
            case 'tif':
                return '🖼️'; // Images
            case 'svg':
                return '🎨'; // SVG
            case 'ico':
                return '🔷'; // Icons
            
            // Audio & Video
            case 'mp3':
            case 'wav':
            case 'flac':
            case 'aac':
            case 'ogg':
                return '🎵'; // Audio
            case 'mp4':
            case 'avi':
            case 'mov':
            case 'wmv':
            case 'flv':
            case 'webm':
                return '🎬'; // Video
            
            // Archives
            case 'zip':
            case 'rar':
            case '7z':
            case 'tar':
            case 'gz':
            case 'bz2':
            case 'xz':
                return '📦'; // Archives
            
            // Documents
            case 'pdf':
                return '📕'; // PDF
            case 'doc':
            case 'docx':
                return '📘'; // Word
            case 'xls':
            case 'xlsx':
                return '📗'; // Excel
            case 'ppt':
            case 'pptx':
                return '�'; // PowerPoint
            
            // Build & Package Files
            case 'dockerfile':
                return '🐳'; // Docker
            case 'makefile':
            case 'make':
                return '🔨'; // Makefile
            case 'gradle':
                return '🐘'; // Gradle
            case 'maven':
            case 'pom':
                return '📦'; // Maven
            case 'npm':
            case 'yarn':
                return '�'; // Package managers
            
            // Version Control
            case 'gitignore':
            case 'gitattributes':
                return '🌳'; // Git
            
            // Special Files
            case 'license':
            case 'licence':
                return '📜'; // License
            case 'readme':
                return '📖'; // README
            case 'changelog':
                return '📋'; // Changelog
            
            // Default fallback
            default:
                return '�📄'; // Generic file
        }
    }
    export default getIconByExtension;