import { ethers } from "ethers";

import { mintAbi } from "~/assets/abi/index";
import cfg from "~/assets/data/cfg.json";

const provider = new ethers.JsonRpcProvider("https://rpc.ankr.com/arbitrum");

// Инициализация провайдера и контракта
const contractAddress = cfg.contractAddress;
const contractABI = mintAbi; // ABI вашего контракта

const contract = new ethers.Contract(contractAddress, contractABI, provider);

export default defineEventHandler(async (event) => {
  try {
    // Вызов функции контракта
    const totalSupply = await contract.totalSupply();
    const mintPrice = await contract.mintPrice();
    // Ответ сервера
    return {
      totalSupply: totalSupply.toString(),
      mintPrice: mintPrice.toString(),
    };
  } catch (error) {
    // Обработка ошибок
    return {
      error: error.message,
    };
  }
});
