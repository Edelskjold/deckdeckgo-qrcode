/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface DeckgoQrcode {
    'content': string;
    'generate': () => Promise<void>;
  }
  interface DeckgoQrcodeAttributes extends StencilHTMLAttributes {
    'content'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'DeckgoQrcode': Components.DeckgoQrcode;
  }

  interface StencilIntrinsicElements {
    'deckgo-qrcode': Components.DeckgoQrcodeAttributes;
  }


  interface HTMLDeckgoQrcodeElement extends Components.DeckgoQrcode, HTMLStencilElement {}
  var HTMLDeckgoQrcodeElement: {
    prototype: HTMLDeckgoQrcodeElement;
    new (): HTMLDeckgoQrcodeElement;
  };

  interface HTMLElementTagNameMap {
    'deckgo-qrcode': HTMLDeckgoQrcodeElement
  }

  interface ElementTagNameMap {
    'deckgo-qrcode': HTMLDeckgoQrcodeElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
