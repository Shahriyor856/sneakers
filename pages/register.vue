<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="w-96 p-6 border rounded-xl shadow">
      <h1 class="text-2xl font-bold mb-6 text-center">Register</h1>

      <form @submit.prevent="registerUser" class="flex flex-col gap-4">
        <input
          v-model="username"
          type="text"
          placeholder="Name"
          class="border p-2 rounded"
          required
        />

        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="border p-2 rounded"
          required
        />

        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="border p-2 rounded"
          required
        />

        <p v-if="errorMessage" class="text-red-500 text-sm">
          {{ errorMessage }}
        </p>

        <button type="submit" class="bg-green-500 text-white p-2 rounded">
          Register
        </button>
        <p class="mt-4 text-center">
          Already have an account?
          <NuxtLink to="/login" class="text-blue-500"
            >Go to login page</NuxtLink
          >
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

const router = useRouter();
const errorMessage = ref("");
const username = ref("");
const password = ref("");
const email = ref("");

const registerUser = async () => {
  try {
    const res = await axios.post(
      "https://muhammadsodiq.das-uty.uz/api/v1/auth/register",
      {
        username: username.value,
        password: password.value,
        email: email.value,
      },
    );

    console.log("User registered", res.data);

    // save the token if backend returns one
    localStorage.setItem("token", res.data.accessToken);

    // going to home page
    router.push(`/verify-email?email=${email.value}`);
  } catch (error) {
    console.error(
      "Register error is here look!!!",
      error.response?.data || error.message,
    );

    errorMessage.value = error.response?.data?.message || "Registration failed";
  }
};
</script>
