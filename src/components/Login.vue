<template>
  <div>
    <form>
      <div class="form-group">
        <label>Email address</label>
        <input
          type="email"
          class="form-control col-md-6"
          placeholder="Enter email"
          v-model="email"
        />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          class="form-control col-md-6"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-primary" @click="onSubmit">
        Login
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { userLogin } from "../services/User.services";

@Options({
  props: {
    setLogin: Function,
    setAlert: Function,
  },
  emits: ["set-alert", "set-login"],
})
export default class Login extends Vue {
  setLogin!: Function;
  setAlert!: Function;

  email = "";
  password = "";

  onSubmit(event: any) {
    event.preventDefault();
    const user = userLogin({ email: this.email, password: this.password });

    if (!user) {
      return this.$emit("set-alert", {
        status: true,
        alertMessage: "Email or Password is incorrect!",
      });
    }

    this.$emit("set-login", { status: true, user });
  }
}
</script>

<style scoped lang="scss"></style>
