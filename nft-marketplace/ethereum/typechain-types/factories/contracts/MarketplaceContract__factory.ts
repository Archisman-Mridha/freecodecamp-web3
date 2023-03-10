/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  MarketplaceContract,
  MarketplaceContractInterface,
} from "../../contracts/MarketplaceContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nftId",
        type: "uint256",
      },
    ],
    name: "NFTAlreadyListed",
    type: "error",
  },
  {
    inputs: [],
    name: "NFTCanOnlyBeListedByOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "NFTContractDidntGiveApprovalToMarketplace",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nftId",
        type: "uint256",
      },
    ],
    name: "NFTNotListed",
    type: "error",
  },
  {
    inputs: [],
    name: "NFTPriceMustBeMoreThanZero",
    type: "error",
  },
  {
    inputs: [],
    name: "NoEarning",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nftId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "NotEnoughBuyingAmountSent",
    type: "error",
  },
  {
    inputs: [],
    name: "WithdrawEarningFailed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "nftId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "NFTSold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "nftId",
        type: "uint256",
      },
    ],
    name: "NFTUnlisted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "nftId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "NewNFTListed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nftId",
        type: "uint256",
      },
    ],
    name: "buyNFT",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nftId",
        type: "uint256",
      },
    ],
    name: "getNFTDetails",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "seller",
            type: "address",
          },
        ],
        internalType: "struct MarketplaceContract.NFTDetails",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
    ],
    name: "getTotalEarning",
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
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nftId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "listNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nftId",
        type: "uint256",
      },
    ],
    name: "unlistNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nftId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedPrice",
        type: "uint256",
      },
    ],
    name: "updateNFTPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawEarning",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50600160008190555061172d806100286000396000f3fe6080604052600436106100705760003560e01c8063899161a01161004e578063899161a01461010457806398e9bc9c1461011b578063a82ba76f14610158578063ad05f1b41461017457610070565b80632bc268af14610075578063451740751461009e5780637fc27efd146100db575b600080fd5b34801561008157600080fd5b5061009c60048036038101906100979190611397565b61019d565b005b3480156100aa57600080fd5b506100c560048036038101906100c091906113ea565b6104d6565b6040516100d29190611426565b60405180910390f35b3480156100e757600080fd5b5061010260048036038101906100fd9190611441565b61051f565b005b34801561011057600080fd5b506101196107ff565b005b34801561012757600080fd5b50610142600480360381019061013d9190611441565b610969565b60405161014f91906114ce565b60405180910390f35b610172600480360381019061016d9190611441565b610a34565b005b34801561018057600080fd5b5061019b60048036038101906101969190611397565b610e1d565b005b828233600083905060008173ffffffffffffffffffffffffffffffffffffffff16636352211e856040518263ffffffff1660e01b81526004016101e09190611426565b602060405180830381865afa1580156101fd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061022191906114fe565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610288576040517f66163a5800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87876000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000838152602001908152602001600020604051806040016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525050905060008160000151116103945782826040517fc57ed6fe00000000000000000000000000000000000000000000000000000000815260040161038b92919061153a565b60405180910390fd5b60405180604001604052808a81526020013373ffffffffffffffffffffffffffffffffffffffff16815250600160008d73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008c81526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050898b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f5b65a0aebbeb520abab9fad166ab637cd5ca40d6ede7bd02f3941df53ee9810a8c6040516104c19190611426565b60405180910390a45050505050505050505050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b818133600083905060008173ffffffffffffffffffffffffffffffffffffffff16636352211e856040518263ffffffff1660e01b81526004016105629190611426565b602060405180830381865afa15801561057f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105a391906114fe565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461060a576040517f66163a5800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86866000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000838152602001908152602001600020604051806040016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525050905060008160000151116107165782826040517fc57ed6fe00000000000000000000000000000000000000000000000000000000815260040161070d92919061153a565b60405180910390fd5b600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a81526020019081526020016000206000808201600090556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555050888a73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f5e22415fbc0319574562e44217526b07e663891c4338550fe529eac37e9e0cb260405160405180910390a450505050505050505050565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000811161087d576040517f51b588f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060003373ffffffffffffffffffffffffffffffffffffffff16826040516108e890611594565b60006040518083038185875af1925050503d8060008114610925576040519150601f19603f3d011682016040523d82523d6000602084013e61092a565b606091505b5050905080610965576040517fab2e540700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6109716112ce565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000838152602001908152602001600020604051806040016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525050905092915050565b81816000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000838152602001908152602001600020604051806040016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152505090506000816000015111610b405782826040517fc57ed6fe000000000000000000000000000000000000000000000000000000008152600401610b3792919061153a565b60405180910390fd5b610b48611275565b6000600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000868152602001908152602001600020604051806040016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152505090508060000151341015610c5857858582600001516040517fff5d5f74000000000000000000000000000000000000000000000000000000008152600401610c4f939291906115a9565b60405180910390fd5b3460026000836020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610cab919061160f565b92505081905550600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008681526020019081526020016000206000808201600090556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905550508573ffffffffffffffffffffffffffffffffffffffff166342842e0e826020015133886040518463ffffffff1660e01b8152600401610d7593929190611643565b600060405180830381600087803b158015610d8f57600080fd5b505af1158015610da3573d6000803e3d6000fd5b50505050848673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167ff6ccc0cf89c21c54724ea6ef2ec01da8fe33a1cebe06607e160fd78483eba30234604051610e059190611426565b60405180910390a450610e166112c4565b5050505050565b82826000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000838152602001908152602001600020604051806040016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250509050600081600001511115610f2a5782826040517ff70f8869000000000000000000000000000000000000000000000000000000008152600401610f2192919061153a565b60405180910390fd5b858533600083905060008173ffffffffffffffffffffffffffffffffffffffff16636352211e856040518263ffffffff1660e01b8152600401610f6d9190611426565b602060405180830381865afa158015610f8a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fae91906114fe565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611015576040517f66163a5800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000891161104f576040517f9f3f579200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008b90503073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1663081812fc8d6040518263ffffffff1660e01b81526004016110a49190611426565b602060405180830381865afa1580156110c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110e591906114fe565b73ffffffffffffffffffffffffffffffffffffffff1614611132576040517f7b8cfaf700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405180604001604052808b81526020013373ffffffffffffffffffffffffffffffffffffffff16815250600160008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008d81526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050508a8c73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f5b65a0aebbeb520abab9fad166ab637cd5ca40d6ede7bd02f3941df53ee9810a8d60405161125f9190611426565b60405180910390a4505050505050505050505050565b6002600054036112ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112b1906116d7565b60405180910390fd5b6002600081905550565b6001600081905550565b604051806040016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061132e82611303565b9050919050565b61133e81611323565b811461134957600080fd5b50565b60008135905061135b81611335565b92915050565b6000819050919050565b61137481611361565b811461137f57600080fd5b50565b6000813590506113918161136b565b92915050565b6000806000606084860312156113b0576113af6112fe565b5b60006113be8682870161134c565b93505060206113cf86828701611382565b92505060406113e086828701611382565b9150509250925092565b600060208284031215611400576113ff6112fe565b5b600061140e8482850161134c565b91505092915050565b61142081611361565b82525050565b600060208201905061143b6000830184611417565b92915050565b60008060408385031215611458576114576112fe565b5b60006114668582860161134c565b925050602061147785828601611382565b9150509250929050565b61148a81611361565b82525050565b61149981611323565b82525050565b6040820160008201516114b56000850182611481565b5060208201516114c86020850182611490565b50505050565b60006040820190506114e3600083018461149f565b92915050565b6000815190506114f881611335565b92915050565b600060208284031215611514576115136112fe565b5b6000611522848285016114e9565b91505092915050565b61153481611323565b82525050565b600060408201905061154f600083018561152b565b61155c6020830184611417565b9392505050565b600081905092915050565b50565b600061157e600083611563565b91506115898261156e565b600082019050919050565b600061159f82611571565b9150819050919050565b60006060820190506115be600083018661152b565b6115cb6020830185611417565b6115d86040830184611417565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061161a82611361565b915061162583611361565b925082820190508082111561163d5761163c6115e0565b5b92915050565b6000606082019050611658600083018661152b565b611665602083018561152b565b6116726040830184611417565b949350505050565b600082825260208201905092915050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b60006116c1601f8361167a565b91506116cc8261168b565b602082019050919050565b600060208201905081810360008301526116f0816116b4565b905091905056fea26469706673582212207388b266d8edf08b644b50a51ac96153f5e8fccb7d06f95329d168afb4491d3f64736f6c63430008110033";

type MarketplaceContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MarketplaceContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MarketplaceContract__factory extends ContractFactory {
  constructor(...args: MarketplaceContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MarketplaceContract> {
    return super.deploy(overrides || {}) as Promise<MarketplaceContract>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MarketplaceContract {
    return super.attach(address) as MarketplaceContract;
  }
  override connect(signer: Signer): MarketplaceContract__factory {
    return super.connect(signer) as MarketplaceContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MarketplaceContractInterface {
    return new utils.Interface(_abi) as MarketplaceContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MarketplaceContract {
    return new Contract(address, _abi, signerOrProvider) as MarketplaceContract;
  }
}
