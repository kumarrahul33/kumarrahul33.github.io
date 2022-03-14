// class game extends React.Component{
//     render(){
//         return(
//         <div className="testClass">
//             Hello React!
//         </div>
//         );
//     }
//   }
// const video = document.getElementById('sample-video');
// // var mouse_on_video = false;


// video.addEventListener("mouseenter", () => {
//   video.play();
// })
// video.addEventListener("mouseleave", () => {
//   video.pause();
// })



// const JSX =(
//     <div className="testClass">
//             What the fuck React!
//     </div>
// );

  
// ReactDOM.render(
//   JSX,
//   document.getElementById('testDiv')
//   );

const image1 = document.getElementById('sample-video');



class TicTacToe extends React.Component {
    constructor(props){
        super(props);
        this.state = {overImage : false};
    }

    mouseHover(a){
        console.log(a);
    }




    render() {
            return (<div onMouseEnter={()=> this.mouseHover(true)} onMouseLeave={()=> this.mouseHover(false)} id="sample-video">
              mouse was here <br/>
              mouse was here <br/>
              mouse was here <br/>
              mouse was here <br/>
              </div>);
        

        // else{
        //     return (<div onMouseEnter={()=> this.mouseHover(true) } onMouseLeave={()=> this.mouseHover(false)}> mouse was over here </div>);
        // }
    }
}

ReactDOM.render(
    <TicTacToe />,
    document.getElementById('sample-video')
    );

// 'use strict';

// const e = React.createElement;

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }

// const domContainer = document.querySelector('#like_button_container');
// ReactDOM.render(e(LikeButton), domContainer);
