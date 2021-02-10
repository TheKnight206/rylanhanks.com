import React from 'react';

class Typewriter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            typing: false,
            erasing: false,
            index: 0,
            blinking: true,
        }
    }

    updateText = () => {

        if (!this.state.erasing && this.state.value === this.props.list[this.state.index]) {
            clearInterval(this.timerID);
            setTimeout(this.afterRest, this.props.restTimeDisplay);
            this.setState({typing: false, erasing: true});
        } else if (this.state.erasing && this.state.value === '') {
            clearInterval(this.timerID);
            setTimeout(this.afterRest, this.props.restTimeEmpty);
            this.setState({typing: false, erasing: false});
        } else {
            if (!this.state.erasing) {
                this.setState({value: this.props.list[this.state.index].substr(0, this.state.value.length + 1)});
            } else {
                this.setState({value: this.props.list[this.state.index].substr(0, this.state.value.length - 1)})
            }
        }
    }

    afterRest = () => {
        if (!this.state.erasing) {
            this.setState({index: this.state.index === this.props.list.length - 1 ? 0 : this.state.index + 1});
            this.timerID = setInterval(this.updateText, this.props.typingSpeedInterval);
        } else {
            this.timerID = setInterval(this.updateText, this.props.erasingSpeedInterval);
        }
        this.setState({typing: true});
    }

    updateCursor = () => {
        this.setState({blinking: !this.state.blinking});
    }

    componentDidMount() {
        this.timerID = setInterval(this.updateText, this.props.typingSpeedInterval);
        this.blinkID = setInterval(this.updateCursor, 530);
        this.setState({typing: true});
    }

    componentWillUnmount() {
        if (this.state.typing) {
            clearInterval(this.timerID);
        }
        clearInterval(this.blinkID);
    }

    render() {
        return (
            <div className = "typewriter-container">
                <h1> {this.props.defaultMessage + this.state.value + (this.state.typing ? '|' : this.state.blinking ? '|' : ' ')}</h1>
            </div>
        )
    }
}

Typewriter.defaultProps = {
    restTimeDisplay: 2000,
    restTimeEmpty: 1250,
    list: [],
    typingSpeedInterval: 50,
    erasingSpeedInterval: 45,
    defaultMessage: '',
}

export default Typewriter;