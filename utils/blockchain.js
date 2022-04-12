// import { getWeb3 } from "@utils/getWeb3";
import GroupFactoryABI from "../constant/ABI/GroupFactory.json";
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
                const localProvider = new Web3.providers.HttpProvider(process.env.NEXT_PUBLIC_PROVIDER)

                const web3 = new Web3(localProvider);
                console.log("local web3 connected");
                resolve(web3);
            }
        })
    })
}
const web3Init = async () => {
    const web3 = await getWeb3();
    return web3
}




export const useBlockchainFunc = () => {

    const fetchSC = async () => {
        const web3 = await web3Init();
        const account = await web3.eth.getAccounts();
        const networkId = await web3.eth.net.getId();

        // const deployedNet = GroupFactory.networks[networkId];
        const GroupContract = new web3.eth.Contract(
            GroupFactoryABI.abi,
            "0xA1424C8467549b3f232e4d0Fd8dc4a5E6243d587"
            // deployedNet && deployedNet.address
        );

        // await SSContract.methods.set(5).send({from: account[0]})
        // const newVal = await SSContract.methods.getDeployedGroups().call();

        return GroupContract;
    }



    const createGroup = async () => {
        const res = await GroupContract.methods.createGroup().call()
        return res;
    }
    const getDeployedGroups = async (callback = Function()) => {
        const GroupContract = await fetchSC();
        console.log(GroupContract.methods, "method")
        // const res = await GroupContract.methods?.getDeployedGroups().call()
        return "check nay nay";
        // return "check 1"
    }

    return {
        createGroup,
        fetchSC,
        getDeployedGroups
    };

}
