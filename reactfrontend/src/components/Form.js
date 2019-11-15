import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';

export default class Create extends Component {
    render() {
        const form_style = {
            display: "flex",
            flexDirection: "column",
            textAlign: "right",
        }
        return (
            <div>
                <form onSubmit={this.props.handlingSubmit} style={form_style}>
                    <TextField
                        id="outlined-basic"
                        label="Outlined"
                        margin="normal"
                        variant="outlined"
                        name='title'
                        value={this.props.title}
                        onChange={this.props.handlingChange}
                    />
                    <TextField
                        label="Multiline"
                        multiline
                        rows="4"
                        margin="normal"
                        name='content'
                        value={this.props.content}
                        onChange={this.props.handlingChange}
                    />
                    <button type="submit">글 작성</button>
                </form>
            </div>
        )
    }
}