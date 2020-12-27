import React, { Component } from "react";
import {Form ,InputGroup, Image} from "react-bootstrap";
import { withRouter } from "react-router-dom";

class ContactRow extends React.Component {
  render() {
    return (
      <li>
        <span>{this.props.contact.name}</span>
        <p>{this.props.contact.phone}</p>
      </li>
    );
  }
}

class ContactTable extends React.Component {
  render() {
    var rows = [];
    this.props.contacts.forEach((contact) => {
      if (contact.name.indexOf(this.props.filterText) === -1) {
        return;
      }
      rows.push(<ContactRow key={contact.key} contact={contact} />);
    });
    return <ul className="texttab-show">{rows}</ul>;
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(
      this
    );
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  render() {
    return (
      <form>

        <div className="search-box position-relative py-4 px-3 row">
        <InputGroup>
        <InputGroup.Prepend>
            <InputGroup.Text>
                <Image  src="/assets/i/search.png" />
            </InputGroup.Text>
        </InputGroup.Prepend>
        
        <Form.Control
            type="text"
            placeholder="Search here.."
            value={this.props.filterText}
            onChange={this.handleFilterTextInputChange}
        />
    </InputGroup>
    </div>
      </form>
    );
  }
}

class FilterableContactTable extends React.Component {
  constructor(props) {
    super(props);
    // FilterableContactTable is the owner of the state as the filterText is needed in both nodes (searchbar and table) that are below in the hierarchy tree.
    this.state = {
      filterText: "",
      contacts: [
        { key: 1, name: "Admil Damani", phone: "+923423425245" },
        { key: 2, name: "Admil Damani", phone: "+923423425245" },
        { key: 3, name: "Admil Damani", phone: "+923423425245" },
        { key: 4, name: "Admil Damani", phone: "+923423425245" },
        { key: 5, name: "Admil Damani", phone: "+923423425245" },
      ],
    };
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    // this.addContact = this.addContact.bind(this);
  }



  handleFilterTextInput(filterText) {
    //Call to setState to update the UI
    this.setState({
      filterText: filterText,
    });
    //React knows the state has changed, and calls render() method again to learn what should be on the screen
  }

  render() {
    return (
      <div>
        
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextInput={this.handleFilterTextInput}
        />
        {/* <NewContactRow addContact={this.addContact} /> */}
        <div className="py-3"></div>
        <h3>A</h3>
        <ContactTable
          contacts={this.state.contacts}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

// class NewContactRow extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     const target = event.target;
//     const name = target.name.value;
//     const phone = target.phone.value;
//     const email = target.email.value;

//     var contact = {
//       name: name,
//       phone: phone,
//       email: email,
//     };
//     this.props.addContact(contact);
//   }

//   render() {
//     return (
//       <form className="form-inline" onSubmit={this.handleSubmit}>
//         <div className="form-group row">
//           <div className="col-md-3">
//             <input
//               type="text"
//               name="name"
//               className="form-control"
//               id="nameInput"
//               placeholder="Name"
//             />
//           </div>
//           <div className="col-md-3">
//             <input
//               type="text"
//               name="phone"
//               className="form-control"
//               id="phoneInput"
//               placeholder="Phone"
//             />
//           </div>
//           <div className="col-md-3">
//             <input
//               type="email"
//               name="email"
//               className="form-control"
//               id="emailInput"
//               placeholder="Email"
//             />
//           </div>
//           <div className="col-md-3">
//             <button type="submit" className="btn btn-primary">
//               <i className="fa fa-fw fa-plus"></i>Add
//             </button>
//           </div>
//         </div>
//       </form>
//     );
//   }
// }

var CONTACTS = [
  { key: 1, name: "Tom Jackson", phone: "555-444-333"},
  {
    key: 2,
    name: "Mike James",
    phone: "555-777-888",
    email: "mikejames@gmail.com",
  },
  {
    key: 3,
    name: "Janet Larson",
    phone: "555-222-111",
    email: "janetlarson@gmail.com",
  },
  {
    key: 4,
    name: "Clark Thompson",
    phone: "555-444-333",
    email: "clark123@gmail.com",
  },
  {
    key: 5,
    name: "Emma Page",
    phone: "555-444-333",
    email: "emma1page@gmail.com",
  },
];

class ContactList extends Component {
  render() {
    return (
      <div>
        
        <FilterableContactTable contacts={CONTACTS} />
      </div>
    );
  }
}

export default withRouter(ContactList);
