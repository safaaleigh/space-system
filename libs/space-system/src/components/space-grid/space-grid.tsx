import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'space-grid',
  styleUrl: 'space-grid.css',
})
export class SpaceGrid {
  @Prop() row: boolean = false;
  @Prop() gap: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 = 1;
  @Prop() flex: string = '1';
  @Prop() direction: string;

  render() {
    let direction = this.row
      ? ['row', 'row', 'row']
      : ['column', 'column', 'column'];

    if (this.direction) direction = this.direction.split(',');

    const [small, medium, large] = direction;

    const classes = {
      [`gap-${this.gap}`]: true,
      [`sm-${small}`]: true,
      [`md-${medium}`]: true,
      [`lg-${large}`]: true,
    };

    return (
      <Host class={classes} style={{ flex: this.flex }}>
        <slot />
      </Host>
    );
  }
}
