import { store } from "@/reducer/store";

export const getUserInfo = () => {
    const { auth } = store.getState();
    return auth?.data;
}

export const calculateActiveTime = (time) => {

    return (Date.now() - time) / 1000;
}

export const convertLongString = (
    string,
    firstLength = 500,
    lastLength = 0
) => {
    if (!string) return "";
    if (string.length < firstLength) return string;
    if (firstLength + lastLength >= string.length) return string;
    return `${string.substr(0, firstLength)}...${string.substr(
        string.length - lastLength,
        string.length
    )}`;
};

export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}