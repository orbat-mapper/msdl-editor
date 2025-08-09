# Exporting Data

Learn how to export your MSDL scenarios in various formats.

## Export Options

MSDL Editor supports exporting scenarios in multiple formats to suit different use cases and target systems.

### Available Export Formats

- **MSDL XML**: Standard MSDL format for interoperability
- **JSON**: For web applications and data processing
- **CSV**: Spreadsheet format for analysis
- **KML**: For viewing in Google Earth and GIS applications

## How to Export

### Basic Export Process

1. Click the **"Export"** button in the main toolbar
2. Select your desired export format from the dropdown
3. Choose a filename and location
4. Click "Save" to download the file

### Export Settings

Depending on the format, you may have additional options:

- **Include metadata**: Export scenario-level information
- **Coordinate system**: Choose the geographic coordinate system
- **Compression**: Create ZIP archives for large datasets
- **Validation**: Ensure exported data meets format standards

## Export Formats in Detail

### MSDL XML Export

The standard format for military scenario exchange:

- **Use case**: Sharing with other MSDL-compatible systems
- **Features**: Full scenario fidelity, all MSDL elements preserved
- **File extension**: `.xml`

### JSON Export

Machine-readable format for developers:

- **Use case**: Integration with web applications, data analysis
- **Features**: Lightweight, easy to parse programmatically
- **File extension**: `.json`

### CSV Export

Tabular format for spreadsheet applications:

- **Use case**: Data analysis, reporting, Excel integration
- **Features**: Flat structure, suitable for statistical analysis
- **File extension**: `.csv`

### KML Export

Geographic format for mapping applications:

- **Use case**: Visualization in Google Earth, GIS systems
- **Features**: Geographic visualization, 3D viewing capabilities
- **File extension**: `.kml`

## Best Practices

### Before Exporting

1. **Validate your scenario**: Fix any validation errors
2. **Review data**: Check that all information is correct
3. **Set metadata**: Ensure scenario information is complete

### Choosing Export Format

- **For sharing**: Use MSDL XML for maximum compatibility
- **For analysis**: Use CSV for spreadsheet applications
- **For visualization**: Use KML for geographic applications
- **For development**: Use JSON for custom applications

### File Management

- **Use descriptive names**: Include version and date information
- **Organize files**: Create folders for different scenarios
- **Backup regularly**: Keep copies of important scenarios

## Troubleshooting Export Issues

### Common Problems

- **Large file sizes**: Consider compression or selective export
- **Validation errors**: Fix schema compliance issues before export
- **Coordinate issues**: Verify coordinate system settings
- **Missing data**: Check that all required fields are populated

### Performance Tips

- **Export subsets**: For large scenarios, export sections separately
- **Use compression**: ZIP files for better storage efficiency
- **Batch operations**: Export multiple scenarios efficiently

## Next Steps

- Return to [editing scenarios](./editing-scenarios)
- Learn about [loading files](./loading-files)
- Start with the [getting started guide](./getting-started)