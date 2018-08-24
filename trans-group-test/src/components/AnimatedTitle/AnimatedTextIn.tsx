import * as React from 'react';
import { CSSTransition } from 'react-transition-group';


export class AnimatedTextIn extends React.Component<any, any> {

    static defaultProps = {
        delay: 0,
        duration: 300,
        from: "top",
    };

    styles = {
        transitionDuration: '300ms',
        transitionDelay: '0ms',
    };

    constructor(props: any) {
        super(props);

        this.state = {
            shown: false,
        }

        this.styles.transitionDuration = `${this.props.duration}ms`;
        this.styles.transitionDelay = `${this.props.delay}ms`;
    }

    componentDidMount() {
        this.toggle();
    }

    toggle = () => {
        this.setState({
            shown: !this.state.shown,
        });
    }

    render() {
        return (
            <CSSTransition
                timeout={this.props.duration}
                classNames={`animated-text-from-${this.props.from}`}
                in={this.state.shown}
            >
                <div style={this.styles} className={`animated-text-from-${this.props.from} name`}>{this.props.text}</div>
            </CSSTransition>
        );
    }
}