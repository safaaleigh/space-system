import { newSpecPage } from '@stencil/core/testing';
import { SpaceText } from './space-text';

describe('space-text', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SpaceText],
      html: '<space-text></space-text>',
    });
    expect(root).toEqualHtml(`
      <space-text>
        <mock:shadow-root>
          <p>
            space-text
          </p>
        </mock:shadow-root>
      </space-text>
    `);
  });
});
