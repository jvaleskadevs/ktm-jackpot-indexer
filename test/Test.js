
const assert = require("assert");
const { TestHelpers } = require("generated");
const { MockDb, KickTheMarket, Sponsors, Jackpot } = TestHelpers;

describe("KickTheMarket contract Mint event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for KickTheMarket contract Mint event
  const event = KickTheMarket.Mint.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("KickTheMarket_Mint is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await KickTheMarket.Mint.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualKickTheMarketMint = mockDbUpdated.entities.KickTheMarket_Mint.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedKickTheMarketMint = {
      id:`${event.chainId}_${event.block.number}_${event.logIndex}`,
      tokenId: event.params.tokenId,
      to: event.params.to,
      score: event.params.score,
      anomalyLevel: event.params.anomalyLevel,
      blackSwanLevel: event.params.blackSwanLevel,
      totalKicks: event.params.totalKicks,
      proof: event.params.proof,
      address: event.srcAddress
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(
      actualKickTheMarketMint,
      expectedKickTheMarketMint,
      "Actual KickTheMarketMint should be the same as the expectedKickTheMarketMint"
    );
  });
});

describe("Sponsors contract new sponsor event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for KickTheMarket contract Mint event
  const event = Sponsors.NewSponsor.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("Sponsors_NewSponsor is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await Sponsors.NewSponsor.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualSponsorsNewSponsor = mockDbUpdated.entities.Sponsors_NewSponsor.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedSponsorsNewSponsor = {
      id:`${event.chainId}_${event.block.number}_${event.logIndex}`,      
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
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(
      actualSponsorsNewSponsor,
      expectedSponsorsNewSponsor,
      "Actual SponsorsNewSponsor should be the same as the expectedSponsorsNewSponsor"
    );
  });
});

describe("Jackpot contract jackpot winner tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for KickTheMarket contract Mint event
  const event = Jackpot.JackpotWinner.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("Jackpot_JackpotWinner is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await Jackpot.JackpotWinner.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualJackpotJackpotWinner = mockDbUpdated.entities.Jackpot_JackpotWinner.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedJackpotJackpotWinner = {
      id:`${event.chainId}_${event.block.number}_${event.logIndex}`,      
      ticketId: event.params.ticketId,
      winner: event.params.winner,
      prize: event.params.prize
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(
      actualJackpotJackpotWinner,
      expectedJackpotJackpotWinner,
      "Actual JackpotJackpotWinner should be the same as the expectedJackpotJackpotWinner"
    );
  });
});

describe("Jackpot contract jackpot claimed tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for KickTheMarket contract Mint event
  const event = Jackpot.JackpotClaimed.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("Jackpot_JackpotClaimed is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await Jackpot.JackpotClaimed.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualJackpotJackpotClaimed = mockDbUpdated.entities.Jackpot_JackpotClaimed.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedJackpotJackpotClaimed = {
      id:`${event.chainId}_${event.block.number}_${event.logIndex}`,      
      winner: event.params.winner,
      prize: event.params.prize,
      caller: event.params.caller
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(
      actualJackpotJackpotClaimed,
      expectedJackpotJackpotClaimed,
      "Actual JackpotJackpotClaimed should be the same as the expectedJackpotJackpotClaimed"
    );
  });
});

describe("Jackpot contract random number result tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for KickTheMarket contract Mint event
  const event = Jackpot.RandomNumberResult.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("Jackpot_RandomNumberResult is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await Jackpot.RandomNumberResult.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualJackpotRandomNumberResult = mockDbUpdated.entities.Jackpot_RandomNumberResult.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedJackpotRandomNumberResult = {
      id:`${event.chainId}_${event.block.number}_${event.logIndex}`,      
      sequenceNumber: event.params.sequenceNumber,
      isWinner: event.params.isWinner,
      randomNumber: event.params.randomNumber
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(
      actualJackpotRandomNumberResult,
      expectedJackpotRandomNumberResult,
      "Actual JackpotRandomNumberResult should be the same as the expectedJackpotRandomNumberResult"
    );
  });
});


describe("Jackpot contract ticket assigned tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for KickTheMarket contract Mint event
  const event = Jackpot.TicketAssigned.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("Jackpot_TicketAssigned is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await Jackpot.TicketAssigned.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualJackpotTicketAssigned = mockDbUpdated.entities.Jackpot_TicketAssigned.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedJackpotTicketAssigned = {
      id:`${event.chainId}_${event.block.number}_${event.logIndex}`,      
      ticketId: event.params.ticketId,
      player: event.params.player,
      amount: event.params.amount,
      gameAddress: event.params.gameAddress
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(
      actualJackpotTicketAssigned,
      expectedJackpotTicketAssigned,
      "Actual JackpotTicketAssigned should be the same as the expectedJackpotTicketAssigned"
    );
  });
});
