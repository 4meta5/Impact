import React, { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import responseFromServer from '../items.js'
const itemsFromServer = responseFromServer.data;

class Card extends React.Component {
  render() {
    return (
      <div>
      <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="panel panel-default panel-pet">
          <div className="panel-body">
            <br/><br/>
            <strong>Item</strong>: <span class="item-name">{this.props.value.name}</span>
            <p></p>
            <button className="btn btn-default btn-add" type="button" data-id="0">Add to List</button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

class Marketplace extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: responseFromServer
    }
  }

  renderCard(i) {
    return (
      console.log("rendered cards"),
      console.log(this.state.items),
      <Card
        value={this.state.items[i]}
      />
    );
  }

  render() {
    return (
      console.log("here"),
      console.log(this.state.items),
      <div>
          <Head>
          <title>Marketplace</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
          </Head>
          <Nav />

          <nav className="navbar navbar-default">
          <div className="container-fluid">
          <div className="navbar-header">
          <a className="navbar-brand">Giveflow</a>
          </div>
          <button className="btn btn-success navbar-btn navbar-right">Submit List</button>
          </div>
          </nav>

          <div className="container">
          <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-push-2">
          <h1 className="text-center">Giveflow Marketplace</h1>
          <hr/>
          <br/>
          </div>
          </div>
          </div>
          {
            this.state.items.map(item => this.renderCard(item.id))
          }
      </div>
    );
  }
}

export default Marketplace
