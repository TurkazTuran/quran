const fs = require('fs');

console.log('🔄 Starting conversion...\n');

try {
    // Check if file exists
    if (!fs.existsSync('quran_text_madina.ts')) {
        console.log('❌ Error: quran_text_madina.ts not found!');
        console.log('📥 Please download it from:');
        console.log('   https://github.com/DigitalKhatt/digitalkhatt.org/blob/master/ClientApp/src/app/services/quran_text_madina.ts');
        console.log('   Click the "Raw" button and save the file.\n');
        process.exit(1);
    }

    // Read the TypeScript file
    console.log('📖 Reading quran_text_madina.ts...');
    const tsContent = fs.readFileSync('quran_text_madina.ts', 'utf8');

    // Extract the array using regex
    console.log('🔍 Extracting Quran text data...');
    let match = tsContent.match(/export\s+const\s+quranText\s*=\s*(\[[\s\S]*\]);?/);
    if (!match) {
        match = tsContent.match(/let\s+quranText\s*=\s*(\[[\s\S]*\]);?/);
    }
    if (!match) {
        match = tsContent.match(/const\s+quranText\s*=\s*(\[[\s\S]*\]);?/);
    }

    if (!match) {
        throw new Error('Could not find quranText array in the file');
    }

    const arrayContent = match[1];

    // Validate JSON
    console.log('✔️  Validating JSON structure...');
    const parsed = JSON.parse(arrayContent);
    
    if (!Array.isArray(parsed) || parsed.length === 0) {
        throw new Error('Invalid data structure - expected non-empty array');
    }

    // Save to JSON file
    console.log('💾 Saving to quran-data.json...');
    fs.writeFileSync('quran-data.json', arrayContent, 'utf8');

    // Get file stats
    const stats = fs.statSync('quran-data.json');
    const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2);

    // Success message
    console.log('\n✅ SUCCESS!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`📄 File created: quran-data.json`);
    console.log(`📊 File size: ${fileSizeInMB} MB`);
    console.log(`📖 Pages: ${parsed.length}`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    console.log('🎉 You can now open quran-mushaf.html!\n');

} catch (error) {
    console.log('\n❌ Error:', error.message);
    console.log('\nPlease make sure:');
    console.log('1. The quran_text_madina.ts file is in the same directory');
    console.log('2. The file contains valid TypeScript/JavaScript array');
    console.log('3. The file is not corrupted\n');
    process.exit(1);
}
