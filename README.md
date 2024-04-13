# github-excalidraw-render-extension

A chrome extension to render excalidraw files inside of the developer tools when saved in github

## Description

A lot of developers may use excalidraw for quick file updates when attempting to remember what their architecure looks like, or even the existing problem they're solving. That file is typically saved in the same file folder as the rest of the code they're working on. However when tthis file is eventually saved to a source control platform like github, that file is not longer viewable online, which means any changes must be exported and viewed locally.

In order to remove this experience the `github-excalidraw-render-extension` will extract the `.excalidraw` file. Export that content display it for use inside of the developer tools for the user to see.

## Privacy Policy

The `github-excalidraw-render-extension` collects `.excalidraw` payloads off of sites that the user grants the extension access to, that said the extension does not utilize any form of remote code to transfer these files anywhere. The payloads that are collected are entirely stored on the user's local storage within their web browser and only utilize for display purposes within the browsers developer tools.

## Contributing

### Prerequisites

An engineer should be familiar with the following prior to working on this project

- Typescript
- React
- Bun
- Chrome API
- Chrome Extensions

### Installation

This application requires the following to be installed on your machine for local development

- Chrome
- Node `18.x.x`

1. Install all node modules via: `bun install`
2. Build the application via: `bun run build:manifest`
3. Load the extension unpacked via the `dist` folder
4. Begin testing!

Note: The application will require a manual refresh in chrome everytime changes are made and built

### Pull Requests

Feel free to commit and make any updates you wish to the extension, and publish those changes in a PR for review. Include screenshots or videos of working functionality prior to marking your PR ready for review.
