const fs = require('fs');
const path = require('path');
const { simplify } = require('@turf/simplify');

const originalDir = './original';
const simplifiedDir = './simplified';

// Read all files in the original directory
fs.readdir(originalDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Process each file
  files.forEach((file) => {
    const originalFilePath = path.join(originalDir, file);
    const simplifiedFilePath = path.join(simplifiedDir, file);

    // Read the original GeoJSON file
    fs.readFile(originalFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return;
      }

      try {
        const originalGeoJSON = JSON.parse(data);

        // Simplify the GeoJSON using @turf/simplify
        const simplifiedGeoJSON = simplify(originalGeoJSON, { tolerance: 0.01, highQuality: true });

        // Save the simplified GeoJSON to the simplified directory
        fs.writeFile(simplifiedFilePath, JSON.stringify(simplifiedGeoJSON), (err) => {
          if (err) {
            console.error('Error writing file:', err);
            return;
          }

          console.log(`Simplified file saved: ${simplifiedFilePath}`);
        });
      } catch (err) {
        console.error('Error parsing GeoJSON:', err);
      }
    });
  });
});