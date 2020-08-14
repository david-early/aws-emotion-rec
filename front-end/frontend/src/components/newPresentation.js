import React from 'react'
import { withRouter, Link } from 'react-router-dom'

import Banner from './banner'

class NewPresentation extends React.Component {

    constructor() {
        super();
        this.state = {
            IpAddressOfStream: "",
            imageHash: Date.now(),
            showStream: false
        }
        this.validateIpAddressFormat = this.validateIpAddressFormat.bind(this);
    }

    // onChange(e) {
    //     const file = e.target.files[0];
    //     Storage.put('example.png', file, {
    //         contentType: 'image/png'
    //     })
    //     .then (result => console.log(result))
    //     .catch(err => console.log(err));
    // }

    validateIpAddressFormat() {
        if (/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(this.state.IpAddressOfStream)) {
            return (true)
        }
        else {
            return (false)
        }
    }


    submit = (e) => {
        e.preventDefault();
        // validate ip address format
        console.log("Starting")
        if (this.validateIpAddressFormat()) {
            this.setState({showStream: true, imageHash: Date.now()})
        }
        else {
            console.log("Invalid ip address format");
        }

        
    }  

    onChange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value }) 
    }

    render() {
        return (
            <div className="main">
                <Banner />
                {/* <input
                    type="file" accept='image/png'
                    onChange={(evt) => this.onChange(evt)}
                /> */}


                <div onSubmit={this.submit}>
                    <form>
                        <label>Enter the IP Address of your IP Webcam stream</label>
                        <br></br>
                        <span>http://</span>
                        <input name="IpAddressOfStream" placeholder="IP Address" onChange={this.onChange}></input>
                        <span>:8080</span>
                        <br></br>
                        <button type="submit">Click me for image check</button>

                    </form>

                    {
                        this.state.showStream && (
                            <img style={streamedImageStyle} src={"http://" + this.state.IpAddressOfStream + ":8080/shot.jpg?t=" + this.state.imageHash} alt="Most recent capture from the entered IP webcam stream" />
                        )
                    }
                </div>
            </div>
        )
    }

}

const styles = {
    streamedImageStyle: {
        maxWidth: "700px",
        height: "auto"
    }
}

const { streamedImageStyle } = styles;

export default withRouter(NewPresentation)