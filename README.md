# Bmb all download

<div align="center">

![VideoDownCut Logo](https://img.shields.io/badge/📹-VideoDownCut-blue?style=for-the-badge&labelColor=black)

[![Next.js](https://img.shields.io/badge/Next.js-14.1.0-blue.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.3-blue.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**Elegant web platform for downloading, editing, and converting videos from any website.**

[Features](#-features) •
[Demo](#-demo) •
[Installation](#-installation) •
[Usage](#-usage) •
[Architecture](#-architecture) •
[Technologies](#%EF%B8%8F-technologies) •
[License](#-license)

</div>

## ✨ Features

- **Universal Download** - Support for YouTube, Vimeo, Twitter, Instagram, and hundreds of other platforms
- **Visual Editor** - Intuitive interface with timeline for precise cuts
- **Multiple Formats** - Export in various video formats (MP4, WebM, MKV) and audio (MP3)
- **Cloud Processing** - All processing load happens on the server, not in the browser
- **Responsive Design** - Modern interface that works on mobile and desktop devices
- **No Installation** - 100% web application, no software installation needed

## 🎬 Demo

<div align="center">
  
  ![VideoDownCut Demo](https://placehold.co/800x450/3b82f6/FFFFFF/png?text=VideoDownCut+Demo)
  
  [See live demo](videodowncut.com)
</div>

## 🚀 Installation

### Prerequisites

- Node.js 18 or higher
- VideoDownCut API backend configured (see below)

### Frontend

```bash
# Clone the repository
git clone https://github.com/novaxmd/Bmb-all-dowload.git
cd VideoDownCut

# Install dependencies
npm install

# Configure .env.local
cp .env.example .env
# Edit .env and configure NEXT_PUBLIC_BACKEND_URL

# Start the development server
npm run dev
```

### Backend (API)

VideoDownCut requires a dedicated backend for processing operations. See the [backend repository](https://github.com/novaxmd/Bmb-all-dowload-api) for installation instructions.

## 📖 Usage

1. **Video Download**
   - Paste the video URL in the input box
   - Click "Download Video"
   - Wait for processing

2. **Editing**
   - Use the timeline to select the desired segment
   - Choose the output format (video or audio)
   - Configure additional options if needed

3. **Export**
   - Click "Cut Video" or "Extract MP3"
   - After processing, use the "Download Now" button

## 🏗️ Architecture

VideoDownCut uses a client-server architecture to distribute the processing load:

- **Frontend (Next.js)**: User interface and interaction logic
- **Backend (Node.js)**: Heavy video processing with:
  - yt-dlp for downloads
  - FFmpeg for media manipulation
  - Temporary file storage

This separation allows:

1. Hosting the frontend on Vercel without runtime limitations
2. Processing larger videos without resource constraints
3. Maintaining a video cache to avoid redownloads
4. Better performance in video processing

## 🛠️ Technologies

- [Next.js](https://nextjs.org/) - React framework for production
- [React](https://reactjs.org/) - Frontend library
- [TypeScript](https://www.typescriptlang.org/) - Static typing
- [Tailwind CSS](https://tailwindcss.com/) - Utility CSS framework
- [Node.js](https://nodejs.org/) - JavaScript runtime
- [FFmpeg](https://ffmpeg.org/) - Media processing
- [yt-dlp](https://github.com/yt-dlp/yt-dlp) - Video downloads

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 💡 Contributions

Contributions are welcome! Feel free to open issues or pull requests.

---

<div align="center">
  
  Developed with ❤️ by [Bmb Tech](https://github.com/novaxmd)
  
  ⭐ Like this project? [Give it a star on GitHub](https://github.com/novaxmd/Bmb-all-dowload)
</div> 