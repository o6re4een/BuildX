<template>
  <section class="container mx-auto mint-component text-white">
    <div class="p-6 flex flex-col items-center">
      <div
        class="max-w-[618px] gradient-border bg-opacity-50 p-6 flex flex-col gap-7 items-center justify-center mb-6 w-full"
      >
        <ClientOnly>
          <!-- <h3 class="text-3xl font-bold mb-2">{{ totalSupply }}/50</h3> -->
          <div class="flex flex-row justify-between items-center w-full">
            <p class="text-lg font-normal max-w-[312px]">
              Стоимость токена (минимальная сумма для инвестирования)
            </p>
            <p class="text-3xl price-text">$40</p>
          </div>
          <div class="flex flex-row justify-between items-center w-full">
            <p class="text-lg font-normal max-w-[312px]">
              Доступно токенов к покупке:
            </p>
            <p class="text-3xl price-text">4731/4731</p>
          </div>

          <ClientOnly>
            <w3m-button />
          </ClientOnly>

          <button
            v-if="isConnectedRef === true"
            class="connect-button mint-button text-white font-bold py-4 px-5 rounded-full mb-2 mt-6 w-1/3"
            @click="handleMint"
          >
            Купить токен
          </button>
          <HeroModal
            :isOpen="isModalOpened"
            :error="error"
            @modal-close="closeModal"
          ></HeroModal>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<style>
.gradient-border {
  border-radius: 24px;

  background: rgba(10, 10, 10, 1);
}

.price-text {
  font-family: Gilroy;
  font-size: 40px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 0em;
  text-align: right;
  color: rgba(111, 74, 255, 1);
}

.mint-button {
  background-color: rgba(111, 74, 255, 1);
}
</style>

<script setup>
import cfg from "~/assets/data/cfg.json";
// import { readContract, writeContract } from "@wagmi/core";

// import { mintAbi } from "~/assets/abi/index";
// import { formatEther } from "viem";
// import { getAccount } from "@wagmi/core";
// import {
//   useWeb3Modal,
//   useWeb3ModalEvents,
//   useWeb3ModalState,
// } from "@web3modal/wagmi/vue";

// const { isConnected, address, status } = getAccount();
// const mintAddress = cfg.contractAddress;

// const isModalOpened = ref(false);

// const openModal = () => {
//   isModalOpened.value = true;
// };
// const closeModal = () => {
//   isModalOpened.value = false;
// };

// const submitHandler = () => {
//   isModalOpened.value = false;
// };
// const error = ref("");
// const modal = useWeb3Modal();
// const state = useWeb3ModalState();
// const events = useWeb3ModalEvents();

const mintPrice = ref(0n);
const totalSupply = ref(0n);
const isConnectedRef = ref(false);

// if (isConnectedRef) {
//   mintPrice.value = await readContract({
//     address: mintAddress,

//     abi: mintAbi,
//     functionName: "mintPrice",
//   });
//   totalSupply.value = await readContract({
//     address: mintAddress,
//     abi: mintAbi,
//     functionName: "totalSupply",
//   });
// }
// const handleUpdateTotatlSupply = async () => {
//   totalSupply.value = await readContract({
//     address: mintAddress,
//     abi: mintAbi,
//     functionName: "totalSupply",
//   });
// };
// // setInterval(handleUpdateTotatlSupply, 1000);
// const handleMint = async () => {
//   try {
//     await writeContract({
//       address: mintAddress,
//       abi: mintAbi,

//       functionName: "mint",
//       args: [1n],
//       value: mintPrice.value,
//       gas: BigInt(cfg.gas),
//     });
//   } catch (error) {
//     console.log(error);
//     error.value = error?.name;
//     openModal();
//   }
// };

// if (!isConnectedRef) {
//   const { data } = await useFetch("/api/contract");

//   totalSupply.value = data.value?.totalSupply.toString();
//   mintPrice.value = BigInt(data.value?.mintPrice).toString();
// }

// watchEffect(() => {
//   // console.log(events.data);
//   if (events.data.event == "DISCONNECT_SUCCESS") {
//     isConnectedRef.value = false;
//   }
//   if (events.data.event == "CONNECT_SUCCESS") {
//     isConnectedRef.value = true;
//   }

//   // console.log(isConnectedRef.value);
// });

// watchEffect(() => {
//   isConnectedRef.value = isConnected;
// });

// import { useWeb3ModalAccount } from "@web3modal/ethers/vue";

// const { address, chainId, isConnected } = useWeb3ModalAccount();
</script>

<!-- <script setup lang="ts">
import { store } from "~/store/index";
const connect = async () => {
  await store.connect();
};
</script> -->
