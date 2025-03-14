export const wagmiContractConfig = {
  address: '0xdc64a140aa3e981100a9beca4e685f962f0cf6c9',
  abi: [
    {
      type: 'constructor',
      inputs: [
        {
          name: '_config',
          type: 'tuple',
          internalType: 'struct Lotto.LottoConfig',
          components: [
            { name: 'entryFee', type: 'uint256', internalType: 'uint256' },
            { name: 'lottoTaxPercent', type: 'uint8', internalType: 'uint8' },
            { name: 'vrfCoordinator', type: 'address', internalType: 'address' },
            { name: 'subscriptionId', type: 'uint256', internalType: 'uint256' },
            { name: 'gasLane', type: 'bytes32', internalType: 'bytes32' },
            { name: 'requestConfirmations', type: 'uint16', internalType: 'uint16' },
            { name: 'callbackGasLimit', type: 'uint32', internalType: 'uint32' },
            { name: 'numberOfWords', type: 'uint32', internalType: 'uint32' },
          ],
        },
      ],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'acceptOwnership',
      inputs: [],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'checkUpkeep',
      inputs: [{ name: '', type: 'bytes', internalType: 'bytes' }],
      outputs: [
        { name: 'upkeepNeeded', type: 'bool', internalType: 'bool' },
        { name: '', type: 'bytes', internalType: 'bytes' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'claimPrize',
      inputs: [],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'enterLotto',
      inputs: [{ name: '_numbers', type: 'uint8[6]', internalType: 'uint8[6]' }],
      outputs: [],
      stateMutability: 'payable',
    },
    {
      type: 'function',
      name: 'getIntervalBetweenDraws',
      inputs: [],
      outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
      stateMutability: 'pure',
    },
    {
      type: 'function',
      name: 'getLastDrawTimestamp',
      inputs: [],
      outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'getLottoEntranceFee',
      inputs: [],
      outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'getLottoState',
      inputs: [],
      outputs: [{ name: '', type: 'uint8', internalType: 'enum Lotto.LottoState' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'getMyTicket',
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'tuple',
          internalType: 'struct Lotto.Ticket',
          components: [
            { name: 'numbers', type: 'uint8[6]', internalType: 'uint8[6]' },
            { name: 'hasClaimedPrize', type: 'bool', internalType: 'bool' },
            { name: 'prizeLevel', type: 'uint8', internalType: 'enum Lotto.PRIZE_LEVELS' },
            { name: 'prize', type: 'uint256', internalType: 'uint256' },
          ],
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'getNumberOfParticipants',
      inputs: [],
      outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'getPrizePercentages',
      inputs: [],
      outputs: [
        { name: '', type: 'uint256', internalType: 'uint256' },
        { name: '', type: 'uint256', internalType: 'uint256' },
        { name: '', type: 'uint256', internalType: 'uint256' },
        { name: '', type: 'uint256', internalType: 'uint256' },
      ],
      stateMutability: 'pure',
    },
    {
      type: 'function',
      name: 'getTicket',
      inputs: [{ name: '_address', type: 'address', internalType: 'address' }],
      outputs: [
        {
          name: '',
          type: 'tuple',
          internalType: 'struct Lotto.Ticket',
          components: [
            { name: 'numbers', type: 'uint8[6]', internalType: 'uint8[6]' },
            { name: 'hasClaimedPrize', type: 'bool', internalType: 'bool' },
            { name: 'prizeLevel', type: 'uint8', internalType: 'enum Lotto.PRIZE_LEVELS' },
            { name: 'prize', type: 'uint256', internalType: 'uint256' },
          ],
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'getTotalJackpot',
      inputs: [],
      outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'owner',
      inputs: [],
      outputs: [{ name: '', type: 'address', internalType: 'address' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'performUpkeep',
      inputs: [{ name: '', type: 'bytes', internalType: 'bytes' }],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'rawFulfillRandomWords',
      inputs: [
        { name: 'requestId', type: 'uint256', internalType: 'uint256' },
        { name: 'randomWords', type: 'uint256[]', internalType: 'uint256[]' },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 's_vrfCoordinator',
      inputs: [],
      outputs: [{ name: '', type: 'address', internalType: 'contract IVRFCoordinatorV2Plus' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'setCoordinator',
      inputs: [{ name: '_vrfCoordinator', type: 'address', internalType: 'address' }],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'transferOwnership',
      inputs: [{ name: 'to', type: 'address', internalType: 'address' }],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'event',
      name: 'CoordinatorSet',
      inputs: [
        { name: 'vrfCoordinator', type: 'address', indexed: false, internalType: 'address' },
      ],
      anonymous: false,
    },
    { type: 'event', name: 'NewParticipantEntered', inputs: [], anonymous: false },
    {
      type: 'event',
      name: 'OwnershipTransferRequested',
      inputs: [
        { name: 'from', type: 'address', indexed: true, internalType: 'address' },
        { name: 'to', type: 'address', indexed: true, internalType: 'address' },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'OwnershipTransferred',
      inputs: [
        { name: 'from', type: 'address', indexed: true, internalType: 'address' },
        { name: 'to', type: 'address', indexed: true, internalType: 'address' },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'PrizeLevelCalculated',
      inputs: [
        {
          name: 'prizeAmountByLevels',
          type: 'uint256[4]',
          indexed: true,
          internalType: 'uint256[4]',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'RequestedNumbersDraw',
      inputs: [{ name: 'requestId', type: 'uint256', indexed: true, internalType: 'uint256' }],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'WinningNumbers',
      inputs: [
        { name: 'winningNumbers', type: 'uint8[6]', indexed: true, internalType: 'uint8[6]' },
      ],
      anonymous: false,
    },
    { type: 'error', name: 'LOTTO__ALLREADY_CLAIMED', inputs: [] },
    { type: 'error', name: 'LOTTO__CLAIM_PRIZE_FAILED', inputs: [] },
    {
      type: 'error',
      name: 'LOTTO__InvalidNumber',
      inputs: [{ name: '', type: 'string', internalType: 'string' }],
    },
    { type: 'error', name: 'LOTTO__InvalidNumbersLength', inputs: [] },
    {
      type: 'error',
      name: 'LOTTO__LottoIsNotOpen',
      inputs: [{ name: '', type: 'string', internalType: 'string' }],
    },
    { type: 'error', name: 'LOTTO__NotEnoughUniqueNumbers', inputs: [] },
    { type: 'error', name: 'LOTTO__TicketDoesNotExist', inputs: [] },
    { type: 'error', name: 'LOTTO__UpkeepNotNeeded', inputs: [] },
    {
      type: 'error',
      name: 'LOTTO__WrongFee',
      inputs: [{ name: '', type: 'string', internalType: 'string' }],
    },
    {
      type: 'error',
      name: 'OnlyCoordinatorCanFulfill',
      inputs: [
        { name: 'have', type: 'address', internalType: 'address' },
        { name: 'want', type: 'address', internalType: 'address' },
      ],
    },
    {
      type: 'error',
      name: 'OnlyOwnerOrCoordinator',
      inputs: [
        { name: 'have', type: 'address', internalType: 'address' },
        { name: 'owner', type: 'address', internalType: 'address' },
        { name: 'coordinator', type: 'address', internalType: 'address' },
      ],
    },
    { type: 'error', name: 'ReentrancyGuardReentrantCall', inputs: [] },
    { type: 'error', name: 'ZeroAddress', inputs: [] },
  ],
} as const;
