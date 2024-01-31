<template>
  <section class="container mx-auto mint-component text-white">
    <div class="p-6 flex flex-col items-center">
      <HeroTimer class="mb-6" />
      <div
        class="w-60 gradient-border bg-opacity-50 p-6 flex flex-col items-center justify-center max-w-lg mb-6 sm:w-80"
      >
        <ClientOnly>
          <h3 class="text-3xl font-bold mb-2">{{ totalSupply }}/50</h3>

          <p class="text-3xl mb-4">Price: {{ formatEther(mintPrice) }} ETH</p>

          <ClientOnly>
            <w3m-button />
          </ClientOnly>

          <button
            v-if="isConnectedRef === true"
            class="connect-button bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full mb-2 mt-6"
            @click="handleMint"
          >
            Mint
          </button>
          <HeroModal
            :isOpen="isModalOpened"
            :error="error"
            @modal-close="closeModal"
          ></HeroModal>

          <p class="text-xs pt-2">Gas fee excluded</p>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<style>
.gradient-border {
  border-radius: 24px;
  border: 1px solid rgba(111, 74, 255, 0.4);
  background: rgba(255, 255, 255, 0.08);
}
</style>

<script setup>
import cfg from "~/assets/data/cfg.json";
import { readContract, writeContract } from "@wagmi/core";

import { mintAbi } from "~/assets/abi/index";
import { formatEther } from "viem";
import { getAccount } from "@wagmi/core";
import {
  useWeb3Modal,
  useWeb3ModalEvents,
  useWeb3ModalState,
} from "@web3modal/wagmi/vue";

const { isConnected, address, status } = getAccount();
const mintAddress = cfg.contractAddress;

const isModalOpened = ref(false);

const openModal = () => {
  isModalOpened.value = true;
};
const closeModal = () => {
  isModalOpened.value = false;
};

const submitHandler = () => {
  isModalOpened.value = false;
};
const error = ref("");
const modal = useWeb3Modal();
const state = useWeb3ModalState();
const events = useWeb3ModalEvents();

const mintPrice = ref(0n);
const totalSupply = ref(0n);
const isConnectedRef = ref(isConnected);

if (isConnectedRef) {
  mintPrice.value = await readContract({
    address: mintAddress,

    abi: mintAbi,
    functionName: "mintPrice",
  });
  totalSupply.value = await readContract({
    address: mintAddress,
    abi: mintAbi,
    functionName: "totalSupply",
  });
}
const handleUpdateTotatlSupply = async () => {
  totalSupply.value = await readContract({
    address: mintAddress,
    abi: mintAbi,
    functionName: "totalSupply",
  });
};
setInterval(handleUpdateTotatlSupply, 1000);
const handleMint = async () => {
  try {
    await writeContract({
      address: mintAddress,
      abi: mintAbi,

      functionName: "mint",
      args: [1n],
      value: mintPrice.value,
      gas: BigInt(cfg.gas),
    });
  } catch (error) {
    console.log(error);
    error.value = error?.name;
    openModal();
  }
};

if (!isConnectedRef) {
  const { data } = await useFetch("/api/contract");

  totalSupply.value = data.value?.totalSupply.toString();
  mintPrice.value = BigInt(data.value?.mintPrice).toString();
}

watchEffect(() => {
  // console.log(events.data);
  if (events.data.event == "DISCONNECT_SUCCESS") {
    isConnectedRef.value = false;
  }
  if (events.data.event == "CONNECT_SUCCESS") {
    isConnectedRef.value = true;
  }

  // console.log(isConnectedRef.value);
});

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
