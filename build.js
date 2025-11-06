/**
 * Script de build simple pour bundler les modules ES6
 * Concatène tous les fichiers en respectant les dépendances
 */

const fs = require('fs');
const path = require('path');

// Configuration du build
const config = {
    srcDir: './src',
    outputFile: './script.js',
    excludeFiles: ['main.js'], // Sera ajouté à la fin
    includeMain: true
};

/**
 * Récupère récursivement tous les fichiers .js
 * @param {string} dir
 * @param {string[]} excludeFiles
 * @returns {string[]}
 */
function getAllJSFiles(dir, excludeFiles = []) {
    const files = [];

    function scanDirectory(currentDir) {
        const items = fs.readdirSync(currentDir);

        items.forEach(item => {
            const fullPath = path.join(currentDir, item);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                scanDirectory(fullPath);
            } else if (item.endsWith('.js') && !excludeFiles.includes(item)) {
                files.push(fullPath);
            }
        });
    }

    scanDirectory(dir);
    return files;
}

/**
 * Trie les fichiers selon les dépendances
 * @param {string[]} files
 * @returns {string[]}
 */
function sortFilesByDependencies(files) {
    const order = [
        // 1. Types et constantes partagés
        'shared/types/index.js',
        'shared/constants/index.js',

        // 2. Utilitaires partagés
        'shared/utils/',

        // 3. Entités du domaine
        'domain/entities/',

        // 4. Services du domaine
        'domain/services/',

        // 5. Repositories du domaine
        'domain/repositories/',

        // 6. Index du domaine
        'domain/index.js',

        // 7. Use cases de l'application
        'application/useCases/',
        'application/index.js',

        // 8. Infrastructure
        'infrastructure/api/',
        'infrastructure/storage/',
        'infrastructure/ui/',
        'infrastructure/index.js',

        // 9. Présentation
        'presentation/controllers/',
        'presentation/index.js',

        // 10. Main (toujours à la fin)
        'main.js'
    ];

    return files.sort((a, b) => {
        const aRelative = path.relative(config.srcDir, a);
        const bRelative = path.relative(config.srcDir, b);

        // Trouver l'ordre de chaque fichier
        const aOrder = order.findIndex(pattern => aRelative.includes(pattern.replace(/\/$/, '')));
        const bOrder = order.findIndex(pattern => bRelative.includes(pattern.replace(/\/$/, '')));

        if (aOrder !== -1 && bOrder !== -1) {
            return aOrder - bOrder;
        }

        if (aOrder !== -1) return -1;
        if (bOrder !== -1) return 1;

        return aRelative.localeCompare(bRelative);
    });
}

/**
 * Convertit les imports/exports ES6 en syntaxe compatible
 * @param {string} content
 * @param {string} filePath
 * @returns {string}
 */
function convertES6Modules(content, filePath) {
    let converted = content;

    // Convertir les imports nommés
    converted = converted.replace(
        /import\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"]/g,
        (match, imports, modulePath) => {
            // Pour la simplicité, on commente les imports dans le bundle
            return `// import {${imports}} from '${modulePath}'`;
        }
    );

    // Convertir les imports par défaut
    converted = converted.replace(
        /import\s+(\w+)\s+from\s+['"]([^'"]+)['"]/g,
        (match, varName, modulePath) => {
            return `// import ${varName} from '${modulePath}'`;
        }
    );

    // Convertir les exports
    converted = converted.replace(
        /export\s+(const|let|var|function|class)\s+(\w+)/g,
        (match, type, name) => {
            return `${type} ${name}`;
        }
    );

    // Convertir les exports nommés
    converted = converted.replace(
        /export\s+{\s*([^}]+)\s*}/g,
        (match, exports) => {
            return `// export {${exports}}`;
        }
    );

    // Convertir les exports par défaut
    converted = converted.replace(
        /export\s+default\s+(\w+)/g,
        (match, name) => {
            return `// export default ${name}`;
        }
    );

    return converted;
}

/**
 * Bundle tous les fichiers
 */
function build() {
    console.log('🔨 Construction du bundle...');

    try {
        // Récupérer tous les fichiers JS
        const jsFiles = getAllJSFiles(config.srcDir, config.excludeFiles);
        console.log(`📁 ${jsFiles.length} fichiers JavaScript trouvés`);

        // Trier selon les dépendances
        const sortedFiles = sortFilesByDependencies(jsFiles);
        console.log('📋 Fichiers triés par dépendances');

        // Concaténer le contenu
        let bundleContent = `/**
 * Bundle Bien-Rentré - Généré automatiquement
 * Date: ${new Date().toISOString()}
 */\n\n`;

        sortedFiles.forEach(filePath => {
            const relativePath = path.relative(config.srcDir, filePath);
            console.log(`📄 Ajout de ${relativePath}`);

            const content = fs.readFileSync(filePath, 'utf8');
            const converted = convertES6Modules(content, filePath);

            bundleContent += `\n// ===== ${relativePath} =====\n`;
            bundleContent += converted;
            bundleContent += '\n';
        });

        // Ajouter le fichier main.js à la fin si demandé
        if (config.includeMain) {
            const mainPath = path.join(config.srcDir, 'main.js');
            if (fs.existsSync(mainPath)) {
                console.log('📄 Ajout de main.js');
                const mainContent = fs.readFileSync(mainPath, 'utf8');
                bundleContent += `\n// ===== main.js =====\n`;
                bundleContent += mainContent;
            }
        }

        // Écrire le fichier de sortie
        fs.writeFileSync(config.outputFile, bundleContent);
        console.log(`✅ Bundle créé: ${config.outputFile}`);
        console.log(`📊 Taille: ${(bundleContent.length / 1024).toFixed(2)} KB`);

    } catch (error) {
        console.error('❌ Erreur lors du build:', error);
        process.exit(1);
    }
}

// Lancer le build
if (require.main === module) {
    build();
}

module.exports = { build };
