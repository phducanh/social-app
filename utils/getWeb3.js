import Web3 from "web3";

export const getWeb3 = () => {
    return new Promise((resolve, reject) => {
        window.addEventListener("load", async () => {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                try {
                    console.log("modern Metamask")
                    // Request account access if needed
                    await window.ethereum.enable();
                    resolve(web3)
                } catch (e) { }

            } else if (window.web3) {
                const web3 = window.web3;
                console.log("Legacy Metamask")
                resolve(web3)
            } else {
                const localProvider = new Web3.providers.HttpProvider('http://127.0.0.1:9545')

                const web3 = new Web3(localProvider);
                console.log("local web3 connected");
                resolve(web3);
            }
        })
    })
}