import { newSpecPage } from '@stencil/core/testing';
import { SpaceGrid } from './space-grid';

describe('space-grid', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SpaceGrid],
      html: '<space-grid></space-grid>',
    });
    expect(root).toEqualHtml(`
      <space-grid>
        <mock:shadow-root>
          <div>
            space-grid
          </div>
        </mock:shadow-root>
      </space-grid>
    `);
  });
});
