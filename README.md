# DeckDeckGo - QR Code

Create a lightweight presentation using Web Components.

[DeckDeckGo] let you create without effort your slides and allows you to add some extra interactive features with the help of the [Ionic](https://ionicframework.com) components.

For the editing, [DeckDeckGo] supports both HTML or Markdown.

Moreover, [DeckDeckGo] bundles your presentation with services workers letting you publish it online as a Progressive Web App.

Cherry on the cake 🍒🎂 [DeckDeckGo] comes with its [Progressive Web App](https://deckdeckgo.app) that allows you to remote control your presentation 🚀

## Table of contents

- [QR Code](#qr-code)
- [Getting Started](#getting-started)
  - [Using DeckDeckGo QR Code from a CDN](#using-deckdeckgo-qr-code-from-a-cdn)
  - [Install DeckDeckGo QR Code from npm](#install-deckdeckgo-qr-code-from-npm)
  - [Framework integration](#framework-integration)
- [Usage](#usage)
  - [Properties](#properties)
  - [Styling](#styling)
  - [Methods](#methods)
- [License](#license)

## QR Code

This project has for goal to let you easily generate a QR code in your [DeckDeckGo] presentation.

However, this Web Component could be use with or without [DeckDeckGo] respectively could be use in any web projects.

## Getting Started

The [DeckDeckGo] - QR Code Web Component could be use directly in your project from a CDN, using a simple script include, or could be installed from [npm](https://www.npmjs.com/package/deckdeckgo-qrcode).

### Using DeckDeckGo QR Code from a CDN

It's recommended to use [unpkg](https://unpkg.com/) to use the [DeckDeckGo] Code from a CDN. To do so, add the following include script in the main HTML file of your project:

```
<script src="https://unpkg.com/deckdeckgo-qrcode@latest/dist/deckdeckgo-qrcode.js"></script>
```
### Install DeckDeckGo QR Code from NPM

Install [DeckDeckGo] - QR Code in your project from [npm](https://www.npmjs.com/package/deckdeckgo-qrcode) using the following command:

```bash
npm install deckdeckgo-qrcode
```

### Framework integration

The [Stencil documentation](https://stenciljs.com/docs/overview) provide examples of framework integration for [Angular](https://stenciljs.com/docs/angular), [React](https://stenciljs.com/docs/react), [Vue](https://stenciljs.com/docs/vue) and [Ember](https://stenciljs.com/docs/ember).

## Usage

The `<deckgo-qrcode/>` Web Component will generate a QR code.

### Properties

The `<deckgo-qrcode/>` expose the following properties:

| Property     | Attribute     | Description | Type      | Default               |
| ------------ | ------------- | ----------- | --------- | --------------------- |

### Styling

The `<deckgo-qrcode/>` could be styled using the following CSS4 variables:

| CSS4 variable                      | Default | Note |
| -------------------------- |:-----------------:|:-----------------:|

### Methods

The `<deckgo-qrcode/>` expose the following methods:


#### Examples

You could find the examples in the [src/index.html](src/index.html) of the project.

```
<deckgo-qrcode ...>
</deckgo-qrcode>
```

## License

MIT © [David Dal Busco](mailto:david.dalbusco@outlook.com)

[DeckDeckGo]: https://deckdeckgo.com
