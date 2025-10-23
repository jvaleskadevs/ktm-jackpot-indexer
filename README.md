## Kick The Market, Sponsors & Jackpot hyperindex

- This index is part of our ETHOnline 2025 hackathon project: Kick the Market game with sponsored Jackpot protocol.

- Indexed Smart Contracts Addresses and Events:
 - Kick the Market:
    - 0x14Dabc24Af69d38701927B68E004c71169790a5d
    - 0x634c4e43Bec566a7704612c8dD1F7c3Dbe28BFDC
    - Mint(uint256 indexed tokenId, address indexed to, uint256 score, uint256 anomalyLevel, uint256 blackSwanLevel, uint256 totalKicks, bytes proof)
    - Transfer(address indexed from, address indexed to, uint256 indexed tokenId)    
 - Jackpot:
    - 0x4DFF47404766cfDf82665A40Eb822870b9A68538
    - JackpotWinner(uint64 indexed ticketId, address indexed winner, uint256 prize)
    - JackpotClaimed(address indexed winner, uint256 prize, address indexed caller)
    - RandomNumberResult(uint64 indexed sequenceNumber, bool isWinner, uint256 randomNumber)
    - TicketAssigned(uint64 indexed ticketId, address indexed player, uint256 amount, address indexed gameAddress)
 - Sponsors:
    - 0x4f17a5529B4E3e20467774708435740792E460eE
    - NewSponsor(uint256 indexed week, address indexed sponsor, uint256 indexed amount, uint8 tier, string name, string cta, string description, string logoUrl, string website)

*Please check the [config file](./config.yaml) to get a full insight about what events and contracts are being indexed*

### Test

- Including tests for all entities. Setup the project and run:

```bash
pnpm dev
pnpm test
```

Made with love by J. Valeska.

## Envio Indexer

*Please refer to the [documentation website](https://docs.envio.dev) for a thorough guide on all [Envio](https://envio.dev) indexer features*

### Run

```bash
pnpm dev
```

Visit http://localhost:8080 to see the GraphQL Playground, local password is `testing`.

### Generate files from `config.yaml` or `schema.graphql`

```bash
pnpm codegen
```

### Pre-requisites

- [Node.js (use v18 or newer)](https://nodejs.org/en/download/current)
- [pnpm (use v8 or newer)](https://pnpm.io/installation)
- [Docker desktop](https://www.docker.com/products/docker-desktop/)
