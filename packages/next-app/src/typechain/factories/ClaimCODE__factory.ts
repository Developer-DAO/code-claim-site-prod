/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ClaimCODE, ClaimCODEInterface } from "../ClaimCODE";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_claimPeriodEnds",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_codeToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Address0Error",
    type: "error",
  },
  {
    inputs: [],
    name: "AlreadyClaimed",
    type: "error",
  },
  {
    inputs: [],
    name: "ClaimEnded",
    type: "error",
  },
  {
    inputs: [],
    name: "ClaimNotEnded",
    type: "error",
  },
  {
    inputs: [],
    name: "InitError",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidProof",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_claimant",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "Claim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "_merkleRoot",
        type: "bytes32",
      },
    ],
    name: "MerkleRootChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "Sweep20",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenID",
        type: "uint256",
      },
    ],
    name: "Sweep721",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "claimPeriodEnds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "_merkleProof",
        type: "bytes32[]",
      },
    ],
    name: "claimTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "codeToken",
    outputs: [
      {
        internalType: "contract ICODE",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "isClaimed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "merkleRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_merkleRoot",
        type: "bytes32",
      },
    ],
    name: "setMerkleRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddr",
        type: "address",
      },
    ],
    name: "sweep20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenID",
        type: "uint256",
      },
    ],
    name: "sweep721",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "_proof",
        type: "bytes32[]",
      },
      {
        internalType: "bytes32",
        name: "_leaf",
        type: "bytes32",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b50604051620013ae380380620013ae83398101604081905262000034916200019a565b6200003f3362000098565b6000805460ff60a01b191690556001600160a01b03811662000074576040516324560b2960e11b815260040160405180910390fd5b60038290556001600160a01b03811660805262000090620000e8565b5050620001d9565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b620000fc600054600160a01b900460ff1690565b15620001415760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015260640160405180910390fd5b6000805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586200017d3390565b6040516001600160a01b03909116815260200160405180910390a1565b60008060408385031215620001ae57600080fd5b825160208401519092506001600160a01b0381168114620001ce57600080fd5b809150509250929050565b6080516111a46200020a600039600081816101a70152818161080e015281816108a5015261099501526111a46000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80638456cb59116100975780639a114cb2116100665780639a114cb2146101f35780639e34070f14610206578063d85f9a8b14610237578063f2fde38b1461024a57600080fd5b80638456cb59146101755780638da5cb5b1461017d578063904d2022146101a2578063972a2a62146101c957600080fd5b806366deac47116100d357806366deac471461013e578063715018a61461014757806376cc48541461014f5780637cb647591461016257600080fd5b80632eb4a7ab146100fa5780633f4ba83a146101165780635c975abb14610120575b600080fd5b61010360025481565b6040519081526020015b60405180910390f35b61011e61025d565b005b600054600160a01b900460ff165b604051901515815260200161010d565b61010360035481565b61011e6102c6565b61011e61015d366004610f3a565b61032a565b61011e610170366004610f64565b61046e565b61011e61053d565b6000546001600160a01b03165b6040516001600160a01b03909116815260200161010d565b61018a7f000000000000000000000000000000000000000000000000000000000000000081565b6101dc6101d7366004610fc9565b61059f565b60408051921515835260208301919091520161010d565b61011e610201366004611015565b6105ef565b61012e610214366004610f64565b600881901c60009081526001602081905260409091205460ff9092161b16151590565b61011e610245366004611061565b610934565b61011e610258366004611061565b610b95565b6000546001600160a01b031633146102bc5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6102c4610c77565b565b6000546001600160a01b031633146103205760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102b3565b6102c46000610d38565b6000546001600160a01b031633146103845760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102b3565b816001600160a01b0381166323b872dd306103a76000546001600160a01b031690565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b1681526001600160a01b0392831660048201529116602482015260448101859052606401600060405180830381600087803b15801561040e57600080fd5b505af1158015610422573d6000803e3d6000fd5b5050604080516001600160a01b0387168152602081018690527f82b0210374125cdd64dfcfea448d1e398cd4ebbd12b15edd564efe6f2750ce27935001905060405180910390a1505050565b6000546001600160a01b031633146104c85760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102b3565b60025415610502576040517fb071c0a400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60028190556040518181527f1b930366dfeaa7eb3b325021e4ae81e36527063452ee55b86c95f85b36f4c31c9060200160405180910390a150565b6000546001600160a01b031633146105975760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102b3565b6102c4610da0565b6000806105e3858580806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250506002549150869050610e50565b91509150935093915050565b600054600160a01b900460ff16156106495760405162461bcd60e51b815260206004820152601060248201527f5061757361626c653a207061757365640000000000000000000000000000000060448201526064016102b3565b6040517fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003360601b166020820152603481018490526000906054016040516020818303038152906040528051906020012090506000806106aa85858561059f565b91509150816106e5576040517f09bde33900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61070c81600881901c60009081526001602081905260409091205460ff9092161b16151590565b15610743576040517f646cf55800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60035442111561077f576040517f4f184b7e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600881901c6000908152600160208190526040909120805460ff84169290921b909117905560405186815233907f47cee97cb7acd717b3c0aa1435d004cd5b3c8c57d70dbceb4e4458bbd60e39d49060200160405180910390a26040517fd371ddd5000000000000000000000000000000000000000000000000000000008152336004820181905260248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063d371ddd590604401600060405180830381600087803b15801561085a57600080fd5b505af115801561086e573d6000803e3d6000fd5b50506040517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316925063a9059cbb9150604401602060405180830381600087803b1580156108f357600080fd5b505af1158015610907573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092b9190611083565b50505050505050565b6000546001600160a01b0316331461098e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102b3565b60008190507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b03161480156109d657506003544211155b15610a0d576040517f72c38d2900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b806001600160a01b031663a9059cbb610a2e6000546001600160a01b031690565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b038516906370a082319060240160206040518083038186803b158015610a8657600080fd5b505afa158015610a9a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610abe91906110a5565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b1681526001600160a01b0390921660048301526024820152604401602060405180830381600087803b158015610b1c57600080fd5b505af1158015610b30573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b549190611083565b506040516001600160a01b03831681527f510a40bef53ebad78064fc0e32d3ceface15a9e2d325d8fa92d3430fa976b01b9060200160405180910390a15050565b6000546001600160a01b03163314610bef5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102b3565b6001600160a01b038116610c6b5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016102b3565b610c7481610d38565b50565b600054600160a01b900460ff16610cd05760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064016102b3565b600080547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600054600160a01b900460ff1615610dfa5760405162461bcd60e51b815260206004820152601060248201527f5061757361626c653a207061757365640000000000000000000000000000000060448201526064016102b3565b600080547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610d1b3390565b6000808281805b8751811015610f1257610e6b6002836110ed565b91506000888281518110610e8157610e8161110c565b60200260200101519050808411610ec3576040805160208101869052908101829052606001604051602081830303815290604052805190602001209350610eff565b6040805160208101839052908101859052606001604051602081830303815290604052805190602001209350600183610efc919061113b565b92505b5080610f0a81611153565b915050610e57565b50941495939450505050565b80356001600160a01b0381168114610f3557600080fd5b919050565b60008060408385031215610f4d57600080fd5b610f5683610f1e565b946020939093013593505050565b600060208284031215610f7657600080fd5b5035919050565b60008083601f840112610f8f57600080fd5b50813567ffffffffffffffff811115610fa757600080fd5b6020830191508360208260051b8501011115610fc257600080fd5b9250929050565b600080600060408486031215610fde57600080fd5b833567ffffffffffffffff811115610ff557600080fd5b61100186828701610f7d565b909790965060209590950135949350505050565b60008060006040848603121561102a57600080fd5b83359250602084013567ffffffffffffffff81111561104857600080fd5b61105486828701610f7d565b9497909650939450505050565b60006020828403121561107357600080fd5b61107c82610f1e565b9392505050565b60006020828403121561109557600080fd5b8151801515811461107c57600080fd5b6000602082840312156110b757600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000816000190483118215151615611107576111076110be565b500290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000821982111561114e5761114e6110be565b500190565b6000600019821415611167576111676110be565b506001019056fea26469706673582212202ac56c19ad82fd70b9ed5d789e319edd9f7535fb2c4dd9d30ba298b0ec444f4364736f6c63430008090033";

export class ClaimCODE__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _claimPeriodEnds: BigNumberish,
    _codeToken: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ClaimCODE> {
    return super.deploy(
      _claimPeriodEnds,
      _codeToken,
      overrides || {},
    ) as Promise<ClaimCODE>;
  }
  getDeployTransaction(
    _claimPeriodEnds: BigNumberish,
    _codeToken: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(
      _claimPeriodEnds,
      _codeToken,
      overrides || {},
    );
  }
  attach(address: string): ClaimCODE {
    return super.attach(address) as ClaimCODE;
  }
  connect(signer: Signer): ClaimCODE__factory {
    return super.connect(signer) as ClaimCODE__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ClaimCODEInterface {
    return new utils.Interface(_abi) as ClaimCODEInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): ClaimCODE {
    return new Contract(address, _abi, signerOrProvider) as ClaimCODE;
  }
}
