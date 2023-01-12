import Web3 from "web3";
import AuthDocContract from '../abis/AuthDoc.json'

let selectedAccount;
let authDoc_contract;
let isInitialized = false;

/**
 * It initializes the web3 provider, gets the selected account, and returns the selected account.
 * @returns The selectedAccount is being returned.
 */
export const init = async () => {
    let provider = window.ethereum;

    if(typeof provider !== 'undefined') {
        provider.request({ method: 'eth_requestAccounts' })
        .then((accounts) => {
            selectedAccount = accounts[0];
            // console.log(selectedAccount);
        })
        .catch((err) => {
            console.log(err);
        })

      window.ethereum.on('accountsChanged', function(accounts) {
        selectedAccount = accounts[0];
        // console.log(selectedAccount)
      })
    }

    const web3 = new Web3(provider);
    const networkId = await web3.eth.net.getId();
    authDoc_contract = new web3.eth.Contract(AuthDocContract.abi, AuthDocContract.networks[networkId].address);

    isInitialized = true;
    return selectedAccount;
}

/**
 * It takes a string, hashes it, and returns the hash.
 * @param idDip - the id of the dip, which is a number
 * @returns A hash of the idDip.
 */
export const hashQrCode = (idDip) => {
    let provider = window.ethereum;
    const web3 = new Web3(provider);

    return web3.utils.soliditySha3(idDip)
}

export const addStudent = async (idDip, cin, diploma, studentName, cne, image) => {
    if(!isInitialized)
        await init();

    localStorage.setItem("authDocUser", selectedAccount)
    
    return authDoc_contract.methods
        .add(selectedAccount, idDip, cin, diploma, studentName, cne, image)
        .send({ from: selectedAccount });
}

/**
 * "AddStudent" is a function that takes in a student object and adds it to the blockchain. 
 * 
 * The function is asynchronous, so it returns a promise. 
 * 
 * The function first checks if the blockchain is initialized. If it isn't, it initializes it. 
 * 
 * Then, it sets the selected account to the local storage. 
 * 
 * Finally, it calls the "addStudent" function in the smart contract and sends the transaction from the
 * selected account.
 * @param students - {
 * @returns The transaction hash.
 */
export const AddStudent = async (students) => {
    if(!isInitialized)
        await init();

    localStorage.setItem("authDocUser", selectedAccount)

    await authDoc_contract.methods
        .addStudent(students)
        .send({ 
            from: selectedAccount, 
            gas: 3432190, 
            gasPrice: null
        });
}

/**
 * "verifyDocument" is a function that takes an argument "id_dip" and returns a promise that calls the
 * "verifyDoc" function of the "authDoc_contract" contract.
 * @param id_dip - the id of the document to be verified
 * @returns a promise.
 */
export const verifyDocument = async (id_dip) => {
    if(!isInitialized)
        await init();

    localStorage.setItem("authDocUser", selectedAccount)

    return authDoc_contract.methods
        .verifyDoc(id_dip)
        .call();
}

/**
 * "verifyQr" is a function that takes a hash as a parameter and returns a boolean value.
 * @param hash - the hash of the QR code
 * @returns The return value is a boolean.
 */
export const verifyQr = async (hash) => {
    if(!isInitialized)
        await init();

    localStorage.setItem("authDocUser", selectedAccount)

    return authDoc_contract.methods
        .verifyQrCode(hash)
        .call();
}


export const downloadDiploma = async (id_dip) => {
    if(!isInitialized)
        await init();

    localStorage.setItem("authDocUser", selectedAccount)

    return authDoc_contract.methods
        .downloadDip(id_dip)
        .call();
}

export const downloadDiplomaQrCode = async (hash) => {
    if(!isInitialized)
        await init();

    localStorage.setItem("authDocUser", selectedAccount)

    return authDoc_contract.methods
        .downloadDipQrCode(hash)
        .call();
}
