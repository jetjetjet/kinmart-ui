<template>
   <section class="login-content">
        <div class="container h-100">
        <div class="row align-items-center justify-content-center h-100">
            <div class="col-md-5">
                <div class="card">
                    <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-lg-12">
                            <div class="auth-logo">
                                <img src="@/assets/images/logo.png" class="img-fluid rounded-normal" alt="logo">
                            </div>
                            <div class="text-center">
                                <h2 class="mb-2">Hi ! Barry Tech</h2>
                                <p>Enter your password to access the admin.</p>
                            </div>
                            <form @submit.prevent="onSubmit()"> 
                                <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <label>Password</label>
                                        <input class="form-control" type="password" placeholder="********">
                                    </div>
                                </div>
                                </div>
                                <button type="submit" class="btn btn-primary btn-block">Login</button>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
</template>
<script>
export default {
    name:'LockScreen',
    methods: {
      onSubmit () {
         this.$router.push({name: 'layout.dashboard1'})
      }
  }
}
</script>