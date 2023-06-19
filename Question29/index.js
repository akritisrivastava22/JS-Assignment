//29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.


function getFileExtension(filename) {
    // Split the filename by dot to separate the name and extension
    const parts = filename.split('.');
    
    // Check if the filename has an extension
    if (parts.length > 1) {
      // Get the last part, which represents the extension
      const extension = parts[parts.length - 1];
      
      // Convert the extension to lowercase and return it
      return extension.toLowerCase();
    }
    
    // If no extension is found, return an empty string
    return '';
  }
  
  // Example usage
  const filename = 'example.txt';
  const extension = getFileExtension(filename);
  console.log(extension);
  