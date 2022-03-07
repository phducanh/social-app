import { getWeb3 } from "@utils/getWeb3";
import GroupFactoryABI from "../constant/ABI/GroupFactory.json";

export const useBlockchainFunc = async () => {

    const web3 = await getWeb3();

    const fetchSC = async () => {
        const account = await web3.eth.getAccounts();
        const networkId = await web3.eth.net.getId();

        // const deployedNet = GroupFactory.networks[networkId];
        const GroupContract = new web3.eth.Contract(
            GroupFactoryABI.abi
            // deployedNet && deployedNet.address
        );

        // await SSContract.methods.set(5).send({from: account[0]})
        // const newVal = await SSContract.methods.getDeployedGroups().call();

        console.log("NewVal", GroupContract);

        return GroupContract;
    }

    const GroupContract = fetchSC();

    const createGroup = async () => {
        const res = await GroupContract.methods.createGroup().call()
        return res;
    }
    const getDeployedGroups = async (callback = Function()) => {
        // const res =  await GroupContract.methods.getDeployedGroups().call()
        // return res;
        return "check 1"
    }

    return {
        createGroup,
        fetchSC,
        getDeployedGroups
    };

}
