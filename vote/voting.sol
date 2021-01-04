pragma solidity ^0.6.0;
contract Voting {


  mapping (bytes32 => uint8) public votesReceived;//the total count of someone

  //someone have voted of not
  mapping (address=>bool) public voters;
  mapping (address=>bool) public register;
  mapping (address=>string) public voteData;

  string[] public candidateList;
  bytes32[] public registerIdList;

  string ProjectName;
  string RegisterStartTime;
  string RegisterEndTime;
  string VoteStartTime;
  string VoteEndTime;

  uint8 registerCount = 0;
  uint8 voteCount = 0;

  constructor() public {

  }
  
  function projectSetup(string memory title, string memory select1, string memory select2, string memory select3) public{
      ProjectName = title;
      candidateList=[select1, select2, select3];
  }

  function registerIdSetup(bytes32 register1, bytes32 register2, bytes32 register3) public{
      registerIdList.push(register1);
      registerIdList.push(register2);
      registerIdList.push(register3);

  }

  function TimeSetSetup(string memory register_start_time,string memory register_end_time, string memory vote_start_time, string memory vote_end_time) public{
    RegisterStartTime = register_start_time;
    RegisterEndTime = register_end_time;
    VoteStartTime = vote_start_time;
    VoteEndTime = vote_end_time;
  }

  function getProjectName() public view returns (string memory){
    return ProjectName;
  }

  function getRegisterStartTime() public view returns (string memory){
    return RegisterStartTime;
  }

  function getRegisterEndTime() public view returns (string memory){
    return RegisterEndTime;
  }

  function  getVoteStartTime() public view returns (string memory){
    return VoteStartTime;
  }

  function getVoteEndTime() public view returns (string memory){
    return VoteEndTime;
  }

  function getCandidateList1() public view returns (string memory){
    return candidateList[0];
  }
  function getCandidateList2() public view returns (string memory){
    return candidateList[1];
  }
  function getCandidateList3() public view returns (string memory){
    return candidateList[2];
  }

  function getRegisterCount() public view returns (uint8){
      return registerCount;
  }

  function getVoteCount() public view returns (uint8){
      return voteCount;
  }

  function getVoteData() public view returns (string memory){
      return voteData[msg.sender];
  }


  //the total count of someone
  function totalVotesFor(bytes32 candidate) view public returns (uint8) {
    //require(validCandidate(candidate));//the candidate is true
    return votesReceived[candidate];
  }

  //vote to somesome and write someone has been voted
  function voteForCandidate(bytes32 candidate) public {

    votesReceived[candidate] += 1;

  }
  
  //someone register.
  function someoneRegister(bytes32 registerId) public{
      for(uint i = 0; i < registerIdList.length; i++){
          if(registerIdList[i] == registerId){
            register[msg.sender] = true;
            registerIdList[i] = "0x0";
            registerCount += 1;
          }
      }
  }

  //if someone has registered or not.
  function VaildID() public view  returns (bool) {
      if(register[msg.sender]) {
          return true;
      }
      return false;
  }

  //if someone has voted or not.
  function isVoted() public view returns (bool) {
      if(voters[msg.sender]) {
          return true;
      }
      return false;
  }

}
