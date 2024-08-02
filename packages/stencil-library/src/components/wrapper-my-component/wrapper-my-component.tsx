import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'wrapper-my-component',
  styleUrl: 'wrapper-my-component.css',
  shadow: true,
})
export class WrapperMyComponent {
  @Prop() size: number;
  render() {
    return (
      <div>
        <h1>Wrapper My Component</h1>
        <my-component first="hello" last="world" size={this.size}></my-component>
      </div>
    );
  }
}
