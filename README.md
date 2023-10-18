## Metafuse Token Gated Content Example

This NextJS example application showcases how to use the Metafuse API to handle token gated content using an ERC721 created on Metafuse. In this example, users can mint a _Pass_ from the supplied minting site on the Base Goerli network. A Pass can be one of three different Tiers. The Pass Tiers unlock access to certain data within the web application.

For example, if a user holds a Pass that is of Tier **Three**, they will be able to access the route that gates content for that Pass tier. Furthermore, If a user holds no Pass, they will not be able to access the Dashboard.

## Demo

If you want a live demo of this application, access it below on Vercel.

- https://metafuse-token-gated-content.vercel.app/

## Quickstart

- Get your Metafuse API Key & Project ID from within your Project Settings [Metafuse](https://app.metafuse.me) and add those to your .env file.
- Install dependancies and start the application locally - `bun i && bun dev`

## Mint Site

- https://token-gate-example.metafuse.me/

## Base Goerli Faucet

- https://bwarelabs.com/faucets/base-testnet
