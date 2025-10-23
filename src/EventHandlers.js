/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
const {
  KickTheMarket,
  KickTheMarket_Mint,
  KickTheMarket_Transfer,
  Sponsors,
  Sponsors_NewSponsor,
  Jackpot,
  Jackpot_TicketAssigned,
  Jackpot_RandomNumberResult,
  Jackpot_JackpotWinner,
  Jackpot_JackporClaimed
} = require("generated");

KickTheMarket.Mint.handler(async ({event, context}) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    tokenId: event.params.tokenId,
    to: event.params.to,
    score: event.params.score,
    anomalyLevel: event.params.anomalyLevel,
    blackSwanLevel: event.params.blackSwanLevel,
    totalKicks: event.params.totalKicks,
    proof: event.params.proof,
    address: event.srcAddress
  };

  context.KickTheMarket_Mint.set(entity);
});


KickTheMarket.Transfer.handler(async ({event, context}) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    tokenId: event.params.tokenId,
  };

  context.KickTheMarket_Transfer.set(entity);
});

Sponsors.NewSponsor.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    week: event.params.week,
    sponsor: event.params.sponsor,
    amount: event.params.amount,
    tier: event.params.tier,
    name: event.params.name,
    cta: event.params.cta,
    description: event.params.description,
    logoUrl: event.params.logoUrl,
    website: event.params.website,
  };

  context.Sponsors_NewSponsor.set(entity);
});


Jackpot.TicketAssigned.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    ticketId: event.params.ticketId,
    player: event.params.player,
    amount: event.params.amount,
    gameAddress: event.params.gameAddress
  };

  context.Jackpot_TicketAssigned.set(entity);  
});

Jackpot.RandomNumberResult.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sequenceNumber: event.params.sequenceNumber,
    isWinner: event.params.isWinner,
    randomNumber: event.params.randomNumber
  };

  context.Jackpot_RandomNumberResult.set(entity);  
});


Jackpot.JackpotWinner.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    ticketId: event.params.ticketId,
    winner: event.params.winner,
    prize: event.params.prize
  };

  context.Jackpot_JackpotWinner.set(entity);  
});

Jackpot.JackpotClaimed.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    winner: event.params.winner,
    prize: event.params.prize,
    caller: event.params.caller
  };

  context.Jackpot_JackpotClaimed.set(entity);  
});
