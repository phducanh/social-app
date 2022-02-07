// const Web3 = require('web3');
// const Coin = require('../constant/ABI/Kelvin.json')

// const init = async ()=>{
//   const web3 = new Web3('HTTP://127.0.0.1:7545')
//   //init contract
//   const contract = await new web3.eth.Contract(Coin.abi, `0x412f4A7A9A7aB1fFA17D9Bb94460dfdb098fc477`)
//   //khi cac bien trong sc duoc khai bao dang public => abi tu tao cac function có tên trùng tên biến và return giá trị biến
//   console.log(typeof await contract.methods.name().call())
//   const name = await contract.methods.name().call();
//   const balance = await contract.methods.balanceOf('0x23AE89b902dd0a43E0420c51cC8F63A2132cAbE2').call();
//   console.log(balance)
//   console.log(web3.currentProvider)
// }

// init()

// const path = require('path');

// console.log(path.join(__dirname))
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();

  // useEffect(() => {
  //   // Always do navigations after the first render
  //   router.push("/?counter=10", undefined, { shallow: true });
  // }, []);

//   useEffect(() => {
//     // The counter changed!
//     console.log(router.query.counter, "query");
//   }, [router.query.counter]);
  return (
    <div>
      My App
      <button
        onClick={() =>
          router.push("/?counter=10", "/about?counter=10", { shallow: true })
        }
      >
        About
      </button>
    </div>
  );
}
