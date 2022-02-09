export const calculateActiveTime = (time) => {

    return (Date.now() - time) / 1000;
}