
class TicTacToe extends React.Component {
    constructor(props){
        super(props);
        this.state = {overImage : false};
    }

    mouseHover(a){
        this.setState({overImage : a});
    }



    render() {
            if(!this.state.overImage){
                return (<a href="./tic_tac_toe.html">
                <img onMouseEnter={()=> this.mouseHover(true) } onMouseLeave={()=> this.mouseHover(false)} id="TicTacToe" className="image_prop_left" src="./tic_tac_toe_img.png" alt="Tic_Tac_Toe"/>
                </a>);
            }
    
            else{
                return (
                    <a href="./tic_tac_toe.html">
                    <video onMouseEnter={()=> this.mouseHover(true) } onMouseLeave={()=> this.mouseHover(false)} src="sample-mp4-file-small.mp4" id="TicTacToe" muted="muted" className="image_prop_left" autoPlay={true}>
                    </video></a>
                    
                );
            }
    }
}

class Fall_Blocks extends React.Component {
    constructor(props){
        super(props);
        this.state = {overImage : false};
    }

    mouseHover(a){
        this.setState({overImage : a});
    }



    render() {
            if(!this.state.overImage){
                return (<a href="./fall_blocks.html">
                <img onMouseEnter={()=> this.mouseHover(true) } onMouseLeave={()=> this.mouseHover(false)} id="fallBlocks" className="image_prop_right" src="./fall_blocks_img.png" alt="Play Fall_Blocks"/>
                </a>);
            }
    
            else{
                return (
                    <a href="./fall_blocks.html">
                    <video onMouseEnter={()=> this.mouseHover(true) } onMouseLeave={()=> this.mouseHover(false)} src="sample-mp4-file-small.mp4" id="fallBlocks" muted="muted" className="image_prop_right" autoPlay={true}>
                    </video></a>
                    
                );
            }
    }
}

ReactDOM.render(
    <Fall_Blocks />,
    document.getElementById('fallBlocks')
    );

ReactDOM.render(
    <TicTacToe />,
    document.getElementById('TicTacToe')
    );