# Loading Files

Learn how to load MSDL files into the editor.

## Supported File Types

MSDL Editor supports loading:

- **MSDL files** (`.xml`): Standard MSDL XML files
- **Compressed files**: ZIP archives containing MSDL files
- **Local files**: Files from your computer's file system

## How to Load Files

### From Local Storage

1. Click the **"Load File"** button in the main interface
2. Select your MSDL file using the file picker
3. The file will be loaded and displayed in the editor

### Drag and Drop

You can also drag and drop MSDL files directly onto the editor interface:

1. Open your file explorer
2. Drag the MSDL file into the browser window
3. Drop it on the editor interface
4. The file will be automatically loaded

## File Validation

When you load a file, MSDL Editor will:

- Validate the XML structure
- Check for MSDL schema compliance
- Display any errors or warnings
- Load valid content into the editor

## Troubleshooting

### File Won't Load

If your file won't load, check:

- **File format**: Ensure it's a valid XML file
- **File size**: Very large files may take longer to process
- **File encoding**: Files should use UTF-8 encoding
- **XML validity**: Check that the XML is well-formed

### Error Messages

Common error messages and solutions:

- **"Invalid XML"**: The file contains malformed XML syntax
- **"Schema validation failed"**: The file doesn't conform to MSDL standards
- **"File too large"**: The file exceeds size limits for browser processing

## Next Steps

Once your file is loaded:
- [Edit your scenario](./editing-scenarios)
- [Export your data](./exporting-data)