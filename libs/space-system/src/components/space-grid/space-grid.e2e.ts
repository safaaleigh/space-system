import { newE2EPage } from '@stencil/core/testing';

describe('space-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<space-grid></space-grid>');
    const element = await page.find('space-grid');
    expect(element).toHaveClass('hydrated');
  });
});
