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
                        <h2 class="mb-2 text-center">Sign In</h2>
                        <p class="text-center">To Keep connected with us please login with your personal info.</p>
                        <form @submit.prevent="onSubmit()">
                           <div class="row">
                              <div class="col-lg-12">
                                 <div class="form-group">
                                    <label>Email</label>
                                    <input class="form-control" type="email" placeholder="admin@example.com">
                                 </div>
                              </div>
                              <div class="col-lg-12">
                                 <div class="form-group">
                                    <label>Password</label>
                                    <input class="form-control" type="password" placeholder="********">
                                 </div>
                              </div>
                              <div class="col-lg-6">
                                 <div class="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" class="custom-control-input" id="customCheck1">
                                    <label class="custom-control-label" for="customCheck1">Remember Me</label>
                                 </div>
                              </div>
                              <div class="col-lg-6">
                                 <router-link :to="{name: 'auth.recover-password'}" class="text-primary float-right">Forgot Password?</router-link>
                              </div>
                           </div>
                           <div class="d-flex justify-content-between align-items-center">
                              <span>Create an Account <router-link :to="{name: 'auth.register'}" class="text-primary">Sign Up</router-link></span>
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
export default {
    name:'SignIn',
    methods: {
    onSubmit () {
      this.$router.push({name: 'layout.dashboard1'})
    }
}
}
</script>