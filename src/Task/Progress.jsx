import React, { Component } from 'react';

class Progress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            // Increment progress up to 100%
            this.setState(prevState => ({
                progress: prevState.progress >= 100 ? 0 : prevState.progress + 10
            }));
        }, 1000); // Change the interval as per your preference for animation speed
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { progress } = this.state;

        return (
            <React.StrictMode>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
                    crossorigin="anonymous"
                />
                <div className="container mt-2">    
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" style={{ width: `${progress}%` }}>{progress}%</div>
                    </div>
                </div>
                {/* <div className="container mt-2">
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped bg-info progress-bar-animated" style={{ width: `${progress + 25}%` }}>{progress+25}%</div>
                    </div>
                </div>
                <div className="container mt-2">
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped bg-primary progress-bar-animated" style={{ width: `${progress + 50}%` }}>{progress+50}%</div>
                    </div>
                </div>
                <div className="container mt-2">
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" style={{ width: `${progress + 75}%` }}>{progress+100}%</div>
                    </div>
                </div> */}
            </React.StrictMode>
        )
    }
}
export default Progress;