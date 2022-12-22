import React, { useState, useEffect } from "react";
import logo from "../images/Retsukologo.png";
import eth from "../images/eth.png";
import nft from "../images/nombre.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { ImCopy } from "react-icons/im";
import {RiQuestionFill} from 'react-icons/ri'
import ReactTooltip from 'react-tooltip';
import {
  Retsuko_Token_balance,
  Allowance_of_single_staking_contract,
  Approv_Retsuko_Staking_Contract,
  Harvest_Retsuko_Token_Staking,
  Staking_Retsuko_Token,
  
  
  
  Unstaking_Retsuko_Token,
  
  single_staking_Emergency_Exit,
  single_staking_period,
  Retsuko_Token_balance2,
  Allowance_of_single_staking_contract2,
  Approv_Retsuko_Staking_Contract2,
  Harvest_Retsuko_Token_Staking2,
  Staking_Retsuko_Token2,
  
  
  
  Unstaking_Retsuko_Token2,
  
  single_staking_Emergency_Exit2,
  single_staking_period2,
  user_information
} from "./../Web3/Contract_methods";

import toast, { Toaster } from "react-hot-toast";
import { useSwitch } from "@mui/base";

const tost = () =>
  toast.success("Success.", {
    style: {
      border: "1px solid #713200",
      padding: "10px",
      color: "#1C1C1C",
    },
    iconTheme: {
      primary: "#1C1C1C",
      secondary: "#FFFAEE",
    },
  });

export default function Staking() {
  const [balace_Retsuko, setBalace_Retsuko] = useState(0);
  const [checkApprove, setCheckApprove] = useState(false);
  const [stakeAmount, setStakeAmount] = useState(0);
  const [harvestamount, setHarvestAmount] = useState(0);
  const [stakingBalance, setStakingBalance] = useState(0);
  const [BalanceToUnstake, setBaltounstale] = useState(0)
  const [status, setStatus] = useState(0)
  const [startstaking, setStartStaking] = useState(0)



  const [checkApprove2, setCheckApprove2] = useState(false);
  const [stakeAmount2, setStakeAmount2] = useState(0);
  const [harvestamount2, setHarvestAmount2] = useState(0);
  const [stakingBalance2, setStakingBalance2] = useState(0);
  const [BalanceToUnstake2, setBaltounstale2] = useState(0)
  const [status2, setStatus2] = useState(0)
  const [startstaking2, setStartStaking2] = useState(0)

  useEffect(() => {
    const init = async () => {
      try {
        if (window.address) {
          await Retsuko_token_Balance();
          
          await CheckIfApprove();

          
        

          
        
          

          

          
          
          
        }
      } catch (error) {
        console.log("error", error);
      }
    };
 
    setInterval(() => {
      try {
        init();
      } catch (error) {
        console.log("error", error);
      }
    }, 2000);
  }, [window.address]);

  const Retsuko_token_Balance = async () => {
    const bal = await Retsuko_Token_balance();
    setBalace_Retsuko(bal / 10 ** 18);

    const staked = await user_information()
    console.log(staked)
    setStakingBalance(Number(staked.amount) / 10**18)
   
  };
//  console.log(LPharvestamount,share-rewarddept)
  // if(BalanceToUnstake <= 0){
  //   const data = await Unstaking_Retsuko_Token(BalanceToUnstake,true);
  //   if(data.status){
  //     tost();
  //   }
  // }
  // else{
  //   const data = await Unstaking_Retsuko_Token(BalanceToUnstake,false);
  //   if(data.status){
  //     tost();
  //   }
  // }
  const Approve_Single_staking_Staking_token = async () => {
    try {
      if (checkApprove) {
        if(BalanceToUnstake <= 0){
          const data = await Staking_Retsuko_Token(stakeAmount,true);
          if (data.status) {
            tost();
          }
        }
        else{
          const data = await Staking_Retsuko_Token(stakeAmount,false);
          if (data.status) {
            tost();
          }
        }
      } else {
        const data = await Approv_Retsuko_Staking_Contract();
        setCheckApprove(data.status);
        // if(BalanceToUnstake <= 0){
        //   const data = await Staking_Retsuko_Token(stakeAmount,true);
        //   if (data.status) {
        //     tost();
        //   }
        // }
        // else{
        //   const data = await Staking_Retsuko_Token(stakeAmount,false);
        //   if (data.status) {
        //     tost();
        //   }
        // }
      }
    } catch (error) {
      console.log(error)
    }
  };

  

  const Exit_while_staking =async()=>{
    try {
      const data = await single_staking_Emergency_Exit();
    if(data.status){
      tost();
    }
    } catch (error) {
      console.log(error)
    }
  }

  

  const Unstaking_Retsuko = async () => {
    try {
      const data = await Unstaking_Retsuko_Token(BalanceToUnstake);
    if(data.status){
      tost();
    }
    } catch (error) {
      console.log(error)
    }
  };

  const Harverting = async () => {
    try {
      const data = await Harvest_Retsuko_Token_Staking();
    if (data.status) {
      tost();
    }
    } catch (error) {
      console.log(error)
    }
  };

  

  const CheckIfApprove = async () => {
    const data = await Allowance_of_single_staking_contract();
    if (data > 10) {
      setCheckApprove(true);
    }
  };


  


  


  const MaxStaking = async () => {
    setStakeAmount(balace_Retsuko);
  };

 





  /////////////////////////////////////////////



  useEffect(() => {
    const init = async () => {
      try {
        if (window.address) {
          await Retsuko_token_Balance();
          
          await CheckIfApprove2();
        

         
          
        
          

          

          
          
          
        }
      } catch (error) {
        console.log("error", error);
      }
    };
 
    setInterval(() => {
      try {
        init();
      } catch (error) {
        console.log("error", error);
      }
    }, 2000);
  }, [window.address]);

  const Retsuko_Token_balance2 = async () => {
    const bal = await Retsuko_Token_balance2();
    setBalace_Retsuko(bal / 10 ** 18);
   
  };
//  console.log(LPharvestamount,share-rewarddept)
  // if(BalanceToUnstake <= 0){
  //   const data = await Unstaking_Retsuko_Token(BalanceToUnstake,true);
  //   if(data.status){
  //     tost();
  //   }
  // }
  // else{
  //   const data = await Unstaking_Retsuko_Token(BalanceToUnstake,false);
  //   if(data.status){
  //     tost();
  //   }
  // }
  const Approve_Single_staking_Staking_token2 = async () => {
    try {
      if (checkApprove2) {
        if(BalanceToUnstake2 <= 0){
          const data = await Staking_Retsuko_Token2(stakeAmount2,true);
          if (data.status) {
            tost();
          }
        }
        else{
          const data = await Staking_Retsuko_Token2(stakeAmount2,false);
          if (data.status) {
            tost();
          }
        }
      } else {
        const data = await Approv_Retsuko_Staking_Contract2();
        setCheckApprove2(data.status);
        // if(BalanceToUnstake <= 0){
        //   const data = await Staking_Retsuko_Token(stakeAmount,true);
        //   if (data.status) {
        //     tost();
        //   }
        // }
        // else{
        //   const data = await Staking_Retsuko_Token(stakeAmount,false);
        //   if (data.status) {
        //     tost();
        //   }
        // }
      }
    } catch (error) {
      console.log(error)
    }
  };

  

  const Exit_while_staking2 =async()=>{
    try {
      const data = await single_staking_Emergency_Exit2();
    if(data.status){
      tost();
    }
    } catch (error) {
      console.log(error)
    }
  }

  

  const Unstaking_Retsuko2 = async () => {
    try {
      const data = await Unstaking_Retsuko_Token2(BalanceToUnstake2);
    if(data.status){
      tost();
    }
    } catch (error) {
      console.log(error)
    }
  };

  const Harverting2 = async () => {
    try {
      const data = await Harvest_Retsuko_Token_Staking2();
    if (data.status) {
      tost();
    }
    } catch (error) {
      console.log(error)
    }
  };

  

  const CheckIfApprove2 = async () => {
    const data = await Allowance_of_single_staking_contract2();
    if (data > 10) {
      setCheckApprove(true);
    }
  };


  


  


  const MaxStaking2 = async () => {
    setStakeAmount(balace_Retsuko);
  };


  return (
    <div className="container-fluid staking-main">
      <div className="text-light mx-auto textContent" style={{maxWidth:"1440px"}}>
      <h1>Retsuko Staking</h1>
      <p>Stake Retsuko and earn Retsuko!</p>
      </div>
      <Toaster position="top-left" reverseOrder={false} />
      {/* <LiveStat /> */}
      <div className="row justify-content-around justify-content-lg-between">
        
      </div>

      <div className="row justify-content-around justify-content-lg-between">
        {/* Retsuko STAKING */}
        <div className="col my-3 stakingA">
          <div className="Retsuko-head py-3 d-flex justify-content-between px-3 border-bottom">
            <h5>Retsuko 7 day staking pool</h5>
            {/* <span
              style={{
                backgroundColor: "#1E1E1E",
                padding: "5px",
                borderRadius: "3px",
              }}
            >
              5x
            </span> */}
          </div>
          <div className="Retsuko-body px-3">
            <div
              id="fromTo"
              className="mt-5 mb-4 d-flex justify-content-around"
            >
              <div>
                <span>Retsuko</span>
                <div
                  className="p-2 rounded"
                  style={{
                    backgroundColor: "#383838",
                    height: "fit-content",
                    width: "fit-content",
                  }}
                >
                  <img src={logo} alt="" style={{ maxHeight: "50px" }} />
                </div>
              </div>
              <FaLongArrowAltRight className="my-auto fs-4 text-light" />
              <div>
                <span>Retsuko</span>
                <div
                  className="p-2 rounded"
                  style={{
                    backgroundColor: "#383838",
                    height: "fit-content",
                    width: "fit-content",
                  }}
                >
                  <img src={logo} alt="" style={{ maxHeight: "50px" }} />
                </div>
              </div>
            </div>
            <p>
              Token Address:{" "}
              <a
                href="https://etherscan.io/token/0x46be62d1fc217063c1bf1f35d788690cec7a60ca"
                target="_blank"
                rel="noreferrer"
              >
                0x46b...60ca
              </a>{" "}
              &nbsp;
              <ImCopy
                onClick={() =>
                  navigator.clipboard.writeText(
                    "0x46be62d1fc217063c1bf1f35d788690cec7a60ca"
                  )
                }
              />
              {/* <a href="https://etherscan.io/token/0x9ac59862934ebc36072d4d8ada37c62373a13856" target="_blank">
              0x9ac5...13856
              </a> &nbsp; <ImCopy onClick={() => navigator.clipboard.writeText('0x9ac59862934ebc36072d4d8ada37c62373a13856')}/> */}
            </p>
            <h6 className="mt-4">
              Your Balance: <span>{balace_Retsuko.toFixed(2)}</span>
            </h6>
            <h6 className="mt-4">
             Staked Amount: <span>{stakingBalance.toFixed(2)}</span>
            </h6>
            <hr />
            <div className="apr d-flex justify-content-between">
              <span>Status</span>
              <span>{status == 0 ? "Collecting" : status == 1 ? 'Staking' : 'Completed'}</span>
            </div>
           
            <div className="apr d-flex justify-content-between">
              <span>Withdrawal Lockup</span>
              <span>7 Days</span>
            </div>
            <div className="apr d-flex justify-content-between">
              <span>APY</span>
              <span>1400%</span>
            </div>
            <div className="d-flex inputHarvest">
              <input
                className="p-2 bg-transparent w-100 border-0 text-light"
                value={stakeAmount}
                onChange={(e) => setStakeAmount(e.target.value)}
                placeholder="Stake Amount"
              />
              <button
                className="btn btn-outline-dark text-light"
                onClick={() => MaxStaking()}
              >
                MAX
              </button>
            </div>
            <button
              className="btnFill py-3 mt-4"
              onClick={() => Approve_Single_staking_Staking_token()}
            >
              {checkApprove ? "Stake" : "Approve Contract"}
            </button>
            {stakingBalance > 0 && startstaking != 0 && startstaking < Date.now() ? (
              <button
                className="btnFill py-3 mt-4"
                onClick={() => Unstaking_Retsuko()}
              >
                Unstake
              </button>
            ) : (
              ""
            )}
          

            

            <div className="d-flex justify-content-center mt-3">
              <h5 className="text-light fs-5 my-auto text-center">
                {/*harvestamount.toFixed(2)*/}
              </h5>
             <button
                onClick={() => Harverting()}s
                className="btnFill py-3"
                style={{ width: "fit-content" }}
              >
                Harvest
              </button> 
            </div>
          </div>
        </div>

        {/* Retsuko-ETH STAKING */}
        <div className="col my-3 stakingA">
          <div className="Retsuko-head py-3 d-flex justify-content-between px-3 border-bottom">
            <h5>Retsuko 14 day staking pool</h5>
            {/* <span
              style={{
                backgroundColor: "#1E1E1E",
                padding: "5px",
                borderRadius: "3px",
              }}
            >
              5x
            </span> */}
          </div>
          <div className="Retsuko-body px-3">
            <div
              id="fromTo"
              className="mt-5 mb-4 d-flex justify-content-around"
            >
              <div>
                <span>Retsuko</span>
                <div
                  className="p-2 rounded"
                  style={{
                    backgroundColor: "#383838",
                    height: "fit-content",
                    width: "fit-content",
                  }}
                >
                  <img src={logo} alt="" style={{ maxHeight: "50px" }} />
                </div>
              </div>
              <FaLongArrowAltRight className="my-auto fs-4 text-light" />
              <div>
                <span>Retsuko</span>
                <div
                  className="p-2 rounded"
                  style={{
                    backgroundColor: "#383838",
                    height: "fit-content",
                    width: "fit-content",
                  }}
                >
                  <img src={logo} alt="" style={{ maxHeight: "50px" }} />
                </div>
              </div>
            </div>
            <p>
              Token Address:{" "}
              <a
                href="https://etherscan.io/token/0x46be62d1fc217063c1bf1f35d788690cec7a60ca"
                target="_blank"
                rel="noreferrer"
              >
                0x46b...60ca
              </a>{" "}
              &nbsp;
              <ImCopy
                onClick={() =>
                  navigator.clipboard.writeText(
                    "0x46be62d1fc217063c1bf1f35d788690cec7a60ca"
                  )
                }
              />
              {/* <a href="https://etherscan.io/token/0x9ac59862934ebc36072d4d8ada37c62373a13856" target="_blank">
              0x9ac5...13856
              </a> &nbsp; <ImCopy onClick={() => navigator.clipboard.writeText('0x9ac59862934ebc36072d4d8ada37c62373a13856')}/> */}
            </p>
            <h6 className="mt-4">
              Your Balance: <span>{balace_Retsuko.toFixed(2)}</span>
            </h6>
            <h6 className="mt-4">
             Staked Amount: <span>{/*stakingBalance2.toFixed(2)*/}</span>
            </h6>
            <hr />
            <div className="apr d-flex justify-content-between">
              <span>Status</span>
              <span>{status == 0 ? "Collecting" : status == 1 ? 'Staking' : 'Completed'}</span>
            </div>
            
            <div className="apr d-flex justify-content-between">
              <span>Withdrawal Lockup</span>
              <span>14 Days</span>
            </div>
            <div className="apr d-flex justify-content-between">
              <span>APY</span>
              <span>2000%</span>
            </div>
            <div className="d-flex inputHarvest">
              <input
                className="p-2 bg-transparent w-100 border-0 text-light"
                value={stakeAmount2}
                onChange={(e) => setStakeAmount2(e.target.value)}
                placeholder="Stake Amount"
              />
              <button
                className="btn btn-outline-dark text-light"
                onClick={() => MaxStaking2()}
              >
                MAX
              </button>
            </div>
            <button
              className="btnFill py-3 mt-4"
              onClick={() => Approve_Single_staking_Staking_token2()}
            >
              {checkApprove2 ? "Stake" : "Approve Contract"}
            </button>
            {stakingBalance2 > 0 && startstaking2 != 0 && startstaking2 < Date.now() ? (
              <button
                className="btnFill py-3 mt-4"
                onClick={() => Unstaking_Retsuko2()}
              >
                Unstake
              </button>
            ) : (
              ""
            )}
          

            

            <div className="d-flex justify-content-center mt-3">
              <h5 className="text-light fs-5 my-auto text-center">
                {/*harvestamount2.toFixed(2)*/}
              </h5>
              <button
                onClick={() => Harverting2()}s
                className="btnFill py-3"
                style={{ width: "fit-content" }}
              >
                Harvest
              </button> 
            </div>
          </div>
        </div>

        
        
      </div>
    </div>
  );
}
