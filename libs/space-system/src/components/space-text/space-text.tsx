import { Component, h, Prop } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';

type ElementTypes =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'small'
  | 'span'
  | 'div'
  | 'label'
  | 'strong';

@Component({
  tag: 'space-text',
  styleUrl: 'space-text.css',
  shadow: true,
})
export class SpaceText<E extends ElementTypes> {
  @Prop() as: ElementTypes = 'p';
  @Prop() size: 10 | 12 | 14 | 16 | 20 | 24 | 32 | 40 | 48 = 12;
  @Prop() lineHeight?: 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56;
  @Prop() weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  @Prop() transform?: 'capitalize' | 'uppercase' | 'lowercase';
  @Prop() align?: 'left' | 'center' | 'right';
  @Prop() wrap: boolean = true;
  @Prop() customClassName?: string;
  @Prop() customStyle?: JSXBase.HTMLAttributes<E>['style'];

  render() {
    let classes = {};

    if (this.customClassName) classes[this.customClassName] = true;

    let style: JSXBase.HTMLAttributes<E>['style'] = {
      fontSize: `${this.size}px`,
    };

    if (this.lineHeight) style.lineHeight = `${this.lineHeight}px`;
    if (this.weight) style.fontWeight = String(this.weight);
    if (this.transform) style.textTransform = this.transform;
    if (this.align) style.textAlign = this.align;
    if (!this.wrap) style.whiteSpace = 'nowrap';

    style = { ...style, ...(this.customStyle || {}) };

    switch (this.as) {
      case 'h1':
        return (
          <h1 class={classes} style={style}>
            <slot />
          </h1>
        );
      case 'h2':
        return (
          <h2 class={classes} style={style}>
            <slot />
          </h2>
        );
      case 'h3':
        return (
          <h3 class={classes} style={style}>
            <slot />
          </h3>
        );
      case 'h4':
        return (
          <h4 class={classes} style={style}>
            <slot />
          </h4>
        );
      case 'h5':
        return (
          <h5 class={classes} style={style}>
            <slot />
          </h5>
        );
      case 'h6':
        return (
          <h6 class={classes} style={style}>
            <slot />
          </h6>
        );
      case 'small':
        return (
          <small class={classes} style={style}>
            <slot />
          </small>
        );
      case 'span':
        return (
          <span class={classes} style={style}>
            <slot />
          </span>
        );
      case 'div':
        return (
          <div class={classes} style={style}>
            <slot />
          </div>
        );
      case 'label':
        return (
          <label class={classes} style={style}>
            <slot />
          </label>
        );
      case 'strong':
        return (
          <strong class={classes} style={style}>
            <slot />
          </strong>
        );
      case 'p':
      default:
        return (
          <p class={classes} style={style}>
            <slot />
          </p>
        );
    }
  }
}
