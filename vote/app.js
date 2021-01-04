console.log("Voting")

let accounts = [];
let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
console.log("web3", web3)

if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
}

console.log("isMetaMask：" + ethereum.isMetaMask)



// Voting.sol abi
var contractAbi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "register_start_time",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "register_end_time",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "vote_start_time",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "vote_end_time",
				"type": "string"
			}
		],
		"name": "TimeSetSetup",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "VaildID",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "candidateList",
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
		"name": "getCandidateList1",
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
		"name": "getCandidateList2",
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
		"name": "getCandidateList3",
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
		"name": "getProjectName",
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
		"name": "getRegisterCount",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRegisterEndTime",
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
		"name": "getRegisterStartTime",
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
		"name": "getVoteCount",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getVoteData",
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
		"name": "getVoteEndTime",
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
		"name": "getVoteStartTime",
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
		"name": "isVoted",
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
		"inputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "select1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "select2",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "select3",
				"type": "string"
			}
		],
		"name": "projectSetup",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"name": "register",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "registerIdList",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "register1",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "register2",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "register3",
				"type": "bytes32"
			}
		],
		"name": "registerIdSetup",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "registerId",
				"type": "bytes32"
			}
		],
		"name": "someoneRegister",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "candidate",
				"type": "bytes32"
			}
		],
		"name": "totalVotesFor",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
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
		"name": "voteData",
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
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "candidate",
				"type": "bytes32"
			}
		],
		"name": "voteForCandidate",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"name": "voters",
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
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "votesReceived",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// 0x2b67db3e562528FEf2ba040f83f6D6421BBfb13E  本地
// rinkeby
var contract = new web3.eth.Contract(contractAbi, "0xc77829B47E4f9299B19DbE370009FC4758481d93");

console.log("contract MyDapp", contract)



$(".enableEthereumButton").click(function () {
    // alert("enableEthereumButton")
    // ethereum.request({ method: 'eth_requestAccounts' });
    getAccount()

}
)



async function getAccount() {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    // showAccount.innerHTML = account;
    $(".showAccount").html(account);

}



$("#btn_projectSetup").click(function () {
	let _title = $('#title').val();
	let _select1 = $('#select1').val();
	let _select2 = $('#select2').val();
	let _select3 = $('#select3').val();
	console.log("projectSetup success：", _title);


    contract.methods.projectSetup(_title, _select1, _select2, _select3).send({ from: accounts[0] }).then(
        function (result) {
            console.log("projectSetup==>", result);
			console.log("projectSetup transactionHash==>", result.transactionHash);
			alert("投票项目设置成功\n"+"项目名称:\n"+_title+"\n候选项1:\n"+_select1+"\n候选项2:\n"+_select2+"\n候选项3:\n"+_select3);


		}
	)


}
)




$("#btn_registerIdSetup").click(function () {
	let _register1 = $('#register1').val();
	let _register2 = $('#register2').val();
	let _register3 = $('#register3').val();


    contract.methods.registerIdSetup(_register1, _register2, _register3).send({ from: accounts[0] }).then(	
		function (result) {
            console.log("registerIdSetup==>", result);
			console.log("registerIdSetup transactionHash==>", result.transactionHash);
			alert("注册码设置成功\n"+"注册码1:\n"+_register1+"\n注册码2:\n"+_register2+"\n注册码3:\n"+_register3);

        }
	)


}
)





$("#btn_TimeSetSetup").click(function () {
	let _register_start_time = $('#register_start_time').val();
	let _register_end_time = $('#register_end_time').val();
	let _vote_start_time = $('#vote_start_time').val();
	let _vote_end_time = $('#vote_end_time').val();


    contract.methods.TimeSetSetup(_register_start_time, _register_end_time, _vote_start_time, _vote_end_time).send({ from: accounts[0] }).then(	
		function (result) {
            console.log("TimeSetSetup==>", result);
			console.log("TimeSetSetup transactionHash==>", result.transactionHash);
			alert("时间集设置成功\n"+"注册起始时间:\n"+_register_start_time+"\n注册结束时间:\n"+_register_end_time+"\n投票开始时间:\n"+_vote_start_time+"\n投票结束时间:\n"+_vote_end_time);

        }
	)


}
)



$("#btn_someoneRegister").click(function () {
	let _someoneRegister = $('#someoneRegister').val();


    contract.methods.someoneRegister(_someoneRegister).send({ from: accounts[0] }).then(	
		function (result) {
            console.log("someoneRegister==>", result);
			console.log("someoneRegister transactionHash==>", result.transactionHash);
			if (result.status) {
				alert("注册成功！")
				                    
				} else {
				                    
			    alert("注册码不正确，注册失败！")
				}

        }
	)


}
)



$("#btn_getRegisterTimes").click(function () {

	contract.methods.getRegisterStartTime().call({ from: accounts[0] }).then(	
		function (result) {
			console.log("getRegisterStartTime==>", result);
			$(".getRegisterStartTime").html(result)

        }
	)

    contract.methods.getRegisterEndTime().call({ from: accounts[0] }).then(	
		function (result) {
			console.log("getRegisterEndTime==>", result);
			$(".getRegisterEndTime").html(result)

        }
	)

}
)



$("#btn_getCandidateList").click(function () {

	contract.methods.getProjectName().call({ from: accounts[0] }).then(	
		function (result) {
			console.log("getProjectName==>", result);
			$(".name").html(result)

        }
	)

    contract.methods.getCandidateList1().call({ from: accounts[0] }).then(	
		function (result) {
			console.log("candidateList1==>", result);
			$(".list1").html(result)

        }
	)

	contract.methods.getCandidateList2().call({ from: accounts[0] }).then(	
		function (result) {
			console.log("candidateList2==>", result);
			$(".list2").html(result)

        }
	)

	contract.methods.getCandidateList3().call({ from: accounts[0] }).then(	
		function (result) {
			console.log("candidateList3==>", result);
			$(".list3").html(result)

        }
	)

	contract.methods.getVoteStartTime().call({ from: accounts[0] }).then(	
		function (result) {
			console.log("getVoteStartTime==>", result);
			$(".getVoteStartTime").html(result)

        }
	)

	contract.methods.getVoteEndTime().call({ from: accounts[0] }).then(	
		function (result) {
			console.log("getVoteEndTime==>", result);
			$(".getVoteEndTime").html(result)

        }
	)

}
)


$("#btn_VaildID").click(function () {

	contract.methods.VaildID().call({ from: accounts[0] }).then(	
		function (result) {
			console.log("VaildID==>", result);
			if (result==true) {
				$(".fff").html("您的账号已注册，可以进行投票！");
				                    
				    } else {
				                    
				$(".fff").html("您的账号还未注册，请在注册后进行投票！");
				    }
			console.log(result)

        }
	)

}
)


$("#btn_isVoted").click(function () {

	contract.methods.isVoted().call({ from: accounts[0] }).then(	
		function (result) {
			console.log("isVoted==>", result);
			if (result==true) {
				$(".lll").html("您的账号已经投过票了，请勿重复投票！");
				                    
				    } else {
				                    
			    $(".lll").html("您的账号还没投票，请在规定时间内完成投票！");
				    }
			console.log(result)

        }
	)

}
)


$("#btn_voteForCandidate1").click(function () {
	let _voteForCandidate1 = $('#voteForCandidate1').val();


    contract.methods.voteForCandidate(_voteForCandidate1).send({ from: accounts[0] }).then(	
		function (result) {
            console.log("voteForCandidate1==>", result);
			console.log("voteForCandidate1 transactionHash==>", result.transactionHash);


        }
	)


}
)

$("#btn_voteForCandidate2").click(function () {
	let _voteForCandidate2 = $('#voteForCandidate2').val();


    contract.methods.voteForCandidate(_voteForCandidate2).send({ from: accounts[0] }).then(	
		function (result) {
            console.log("voteForCandidate2==>", result);
			console.log("voteForCandidate2 transactionHash==>", result.transactionHash);


        }
	)


}
)

$("#btn_voteForCandidate3").click(function () {
	let _voteForCandidate3 = $('#voteForCandidate3').val();


    contract.methods.voteForCandidate(_voteForCandidate3).send({ from: accounts[0] }).then(	
		function (result) {
            console.log("voteForCandidate3==>", result);
			console.log("voteForCandidate3 transactionHash==>", result.transactionHash);


        }
	)


}
)



$("#btn_totalVotesFor").click(function () {
	let _totalVotesFor1 = $('#totalVotesFor1').val();
	let _totalVotesFor2 = $('#totalVotesFor2').val();
	let _totalVotesFor3 = $('#totalVotesFor3').val();


    contract.methods.totalVotesFor(_totalVotesFor1).call({ from: accounts[0] }).then(	
		function (result) {
			console.log("totalVotesFor1==>", result);
			$(".01").html(result)

        }
	)

	contract.methods.totalVotesFor(_totalVotesFor2).call({ from: accounts[0] }).then(	
		function (result) {
			console.log("totalVotesFor2==>", result);
			$(".02").html(result)

        }
	)

	contract.methods.totalVotesFor(_totalVotesFor3).call({ from: accounts[0] }).then(	
		function (result) {
			console.log("totalVotesFor3==>", result);
			$(".03").html(result)

        }
	)

	contract.methods.getProjectName().call({ from: accounts[0] }).then(	
		function (result) {
			console.log("getProjectName==>", result);
			$(".name").html(result)

        }
	)

    contract.methods.getCandidateList1().call({ from: accounts[0] }).then(	
		function (result) {
			console.log("candidateList1==>", result);
			$(".list1").html(result)

        }
	)

	contract.methods.getCandidateList2().call({ from: accounts[0] }).then(	
		function (result) {
			console.log("candidateList2==>", result);
			$(".list2").html(result)

        }
	)

	contract.methods.getCandidateList3().call({ from: accounts[0] }).then(	
		function (result) {
			console.log("candidateList3==>", result);
			$(".list3").html(result)

        }
	)


}
)
