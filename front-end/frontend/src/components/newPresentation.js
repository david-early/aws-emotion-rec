import React from 'react'
import { withRouter } from 'react-router-dom'
import { presentationsByUser } from '../graphql/queries'
import { createPresentation, createPresentationSlot } from '../graphql/mutations'

import { API, graphqlOperation, Auth} from 'aws-amplify';

import Banner from './banner'

class NewPresentation extends React.Component {

    constructor() {
        super();
        this.state = {
            IpAddressOfStream: "",
            imageHash: Date.now(),
            showStream: false,
            uuid: ""
        }
        this.validateIpAddressFormat = this.validateIpAddressFormat.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.createPresentationSlotButton = this.createPresentationSlotButton.bind(this);
        this.createPresentationButton = this.createPresentationButton.bind(this);
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

    componentDidMount() {
        Auth.currentUserInfo().then((data) => {
            console.log(data)
            this.setState({uuid: data.attributes.sub})
        })
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

    handleClick = (e) => {
        e.preventDefault()

        API.graphql(graphqlOperation(presentationsByUser, {
            userId: this.state.uuid
        })).then((data) => {
            console.log(data)
            })

    }

    createPresentationButton = (e) => {
        e.preventDefault()

        const inputData = { userId: this.state.uuid,
                            presentationUserId: this.state.uuid
        }

        API.graphql(graphqlOperation(createPresentation, {input: inputData})).then(() => {
            console.log("Created presentation")
        })


    }

    createPresentationSlotButton = (e) => {
        e.preventDefault()

        const inputData = { timestamp: 15,
                            base64: "ajsbiofahfdog",
                            presentationId: "e583a4d1-7795-4adf-b43c-26e3b20c5e9f",
                            presentationSlotPresentationId: "e583a4d1-7795-4adf-b43c-26e3b20c5e9f"
        }

        API.graphql(graphqlOperation(createPresentationSlot, {input: inputData})).then(() => {
            console.log("Created presentationSlot")
        })

    }

    render() {
        return (
            <div className="main">
                <Banner />

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

                    <button onClick={this.handleClick}>Click for graphql query</button>
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