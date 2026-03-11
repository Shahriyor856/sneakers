<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="w-96 p-6 border rounded-xl shadow">
      <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>

      <form @submit.prevent="loginUser" class="flex flex-col gap-4">
        <input
          v-model="username"
          type="text"
          placeholder="Username"
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

        <p v-if="errorMessage" class="text-red-500 text-sm">
          {{ errorMessage }}
        </p>

        <button type="submit" class="bg-blue-500 text-white p-2 rounded">
          Login
        </button>

        <p class="mt-4 text-center">
          Don't you have an account?
          <NuxtLink to="/register" class="text-blue-500">Register</NuxtLink>
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

const loginUser = async () => {
  try {
    const res = await axios.post(
      "https://muhammadsodiq.das-uty.uz/api/v1/auth/login",
      {
        username: username.value,
        password: password.value,
      },
    );

    console.log("User loged in, so it is working!!!", res.data);

    //   save token
    const token =
      res.data?.accessToken || res.data?.token || res.data?.access_token;

    if (token) {
      localStorage.setItem("token", token);
    }
    // going to home page

    router.push("/");
  } catch (error) {
    const message = error.response?.data?.message;

    if (message === "Foydalanuvchi tasdiqlanmagan") {
      router.push("/verify-email");
    } else {
      errorMessage.value = Array.isArray(message)
        ? message[0]
        : message || "Login failed";
    }
  }
};
</script>
