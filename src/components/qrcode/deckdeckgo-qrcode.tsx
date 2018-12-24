import {Component, Element, Prop} from '@stencil/core';

import * as QRCodeGenerator from '../utils/qrcode-generator/qrcode';

@Component({
  tag: 'deckgo-qrcode',
  styleUrl: 'deckdeckgo-qrcode.scss',
  shadow: true
})
export class DeckdeckgoQRCode {

  @Element() el: HTMLElement;

  @Prop() content: string;

  async componentDidLoad() {
    const qrCode: string = await this.createQRCode();
    await this.parseQRCode(qrCode);
  }

  private createQRCode(): Promise<string> {
    return new Promise<string>((resolve) => {
      if (!this.content || this.content.length <= 0) {
        resolve(null);
        return;
      }

      QRCodeGenerator.qrcode.stringToBytesFuncs['UTF-8'];

      const qrGenerator = QRCodeGenerator.qrcode(4, 'M');
      qrGenerator.addData(this.content, 'Byte');
      qrGenerator.make();

      const qrCode: string = qrGenerator.createSvgTag();

      resolve(qrCode);
    });
  }

  private parseQRCode(qrCode: string): Promise<void> {
    return new Promise<void>(async (resolve) => {
      if (!qrCode) {
        resolve();
        return;
      }

      const container: HTMLElement = this.el.shadowRoot.querySelector('div.deckgo-qrcode-container');

      if (container) {
        try {
          const template = document.createElement('template');
          template.innerHTML = qrCode;

          container.appendChild(template.content.firstChild);
        } catch (err) {
          // Then we don't generate a QR code
        }
      }

      resolve();
    });
  }

  render() {
    return <div class="deckgo-qrcode-container"></div>;
  }
}
