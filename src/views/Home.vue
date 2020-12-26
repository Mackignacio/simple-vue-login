<template>
  <div>
    <h1>HOME</h1>
    <h3>Welcome {{ user.name }}!</h3>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

export interface UserLoginData {
  email: string;
  password: string;
}

export interface UserData extends UserLoginData {
  name: string;
}

@Options({
  props: {
    user: Object,
  },
})
export default class Home extends Vue {
  user!: UserData;
}
</script>
