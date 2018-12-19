<template>
  <div class = "sign-up">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="exampleInputGroup1"
                    label="Email address:"
                    label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
            <b-form-group id="exampleInputGroup2"
                    label="Password:"
                    label-for="exampleInput2"
                    description="Choose a secure password.">
        <b-form-input id="exampleInput2"
                      type="password"
                      v-model="form.password"
                      required
                      placeholder="Enter a password">
        </b-form-input>
      </b-form-group>
      <b-button class ="submit" type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        password: '',
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>

<style scoped lang="scss">
  .sign-up{
    background-color:rgb(22, 22, 22);
    text-decoration: none;
    padding-bottom: 30px;
    padding-top: 50px;
    width: 50%;
    margin: auto;
  }
  #exampleInputGroup1, #exampleInputGroup2{
    margin: auto;
    color:white;
  }
  .submit{
    
  }
</style>

<!-- b-form-1.vue -->