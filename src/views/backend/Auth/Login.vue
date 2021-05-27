<template>
  <section class="login-content">
    <div class="container h-100">
      <div class="row align-items-center justify-content-center h-100">
        <div class="col-md-5">
          <div class="card">
            <div class="card-body">
              <div class="auth-logo">
                <img src="@/assets/images/logo.png" class="img-fluid rounded-normal" alt="logo">
              </div>
              <h2 class="mb-2 text-center">Login</h2>
              <form @submit.prevent="onSubmit()">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label>Username</label>
                      <input class="form-control" type="text" value="superadmin" name="username" v-model="form.username" placeholder="asep">
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label>Password</label>
                      <input class="form-control" type="password" name="password" value="superadmin" v-model="form.password" placeholder="********">
                    </div>
                  </div>
                  <!-- <div class="col-lg-6">
                    <div class="custom-control custom-checkbox mb-3">
                      <input type="checkbox" class="custom-control-input" id="customCheck1">
                      <label class="custom-control-label" for="customCheck1">Remember Me</label>
                    </div>
                  </div> -->
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <button type="submit" class="btn btn-primary">Sign In</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name:'Login',
  components: {},
  data() {
    return {
      form: {
        username: "superadmin",
        password: "superadmin",
      },
      showError: false
    };
  },
  methods: {
    ...mapActions(["handleLogin"]),
     async onSubmit() {
      const User = new FormData();
      User.append("username", this.form.username);
      User.append("password", this.form.password);
      try {
          await this.handleLogin(User);
          this.$router.push("/todo");
           
          this.showError = false
      } catch (error) {
        this.showError = true
      }
    },
  },
}
</script>