import { ENV } from './Address'

import {farming} from './Contracts/SINGLE_STAKING2'

import {Staking} from './Contracts/Staking'
import {Retsuko} from './../Web3/Contracts/Retsuko'
import { getContract, getUserAddress, towie } from './Web3_Funtions'



export const Approv_Retsuko_Staking_Contract = async () => {
  try {
    const contract = await getContract(Retsuko, ENV.REWARD)
    const data = await contract.methods
      .approve(
        ENV.SINGLE_STAKING,
        115792089237316195423570985008687907853269984665640564039457584007913129639935n,
      )
      .send({ from: window.address })
    return data
  } catch (error) {
    console.log(error)
  }
}

export const stop_single_staking = async () => {
  try {
    const contract = await getContract(Staking, ENV.SINGLE_STAKING)
    const data = await contract.methods
      .stopStaking().send({from: window.address})
    
    return Number(data)
  } catch (error) {
    console.log(error)
  }
}


export const single_staking_reward_add = async (amount) => {
  try {
    const a = await towie(amount)
    const contract = await getContract(Staking, ENV.SINGLE_STAKING)
    const data = await contract.methods
      .addRewards(a).send({from: window.address})
    
    return Number(data)
  } catch (error) {
    console.log(error)
  }
}

export const single_staking_period = async () => {
  try {
    const contract = await getContract(Staking, ENV.SINGLE_STAKING)
    const data = await contract.methods.vault().call();
    return data
  } catch (error) {
    console.log(error)
  }
}

export const user_information = async () => {
  try {
    const contract = await getContract(Staking, ENV.SINGLE_STAKING)
    const data = await contract.methods.userInfo(await getUserAddress()).call();
    return data
  } catch (error) {
    console.log(error)
  }
}

export const single_staking_Emergency_Exit = async () => {
  try {
    const contract = await getContract(Staking, ENV.SINGLE_STAKING)
    const data = await contract.methods.exitWhileStaking().send({from: window.address})
    return Number(data)
  } catch (error) {
    console.log(error)
  }
}

export const single_staking_set_fee_address = async (address ) => {
  try {
    const contract = await getContract(Staking, ENV.SINGLE_STAKING)
    const data = await contract.methods
      .setFeeAddress(address).send({from: window.address})
  
    return Number(data)
  } catch (error) {
    console.log(error)
  }
}



export const single_staking_set_withdraw_fee = async (amount ) => {
  try {
    const a = await towie(amount)
    const contract = await getContract(Staking, ENV.SINGLE_STAKING)
    const data = await contract.methods
      .setWithdrawFee(a).send({from: window.address})

    return Number(data)
  } catch (error) {
    console.log(error)
  }
}

export const start_single_staking = async () => {
  try {
    const contract = await getContract(Staking, ENV.SINGLE_STAKING)
    const data = await contract.methods
      .startStaking().send({from: window.address})
      
    return Number(data)
  } catch (error) {
    console.log(error)
  }
}

export const Allowance_of_single_staking_contract = async () => {
  try {
    const contract = await getContract(Retsuko, ENV.REWARD)
    const data = await contract.methods
      .allowance(window.address, ENV.SINGLE_STAKING)
      .call()
    return Number(data)
  } catch (error) {
    console.log(error)
  }
}


export const Retsuko_Token_balance = async () => {
  try {
    const contract = await getContract(Retsuko, ENV.REWARD)
    const data = await contract.methods.balanceOf(window.address).call()
    return Number(data)
  } catch (error) {
    console.log(error)
  }
}

  export const Harvest_Retsuko_Token_Staking = async () => {
    try {
        const contract = await getContract(Staking, ENV.SINGLE_STAKING)
        const data = await contract.methods
          .harvest()
          .send({from: window.address})
        return data
      } catch (error) {
        console.log(error)
      }
  }

  export const Staking_Retsuko_Token = async (amount,bool) => {
    try {
        const a = await towie(amount)
        console.log(a,bool)
        const contract = await getContract(Staking, ENV.SINGLE_STAKING)
        const data = await contract.methods
          .deposit(a)
          .send({from: window.address})
        return data
      } catch (error) {
        console.log(error)
      }
  }
  export const Unstaking_Retsuko_Token = async (amount) => {
    try {
      const a = await towie(amount)
      console.log(a)
        const contract = await getContract(Staking, ENV.SINGLE_STAKING)
        const data = await contract.methods
          .withdraw()
          .send({from: window.address})
        return data
      } catch (error) {
        console.log(error)
      }
  }

  

  




  export const Approv_Retsuko_Staking_Contract2 = async () => {
    try {
      const contract = await getContract(Retsuko, ENV.REWARD)
      const data = await contract.methods
        .approve(
          ENV.SINGLE_STAKING2,
          115792089237316195423570985008687907853269984665640564039457584007913129639935n,
        )
        .send({ from: window.address })
      return data
    } catch (error) {
      console.log(error)
    }
  }
  
  export const stop_single_staking2 = async () => {
    try {
      const contract = await getContract(Staking, ENV.SINGLE_STAKING2)
      const data = await contract.methods
        .stopStaking().send({from: window.address})
      
      return Number(data)
    } catch (error) {
      console.log(error)
    }
  }
  
  
  export const single_staking_reward_add2 = async (amount2) => {
    try {
      const a2 = await towie(amount2)
      const contract = await getContract(Staking, ENV.SINGLE_STAKING2)
      const data = await contract.methods
        .addRewards(a2).send({from: window.address})
      
      return Number(data)
    } catch (error) {
      console.log(error)
    }
  }
  
  export const single_staking_period2 = async () => {
    try {
      const contract = await getContract(Staking, ENV.SINGLE_STAKING2)
      const data = await contract.methods.vault().call();
      return data
    } catch (error) {
      console.log(error)
    }
  }
  
  export const single_staking_Emergency_Exit2 = async () => {
    try {
      const contract = await getContract(Staking, ENV.SINGLE_STAKING2)
      const data = await contract.methods.exitWhileStaking().send({from: window.address})
      return Number(data)
    } catch (error) {
      console.log(error)
    }
  }
  
  export const single_staking_set_fee_address2 = async (address ) => {
    try {
      const contract = await getContract(Staking, ENV.SINGLE_STAKING2)
      const data = await contract.methods
        .setFeeAddress(address).send({from: window.address})
    
      return Number(data)
    } catch (error) {
      console.log(error)
    }
  }
  
  
  
  export const single_staking_set_withdraw_fee2 = async (amount2 ) => {
    try {
      const a2 = await towie(amount2)
      const contract = await getContract(Staking, ENV.SINGLE_STAKING2)
      const data = await contract.methods
        .setWithdrawFee(a2).send({from: window.address})
  
      return Number(data)
    } catch (error) {
      console.log(error)
    }
  }
  
  export const start_single_staking2 = async () => {
    try {
      const contract = await getContract(Staking, ENV.SINGLE_STAKING2)
      const data = await contract.methods
        .startStaking().send({from: window.address})
        
      return Number(data)
    } catch (error) {
      console.log(error)
    }
  }
  
  export const Allowance_of_single_staking_contract2 = async () => {
    try {
      const contract = await getContract(Retsuko, ENV.REWARD)
      const data = await contract.methods
        .allowance(window.address, ENV.SINGLE_STAKING2)
        .call()
      return Number(data)
    } catch (error) {
      console.log(error)
    }
  }
  
  
  export const Retsuko_Token_balance2 = async () => {
    try {
      const contract = await getContract(Retsuko, ENV.REWARD)
      const data = await contract.methods.balanceOf(window.address).call()
      return Number(data)
    } catch (error) {
      console.log(error)
    }
  }
  
    export const Harvest_Retsuko_Token_Staking2 = async () => {
      try {
          const contract = await getContract(Staking, ENV.SINGLE_STAKING2)
          const data = await contract.methods
            .harvest()
            .send({from: window.address})
          return data
        } catch (error) {
          console.log(error)
        }
    }
  
    export const Staking_Retsuko_Token2 = async (amount2,bool) => {
      try {
          const a2 = await towie(amount2)
          console.log(a2,bool)
          const contract = await getContract(Staking, ENV.SINGLE_STAKING2)
          const data = await contract.methods
            .deposit(a2)
            .send({from: window.address})
          return data
        } catch (error) {
          console.log(error)
        }
    }
    export const Unstaking_Retsuko_Token2 = async (amount2) => {
      try {
        const a2 = await towie(amount2)
        console.log(a2)
          const contract = await getContract(Staking, ENV.SINGLE_STAKING2)
          const data = await contract.methods
            .withdraw()
            .send({from: window.address})
          return data
        } catch (error) {
          console.log(error)
        }
    }
  
    


 