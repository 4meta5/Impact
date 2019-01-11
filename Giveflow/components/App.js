import React, { Component } from 'react';
import { Button, Container, Divider, Grid, Header, Image, Menu, Segment, Message, Input } from 'semantic-ui-react';
import {RequestQRCode, RequestData} from '@bloomprotocol/share-kit';
import { calcMaxDebtInCDP, calcMaxDebtFromWallet, calcNeededEth, drawDaiAsync} from '../actions';

const BloomQRComponent: React.SFC = props => {
    const requestData = {
    action: "request_attestation_data",
    token: '0x8f31e48a585fd12ba58e70e03292cac712cbae39bc7eb980ec189aa88e24d041',
    url: ENDPOINT,
    org_logo_url: 'https://bloom.co/images/notif/bloom-logo.png',
    org_name: 'Bloom',
    org_usage_policy_url: 'https://bloom.co/legal/terms',
    org_privacy_policy_url: 'https://bloom.co/legal/privacy',
    types: ['phone', 'email'],
  }
    return <RequestQRCode requestData={requestData} size={200} />
  }

class App extends Component {
    constructor(props) {
        super(props)
    }
}