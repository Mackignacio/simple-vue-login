<template>
  <div class="container">
    <div v-if="showAlert" className="alert alert-danger" role="alert">
      {{ alertMessage }}
    </div>
    <Home v-if="isLogin" :user="user"></Home>
    <Login v-else @set-alert="setAlert" @set-login="setLogin"></Login>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Login from "@/components/Login.vue";
import Home, { UserData } from "@/views/Home.vue";

@Options({
  components: { Home, Login },
})
export default class App extends Vue {
  alertMessage = "";
  showAlert = false;
  isLogin = false;
  user: UserData = { email: "", password: "", name: "" };

  setAlert(event: { status: boolean; alertMessage: string }) {
    const { status, alertMessage } = event;
    this.showAlert = status;
    this.alertMessage = alertMessage;

    setTimeout(() => {
      this.showAlert = false;
      this.alertMessage = "";
    }, 2000);
  }

  setLogin(event: { status: boolean; user: UserData }) {
    const { status, user } = event;
    this.isLogin = status;
    this.user = user;
  }
}
</script>

<style lang="scss">
#app {
  padding: 0.5rem;
}
</style>
