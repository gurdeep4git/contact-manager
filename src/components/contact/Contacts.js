import React, { Component } from "react";
import Contact from "./Contact";

import { Consumer } from "../../context";

class Contacts extends Component {
    delete = id => {
        const { contacts } = this.state;
        const updatedContacts = contacts.filter(contact => {
            return contact.id !== id;
        });
        this.setState({ contacts: updatedContacts });
    };

    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <React.Fragment>
                            <h1 className="display-6">Contacts List</h1>
                            {contacts.map(contact => (
                                <Contact
                                    key={contact.id}
                                    contact={contact}
                                    onDeleteHandler={this.delete.bind(
                                        this,
                                        contact.id
                                    )}
                                />
                            ))}
                        </React.Fragment>
                    );
                }}
            </Consumer>
        );
    }
}

export default Contacts;
