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

To generate the QR code, the project [qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator) from [Kazuhiko Arase](https://github.com/kazuhikoarase) is used.

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

The `<deckgo-qrcode/>` Web Component will generate per default a `<svg/>` QR code with a correction level set to high.

Optionally, it's also possible to generate the QR code as an `<img/>`.

### Properties

The `<deckgo-qrcode/>` expose the following properties:

| Property     | Attribute     | Description | Type      | Default               |
| ------------ | ------------- | ----------- | --------- | --------------------- |
| `content` | `content` | The content, a text or an url, of the QR code to generate | `string` | `` |
| `type`     | `type`      | The type of QR code to generate, `<svg/>` or `<img/>` | `string` | `svg` |
| `cellSize` | `cell-size` | The size of the cell, useful to generate a bigger QR code, specially in case of `<img/>`. Use it wisely, I suggest a value between 0 and 20 for example. | `number` |                 |

### Styling

The `<deckgo-qrcode/>` could be styled using the following CSS4 variables which would only applies on the type `<svg/>`:

| CSS4 variable                      | Default | Note |
| -------------------------- |:-----------------:|:-----------------:|
| --deckgo-qrcode-size | | The size, width and height, of the QR code |
| --deckgo-qrcode-border-stroke | | The border color of the QR code |
| --deckgo-qrcode-background-fill | transparent | The QR code's background |
| --deckgo-qrcode-color-fill | | The QR code's color (the color of the QR code's squares it contains)  |

#### Note

Currently the styling of the `<img/>` QR code is not supported.

#### Methods

The `<deckgo-qrcode/>` component exposes the following method in case you would like to refresh your QR code, for example on resize of the window on in case you would set its content asynchronously:

```
generate() => Promise<void>
```

#### Examples

You could find the examples in the [src/index.html](src/index.html) of the project.

```
<deckgo-qrcode content="https://deckdeckgo.com" style="--deckgo-qrcode-size: 300px;">
</deckgo-qrcode>
```

## License

MIT © [David Dal Busco](mailto:david.dalbusco@outlook.com)

[DeckDeckGo]: https://deckdeckgo.com
