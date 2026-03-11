<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="w-96 p-6 border rounded-xl shadow">
      <h1 class="text-2xl font-bold mb-6 text-center">Verify Email</h1>

      <form @submit.prevent="verifyEmail" class="flex flex-col gap-4">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="border p-2 rounded"
          required
        />

        <input
          v-model="otpCode"
          type="text"
          placeholder="Enter OTP code"
          class="border p-2 rounded"
          required
        />

        <p v-if="errorMessage" class="text-red-500 text-sm">
          {{ errorMessage }}
        </p>

        <p v-if="successMessage" class="text-green-600 text-sm">
          {{ successMessage }}
        </p>

        <button type="submit" class="bg-blue-500 text-white p-2 rounded">
          Verify
        </button>

        <button
          type="button"
          @click="resendOtp"
          class="bg-gray-500 text-white p-2 rounded"
        >
          Resend Otp
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
// import { tr } from "element-plus/es/locales.mjs";
// import { ref } from "vue";

const router = useRouter();
const route = useRoute();

const email = ref(route.query.email || "");
const otpCode = ref("");
const errorMessage = ref("");
const successMessage = ref("");

const verifyEmail = async () => {
  errorMessage.value = "";
  successMessage.value = "";

  try {
    const res = await axios.post(
      "https://muhammadsodiq.das-uty.uz/api/v1/auth/verify-email",
      {
        email: email.value,
        otpCode: otpCode.value,
      },
    );

    console.log("Verify success", res.data);

    successMessage.value = "Email verify successfully ";

    setTimeout(() => {
      router.push("/login");
    }, 1500);
  } catch (error) {
    console.log("Verify error:", error.response?.data || error.message);

    errorMessage.value = Array.isArray(error.response?.data?.message)
      ? error.response.data.message[0]
      : error.response?.data?.message || "Verification failed ";
  }
};

const resendOtp = async () => {
  errorMessage.value = "";
  successMessage.value = "";

  try {
    const res = await axios.post(
      "https://muhammadsodiq.das-uty.uz/api/v1/auth/resend-otp",
      {
        email: email.value,
      },
    );

    console.log("Resned success:", res.data);

    successMessage.value = `A new OTP code was sent to ${email.value}`;
  } catch (error) {
    console.log("Resend error:", error.response?.data || error.message);

    errorMessage.value = Array.isArray(error.response?.data?.message)
      ? error.response.data.message[0]
      : error.response?.data?.message || "Failed to resend OTP";
  }
};
</script>
