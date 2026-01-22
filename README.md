# M365 SPFx Section Headline

A SharePoint Framework (SPFx) web part that displays a section headline with a configurable vertical accent bar on the left side.

![Section Headline Example](docs/example.png)

## Features

- **Headline Text**: Configurable section headline
- **Accent Bar**: Vertical bar on the left side of the headline, vertically centered
- **Color Picker**: Choose any color for the accent bar
- **Left Padding**: Adjust horizontal alignment with left padding slider
- **Bar Width**: Configure the thickness of the accent bar
- **Bar Height Extension**: Control how far the bar extends above and below the text

## Installation

1. Download the `.sppkg` file from the `sharepoint/solution` folder
2. Upload to your SharePoint App Catalog
3. Deploy the solution
4. Add the "Section Headline" web part to any SharePoint page

## Configuration

Open the property pane to configure:

| Property | Description | Default |
|----------|-------------|---------|
| Headline Text | The text to display | "Section Headline" |
| Accent Bar Color | Color of the vertical bar | #ad3a39 (dark red) |
| Left Padding (px) | Padding from the left edge | 0 |
| Bar Width (px) | Width of the accent bar | 6 |
| Bar Height Extension (px) | How much the bar extends beyond the text | 8 |

## Development

### Prerequisites

- Node.js (v16 or v18 recommended)
- SPFx development environment

### Build Commands

```bash
# Install dependencies
npm install

# Start development server
gulp serve

# Bundle for production
gulp bundle --ship

# Create package
gulp package-solution --ship
```

## License

MIT
