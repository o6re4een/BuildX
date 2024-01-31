<script setup>
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/vue";
import { mainnet, arbitrum, arbitrumSepolia } from "viem/chains";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = useRuntimeConfig().public.wallet_cloud;

// 2. Create wagmiConfig
const metadata = {
  name: "BUILDX NFT Minting",
  description: "BUILDX NFT Minting",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [arbitrumSepolia];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  themeVariables: {
    "--w3m-accent": "#6F4AFF",
  },
});
</script>

<template>
  <div class="w-screen h-screen font-gilroy overflow-x-hidden">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!-- <NuxtWelcome /> -->
  </div>
</template>
