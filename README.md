# Giveflow: Crowdsourcing Universal Basic Income
> [Impact Fellowship](https://www.impactlabs.io/fellowship)

### Solidity

**Useful Resources**<br>
* [Ganache and Truffle Tutorial](https://hackernoon.com/ethereum-development-walkthrough-part-2-truffle-ganache-geth-and-mist-8d6320e12269)
* [Solidity v0.5.0 breaking changes](https://solidity.readthedocs.io/en/v0.5.0/050-breaking-changes.html)
    * [Explicitness Requirements](https://solidity.readthedocs.io/en/v0.5.0/050-breaking-changes.html#explicitness-requirements) 

### Background

*Donors buy goods directly for recipients.*

> Target demographic: low-income areas in the US close to Amazon shipping warehouses

By focusing on low-income areas in close proximity to Amazon shipping stations, we can ship goods directly to the people in need.

Value add(s):
* **Direct**: direct purchase alleviates the trust implicit in unconditional cash transfers, thereby providing increased confidence that the donation is used for its intended purpose
* **Convenient**: multiple models for contribution including but not limited to subscription-based donations, `rounding up`-style donations via a browser plugin, and a *pay in crypto* option
* **Reputation-Based**: [Bloom](https://bloom.co/) enables us to establish identity for recipients and develop metrics for reputation to decide on future priority   
    * recipients can fill out surveys regarding the donation that increase their reputation (surveys provide data and feedback on impact)

## Dev Stuff (Links for Resources while Under Construction)

* Nodejs
* Rust + WASM

*Random*

* [`zeit/nextjs` examples with assembly](https://github.com/zeit/next.js/tree/canary/examples/with-webassembly)

* [Using truffle for Ethereum developments with nextjs](https://github.com/adrianmcli/truffle-next)

* [Next.js (React) + Redux + Express REST API + MongoDB + Mongoose-Crudify boilerplate](https://github.com/tomsoderlund/nextjs-express-mongoose-crudify-boilerplate)

## Authentication

* [Bloom](https://bloom.co)
> [API High Level Overview](https://blog.hellobloom.io/sponsoring-eth-sf-hackathon-api-prize-bloom-protocol-api-overview-d9630d663b98)

Bloom Protocol is an end-to-end protocol for decentralized login, identity, and credit scoring. With Bloom Protocol, you can implement compliant financial systems without sacrificing user privacy or risking data breaches. You don’t have to take custody of a user’s personal data, or rely on a centralized system. The user holds the only keys to release their data and you can be sure the data they are sharing has been independently verified.

* [Tokenize Student Loans Example](https://github.com/html5cat/ethSF-2018)
    * great example with GraphQL query, which should be used
* [Blocusign](https://github.com/pycal/blocusign)
    * bloom ID verification and attestations
* [cNote](https://github.com/icash-io/ethsf-icash-cnote)
    * reputation system for credit score entities

* [governance tool creating structured guidelines around discourse: Kora](https://github.com/atvanguard/ethsf-kora)

[Lending Party DevPost](https://devpost.com/software/lendingparty)
* [Built on Bloom: Lending Party Lets Anyone Get a Decentralized Fiat Loan with Bloom Protocol and MakerDAO](https://blog.hellobloom.io/built-on-bloom-lending-party-lets-anyone-get-a-decentralized-fiat-loan-with-bloom-protocol-and-56de8d660b3c)

[Built on Bloom: dBonds Fixes the $186B Global Bond Market](https://blog.hellobloom.io/built-on-bloom-dbonds-fixes-the-186b-global-bond-market-ffddaa6ed5b1)
* [code](https://github.com/carlosgj94/status-hackathon)

[Bounty for 2 ETH](https://gitcoin.co/issue/hellobloom/share-kit/28/1857) to incorporate QR Code
* [Share Kit](https://github.com/hellobloom/share-kit)
* [Other Submission](https://github.com/vikaskyadav/bloom-login)

### Rust
> rust => wasm