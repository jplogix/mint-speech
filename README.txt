# Mint Speech

> Your Voice, Refined — Premium neural text‑to‑speech for desktop

Mint Speech is a cross-platform desktop application that converts text into natural-sounding speech using multiple AI neural voice providers. Built with Electron and Next.js, it offers a beautiful, modern interface for high-quality text-to-speech generation.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey.svg)

## Features

- **Multiple Voice Providers**: Support for Edge TTS (Microsoft), Google Gemini, and ElevenLabs
- **Neural TTS**: High-quality AI voices with natural intonation
- **Cross-Platform**: Works on Windows, macOS, and Linux
- **Global Shortcuts**: Quick clipboard-to-speech conversion with customizable hotkeys
- **History & Bookmarks**: Save and replay your recent TTS generations
- **Usage Tracking**: Monitor character count and voice usage metrics
- **Audio Notifications**: Configurable audio feedback for TTS operations
- **Privacy-First**: All API keys stored locally, no data transmitted to third parties
- **Real-time Playback**: Instant speech generation with speed and volume controls

## Installation

### Prerequisites

- Node.js 18+ and Yarn
- For development: Git

### Development Setup

1. Clone the repository:
```bash
git clone https://github.com/jplogix/mint-speech.git
cd mint-speech
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
yarn dev
```

This will start both the Next.js web server and Electron app.

### Building for Production

Build the application for your platform:

```bash
yarn build:electron
```

The built application will be in the `dist` directory.

## Usage

### Basic Usage

1. Launch Mint Speech
2. Enter or paste text into the text area
3. Select a voice provider and voice
4. Click "Generate & Play" to hear your text

### Global Clipboard Shortcut

Configure a global shortcut (default: `Cmd+Shift+S` on macOS, `Ctrl+Shift+S` on Windows/Linux) to quickly convert selected text to speech:

1. Go to Settings → Shortcuts
2. Enable "Clipboard TTS"
3. Customize the shortcut if desired
4. Select text anywhere and press your shortcut

### Voice Providers

- **Edge TTS**: Free Microsoft neural voices, no API key required
- **Gemini**: Google AI Studio voices (requires API key)
- **ElevenLabs**: Premium studio-grade voices (Pro tier, requires API key)

## Development

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed development guidelines, including:

- Code style and formatting
- Testing requirements
- Commit message conventions
- Pull request process

### Available Scripts

- `yarn dev` - Start development server with hot reload
- `yarn build` - Build Next.js application
- `yarn build:electron` - Build Electron application
- `yarn test` - Run tests in watch mode
- `yarn test:run` - Run tests once
- `yarn lint` - Run ESLint
- `yarn type-check` - Run TypeScript type checking

## Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) for details on:

- How to submit pull requests
- Our code of conduct
- Development setup
- Commit message standards

## Sponsoring

Mint Speech is an open-source project. If you find it useful, please consider supporting its development:

- [GitHub Sponsors](https://github.com/sponsors/jplogix)
- [Ko-fi](https://ko-fi.com/jplogix)
- [Patreon](https://patreon.com/jplogix)

See [SPONSORING.md](SPONSORING.md) for more information.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Electron](https://www.electronjs.org/)
- UI powered by [Next.js](https://nextjs.org/) and [React](https://react.dev/)
- Voice providers: Microsoft Edge TTS, Google Gemini, ElevenLabs

## Author

**Jp Cabral**

- GitHub: [@jplogix](https://github.com/jplogix)

---

Made with ❤️ for the open source community