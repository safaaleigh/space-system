import { newE2EPage } from '@stencil/core/testing';

describe('space-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<space-text></space-text>');
    const element = await page.find('space-text');
    expect(element).toHaveClass('hydrated');
  });
});
