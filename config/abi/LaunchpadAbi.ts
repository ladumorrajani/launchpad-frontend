const abi = [
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "ethPricePerToken",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "minTokenBuy",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxTokenBuy",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "endDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "releaseDelay",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "vestingDuration",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct MainLaunchpadInfo",
                "name": "_info",
                "type": "tuple"
            },
            {
                "internalType": "uint256",
                "name": "_protocolFee",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_protocolFeeAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_operator",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_factory",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            }
        ],
        "name": "AddressEmptyCode",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "AddressInsufficientBalance",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "AmountExceedsHardCap",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "AmountExceedsMaxTokenAmount",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "AmountTooLow",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "Ended",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "EthereumTransferFailed",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "FailedInnerCall",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidBuyAmount",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidEndDate",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidEthPrice",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidMaxTokenBuy",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidMinTokenBuy",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidStartDate",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidTokenHardCapIncrement",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidWhitelistProof",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "NoBalanceToWithdraw",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "NoClaimableTokens",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "NoPurchasedTokens",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "NotClaimable",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "NotEnded",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "NotStarted",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "OperatorZeroAddress",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "token",
                "type": "address"
            }
        ],
        "name": "SafeERC20FailedOperation",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "SameOperator",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "ZeroAddress",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOperator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOperator",
                "type": "address"
            }
        ],
        "name": "OperatorTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_token",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newTokenHardCap",
                "type": "uint256"
            }
        ],
        "name": "TokenHardCapUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_token",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "buyer",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "TokensClaimed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_token",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "buyer",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "TokensPurchased",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newVestingDuration",
                "type": "uint256"
            }
        ],
        "name": "VestingDurationUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "wlBlockNumber",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "wlMinBalance",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "wlRoot",
                "type": "bytes32"
            }
        ],
        "name": "WhitelistUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_token",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newEthPricePerToken",
                "type": "uint256"
            }
        ],
        "name": "ethPricePerTokenUpdated",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32[]",
                "name": "proof",
                "type": "bytes32[]"
            }
        ],
        "name": "buyTokens",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "claimTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "claimableAmount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "claimedAmount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "endDate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "ethPricePerToken",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "ethAmount",
                "type": "uint256"
            }
        ],
        "name": "ethToToken",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "factory",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tokenHardCapIncrement",
                "type": "uint256"
            }
        ],
        "name": "increaseHardCap",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "isClaimable",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "isEnded",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "isStarted",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "maxTokenBuy",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "minTokenBuy",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "operator",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "protocolFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "protocolFeeAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "purchasedAmount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "releaseDelay",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            }
        ],
        "name": "setName",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_vestingDuration",
                "type": "uint256"
            }
        ],
        "name": "setVestingDuration",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "startDate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "token",
        "outputs": [
            {
                "internalType": "contract IERC20",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tokenHardCap",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tokenUnit",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalPurchasedAmount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOperator",
                "type": "address"
            }
        ],
        "name": "transferOperatorOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_newOwner",
                "type": "address"
            }
        ],
        "name": "transferPurchasedOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_ethPricePerToken",
                "type": "uint256"
            }
        ],
        "name": "updateEthPricePerToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_wlBlockNumber",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_wlMinBalance",
                "type": "uint256"
            },
            {
                "internalType": "bytes32",
                "name": "_wlRoot",
                "type": "bytes32"
            }
        ],
        "name": "updateWhitelist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "vestingDuration",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawEth",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "wlBlockNumber",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "wlMinBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "wlRoot",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
] as const

export default abi
