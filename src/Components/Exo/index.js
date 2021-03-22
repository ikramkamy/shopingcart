import React from "react";
export const MyFirstComponent = () => {
 return (
   <>
     <h2>ikram kamy export component 1 !!</h2>
   </>
 );
};

export const MySecondComponent = () => {
 return (
   <>
     <h2>ikram kamy export component 2t!! </h2>
   </>
 );
};
/*
 export function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="https://www.youtube.com/watch?v=rrycD3O0yQA" onClick={handleClick}>
      Click me
    </a>
  );
}
*/
export class HoverExample extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (
      <div>
        <div
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          Hover Me
        </div>
        {
          this.state.isHovering &&
          <div>
            Hovering right meow! 🐱
          </div>
        }
      </div>
    );
  }
}