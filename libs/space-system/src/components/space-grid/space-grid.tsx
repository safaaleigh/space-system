import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'space-grid',
  styleUrl: 'space-grid.css',
})
export class SpaceGrid {
  @Prop() row: boolean = false;
  @Prop() gap: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 = 1;
  @Prop() flex: string = '1';

  render() {
    const classes = {
      [`gap-${this.gap}`]: true,
      'grid-row': this.row,
      'grid-column': !this.row,
    };

    return (
      <Host class={classes} style={{ flex: this.flex }}>
        <slot />
      </Host>
    );
  }
}
