<template>
   <b-container fluid="">
      <b-row>
         <b-col sm="12" lg="12">
            <card>
               <template v-slot:headerTitle>
                        <h4 class="card-title"> Default Validation</h4>
                     </template>
                     <template v-slot:headerAction>
                       <a class="text-primary float-right" v-b-toggle.collapse-1 role="button">
                         <i class="ri-code-s-slash-line" />
                       </a>
                     </template>
               <template v-slot:body>
                  <b-collapse id="collapse-1" class="mb-2">
               <div class="card">
                <kbd class="bg-dark">
                  <pre class="text-white" id="default-buttons">
                    <code>
      &#x3C;form&#x3E;
      &#x3C;div class=&#x22;form-row&#x22;&#x3E;
         &#x3C;b-col md=&#x22;6&#x22; class=&#x22;mb-3&#x22;&#x3E;
            &#x3C;label for=&#x22;validationDefault01&#x22;&#x3E;First name&#x3C;/label&#x3E;
            &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; id=&#x22;validationDefault01&#x22; required&#x3E;
         &#x3C;/b-col&#x3E;
         &#x3C;b-col md=&#x22;6&#x22; class=&#x22;mb-3&#x22;&#x3E;
            &#x3C;label for=&#x22;validationDefault02&#x22;&#x3E;Last name&#x3C;/label&#x3E;
            &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; id=&#x22;validationDefault02&#x22; required&#x3E;
         &#x3C;/b-col&#x3E;
         &#x3C;b-col md=&#x22;6&#x22; class=&#x22;mb-3&#x22;&#x3E;
            &#x3C;label for=&#x22;validationDefaultUsername&#x22;&#x3E;Username&#x3C;/label&#x3E;
            &#x3C;div class=&#x22;input-group&#x22;&#x3E;
               &#x3C;div class=&#x22;input-group-prepend&#x22;&#x3E;
                  &#x3C;span class=&#x22;input-group-text&#x22; id=&#x22;inputGroupPrepend2&#x22;&#x3E;@&#x3C;/span&#x3E;
               &#x3C;/div&#x3E;
               &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; id=&#x22;validationDefaultUsername&#x22;  aria-describedby=&#x22;inputGroupPrepend2&#x22; required&#x3E;
            &#x3C;/div&#x3E;
         &#x3C;/b-col&#x3E;
         &#x3C;b-col md=&#x22;6&#x22; class=&#x22;mb-3&#x22;&#x3E;
            &#x3C;label for=&#x22;validationDefault03&#x22;&#x3E;City&#x3C;/label&#x3E;
            &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; id=&#x22;validationDefault03&#x22; required&#x3E;
         &#x3C;/b-col&#x3E;
         &#x3C;b-col md=&#x22;6&#x22; class=&#x22;mb-3&#x22;&#x3E;
            &#x3C;label for=&#x22;validationDefault04&#x22;&#x3E;State&#x3C;/label&#x3E;
            &#x3C;select class=&#x22;form-control&#x22; id=&#x22;validationDefault04&#x22; required&#x3E;
               &#x3C;option selected disabled value=&#x22;&#x22;&#x3E;Choose...&#x3C;/option&#x3E;
               &#x3C;option&#x3E;...&#x3C;/option&#x3E;
            &#x3C;/select&#x3E;
         &#x3C;/b-col&#x3E;
         &#x3C;b-col md=&#x22;6&#x22; class=&#x22;mb-3&#x22;&#x3E;
            &#x3C;label for=&#x22;validationDefault05&#x22;&#x3E;Zip&#x3C;/label&#x3E;
            &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; id=&#x22;validationDefault05&#x22; required&#x3E;
         &#x3C;/b-col&#x3E;
      &#x3C;/div&#x3E;
      &#x3C;div class=&#x22;form-group&#x22;&#x3E;
         &#x3C;div class=&#x22;form-check&#x22;&#x3E;
            &#x3C;input class=&#x22;form-check-input&#x22; type=&#x22;checkbox&#x22; value=&#x22;&#x22; id=&#x22;invalidCheck2&#x22; required&#x3E;
            &#x3C;label class=&#x22;form-check-label&#x22; for=&#x22;invalidCheck2&#x22;&#x3E;
            Agree to terms and conditions
            &#x3C;/label&#x3E;
         &#x3C;/div&#x3E;
      &#x3C;/div&#x3E;
      &#x3C;div class=&#x22;form-group&#x22;&#x3E;
         &#x3C;button class=&#x22;btn btn-primary&#x22; type=&#x22;submit&#x22;&#x3E;Submit form&#x3C;/button&#x3E;
      &#x3C;/div&#x3E;
   &#x3C;/form&#x3E;
                     </code></pre>
                     </kbd>
               </div>
               </b-collapse>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                     <form>
                        <div class="form-row">
                           <b-col md="6" class="mb-3">
                              <label for="validationDefault01">First name</label>
                              <input type="text" class="form-control" id="validationDefault01" required>
                           </b-col>
                           <b-col md="6" class="mb-3">
                              <label for="validationDefault02">Last name</label>
                              <input type="text" class="form-control" id="validationDefault02" required>
                           </b-col>
                           <b-col md="6" class="mb-3">
                              <label for="validationDefaultUsername">Username</label>
                              <div class="input-group">
                                 <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroupPrepend2">@</span>
                                 </div>
                                 <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required>
                              </div>
                           </b-col>
                           <b-col md="6" class="mb-3">
                              <label for="validationDefault03">City</label>
                              <input type="text" class="form-control" id="validationDefault03" required>
                           </b-col>
                           <b-col md="6" class="mb-3">
                              <label for="validationDefault04">State</label>
                              <select class="form-control" id="validationDefault04" required>
                                 <option selected disabled value="">Choose...</option>
                                 <option>...</option>
                              </select>
                           </b-col>
                           <b-col md="6" class="mb-3">
                              <label for="validationDefault05">Zip</label>
                              <input type="text" class="form-control" id="validationDefault05" required>
                           </b-col>
                        </div>
                        <div class="form-group">
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
                              <label class="form-check-label" for="invalidCheck2">
                              Agree to terms and conditions
                              </label>
                           </div>
                        </div>
                        <div class="form-group">
                           <button class="btn btn-primary" type="submit">Submit form</button>
                        </div>
                     </form>
               </template>
            </card>
            <card>
               <template v-slot:headerTitle>
                        <h4 class="card-title"> Supported elements</h4>
                     </template>
                      <template v-slot:headerAction>
                       <a class="text-primary float-right" v-b-toggle.collapse-2 role="button">
                         <i class="ri-code-s-slash-line" />
                       </a>
                     </template>
               <template v-slot:body>
                  <b-collapse id="collapse-2" class="mb-2">
               <div class="card">
                <kbd class="bg-dark">
                  <pre class="text-white" id="default-buttons">
                    <code>
            &#x3C;form class=&#x22;was-validated&#x22;&#x3E;
         &#x3C;div class=&#x22;mb-3&#x22;&#x3E;
            &#x3C;label for=&#x22;validationTextarea&#x22;&#x3E;Textarea&#x3C;/label&#x3E;
            &#x3C;textarea class=&#x22;form-control is-invalid&#x22; id=&#x22;validationTextarea&#x22; placeholder=&#x22;Required example textarea&#x22; required&#x3E;&#x3C;/textarea&#x3E;
            &#x3C;div class=&#x22;invalid-feedback&#x22;&#x3E;
               Please enter a message in the textarea.
            &#x3C;/div&#x3E;
         &#x3C;/div&#x3E;
         &#x3C;div class=&#x22;custom-control custom-checkbox mb-3&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input&#x22; id=&#x22;customControlValidation1&#x22; required&#x3E;
            &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customControlValidation1&#x22;&#x3E;Check this custom checkbox&#x3C;/label&#x3E;
            &#x3C;div class=&#x22;invalid-feedback&#x22;&#x3E;Example invalid feedback text&#x3C;/div&#x3E;
         &#x3C;/div&#x3E;
         &#x3C;div class=&#x22;custom-control custom-radio&#x22;&#x3E;
            &#x3C;input type=&#x22;radio&#x22; class=&#x22;custom-control-input&#x22; id=&#x22;customControlValidation2&#x22; name=&#x22;radio-stacked&#x22; required&#x3E;
            &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customControlValidation2&#x22;&#x3E;Toggle this custom radio&#x3C;/label&#x3E;
         &#x3C;/div&#x3E;
         &#x3C;div class=&#x22;custom-control custom-radio mb-3&#x22;&#x3E;
            &#x3C;input type=&#x22;radio&#x22; class=&#x22;custom-control-input&#x22; id=&#x22;customControlValidation3&#x22; name=&#x22;radio-stacked&#x22; required&#x3E;
            &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customControlValidation3&#x22;&#x3E;Or toggle this other custom radio&#x3C;/label&#x3E;
            &#x3C;div class=&#x22;invalid-feedback&#x22;&#x3E;More example invalid feedback text&#x3C;/div&#x3E;
         &#x3C;/div&#x3E;
         &#x3C;div class=&#x22;form-group&#x22;&#x3E;
            &#x3C;select class=&#x22;custom-select&#x22; required&#x3E;
               &#x3C;option value=&#x22;&#x22;&#x3E;Open this select menu&#x3C;/option&#x3E;
               &#x3C;option value=&#x22;1&#x22;&#x3E;One&#x3C;/option&#x3E;
               &#x3C;option value=&#x22;2&#x22;&#x3E;Two&#x3C;/option&#x3E;
               &#x3C;option value=&#x22;3&#x22;&#x3E;Three&#x3C;/option&#x3E;
            &#x3C;/select&#x3E;
            &#x3C;div class=&#x22;invalid-feedback&#x22;&#x3E;Example invalid custom select feedback&#x3C;/div&#x3E;
         &#x3C;/div&#x3E;
         &#x3C;div class=&#x22;custom-file&#x22;&#x3E;
            &#x3C;input type=&#x22;file&#x22; class=&#x22;custom-file-input&#x22; id=&#x22;validatedCustomFile&#x22; required&#x3E;
            &#x3C;label class=&#x22;custom-file-label&#x22; for=&#x22;validatedCustomFile&#x22;&#x3E;Choose file...&#x3C;/label&#x3E;
            &#x3C;div class=&#x22;invalid-feedback&#x22;&#x3E;Example invalid custom file feedback&#x3C;/div&#x3E;
         &#x3C;/div&#x3E;
      &#x3C;/form&#x3E;
      </code></pre>
                     </kbd>
               </div>
               </b-collapse>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                     <form class="was-validated">
                        <div class="mb-3">
                           <label for="validationTextarea">Textarea</label>
                           <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                           <div class="invalid-feedback">
                              Please enter a message in the textarea.
                           </div>
                        </div>
                        <div class="custom-control custom-checkbox mb-3">
                           <input type="checkbox" class="custom-control-input" id="customControlValidation1" required>
                           <label class="custom-control-label" for="customControlValidation1">Check this custom checkbox</label>
                           <div class="invalid-feedback">Example invalid feedback text</div>
                        </div>
                        <div class="custom-control custom-radio">
                           <input type="radio" class="custom-control-input" id="customControlValidation2" name="radio-stacked" required>
                           <label class="custom-control-label" for="customControlValidation2">Toggle this custom radio</label>
                        </div>
                        <div class="custom-control custom-radio mb-3">
                           <input type="radio" class="custom-control-input" id="customControlValidation3" name="radio-stacked" required>
                           <label class="custom-control-label" for="customControlValidation3">Or toggle this other custom radio</label>
                           <div class="invalid-feedback">More example invalid feedback text</div>
                        </div>
                        <div class="form-group">
                           <select class="custom-select" required>
                              <option value="">Open this select menu</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                           </select>
                           <div class="invalid-feedback">Example invalid custom select feedback</div>
                        </div>
                        <div class="custom-file">
                           <input type="file" class="custom-file-input" id="validatedCustomFile" required>
                           <label class="custom-file-label" for="validatedCustomFile" style="overflow: hidden;">Choose file...</label>
                           <div class="invalid-feedback">Example invalid custom file feedback</div>
                        </div>
                     </form>
               </template>
            </card>
         </b-col>
         <b-col sm="12" lg="12">
            <card>
               <template v-slot:headerTitle>
                        <h4 class="card-title">Custom Validation</h4>
               </template>
               <template v-slot:headerAction>
                       <a class="text-primary float-right" v-b-toggle.collapse-3 role="button">
                         <i class="ri-code-s-slash-line" />
                       </a>
                     </template>
               <template v-slot:body>
                  <b-collapse id="collapse-3" class="mb-2">
               <div class="card">
                <kbd class="bg-dark">
                  <pre class="text-white" id="default-buttons">
                    <code>
         &#x3C;form &#x3E;
         &#x3C;div class=&#x22;form-row&#x22;&#x3E;
            &#x3C;b-col md=&#x22;6&#x22; class=&#x22;mb-3&#x22;&#x3E;
               &#x3C;label for=&#x22;fname&#x22; class=&#x22;control-label&#x22;&#x3E;First Name&#x3C;/label&#x3E;
               &#x3C;b-form-input id=&#x22;fname&#x22; maxlength=&#x22;100&#x22; :class=&#x22;&#x60;form-control ${$v.fname.$error ? &#x27;is-invalid&#x27; : &#x27;&#x27;}&#x60;&#x22; v-model=&#x22;fname&#x22; @input=&#x22;$v.fname.$touch()&#x22; @blur=&#x22;$v.fname.$touch()&#x22;&#x3E;
               &#x3C;/b-form-input&#x3E;
               &#x3C;div class=&#x22;valid-feedback&#x22;&#x3E;
                  Looks good!
               &#x3C;/div&#x3E;
            &#x3C;/b-col&#x3E;
            &#x3C;b-col md=&#x22;6&#x22; class=&#x22;mb-3&#x22;&#x3E;
               &#x3C;label for=&#x22;lname&#x22;&#x3E;Last name&#x3C;/label&#x3E;
               &#x3C;b-form-input id=&#x22;lname&#x22; maxlength=&#x22;100&#x22; :class=&#x22;&#x60;form-control ${$v.lname.$error ? &#x27;is-invalid&#x27; : &#x27;&#x27;}&#x60;&#x22; v-model=&#x22;lname&#x22; @input=&#x22;$v.lname.$touch()&#x22; @blur=&#x22;$v.lname.$touch()&#x22; &#x3E;
               &#x3C;/b-form-input&#x3E;
               &#x3C;div class=&#x22;valid-feedback&#x22;&#x3E;
                  Looks good!
               &#x3C;/div&#x3E;
            &#x3C;/b-col&#x3E;
            &#x3C;b-col md=&#x22;6&#x22; class=&#x22;mb-3&#x22;&#x3E;
               &#x3C;label for=&#x22;uname&#x22;&#x3E;Username&#x3C;/label&#x3E;
               &#x3C;div class=&#x22;input-group&#x22;&#x3E;
                  &#x3C;div class=&#x22;input-group-prepend&#x22;&#x3E;
                     &#x3C;span class=&#x22;input-group-text&#x22; id=&#x22;inputGroupPrepend&#x22;&#x3E;@&#x3C;/span&#x3E;
                  &#x3C;/div&#x3E;
                  &#x3C;b-form-input id=&#x22;uname&#x22; maxlength=&#x22;100&#x22; :class=&#x22;&#x60;form-control ${$v.uname.$error ? &#x27;is-invalid&#x27; : &#x27;&#x27;}&#x60;&#x22; v-model=&#x22;uname&#x22; @input=&#x22;$v.uname.$touch()&#x22; @blur=&#x22;$v.uname.$touch()&#x22; &#x3E;
               &#x3C;/b-form-input&#x3E;
                  &#x3C;div class=&#x22;invalid-feedback&#x22;&#x3E;
                     Please choose a username.
                  &#x3C;/div&#x3E;
               &#x3C;/div&#x3E;
            &#x3C;/b-col&#x3E;
            &#x3C;b-col md=&#x22;6&#x22; class=&#x22;mb-3&#x22;&#x3E;
               &#x3C;label for=&#x22;city&#x22;&#x3E;City&#x3C;/label&#x3E;
               &#x3C;b-form-input id=&#x22;city&#x22; maxlength=&#x22;100&#x22; :class=&#x22;&#x60;form-control ${$v.city.$error ? &#x27;is-invalid&#x27; : &#x27;&#x27;}&#x60;&#x22; v-model=&#x22;city&#x22; @input=&#x22;$v.city.$touch()&#x22; @blur=&#x22;$v.city.$touch()&#x22; &#x3E;
               &#x3C;/b-form-input&#x3E;
               &#x3C;div class=&#x22;invalid-feedback&#x22;&#x3E;
                  Please provide a valid city.
               &#x3C;/div&#x3E;
            &#x3C;/b-col&#x3E;
            &#x3C;b-col md=&#x22;6&#x22; class=&#x22;mb-3&#x22;&#x3E;
               &#x3C;label for=&#x22;validationCustom04&#x22;&#x3E;State&#x3C;/label&#x3E;
               &#x3C;select class=&#x22;form-control&#x22; id=&#x22;validationCustom04&#x22; required&#x3E;
                  &#x3C;option selected disabled value=&#x22;&#x22;&#x3E;Choose...&#x3C;/option&#x3E;
                  &#x3C;option&#x3E;...&#x3C;/option&#x3E;
               &#x3C;/select&#x3E;
               &#x3C;div class=&#x22;invalid-feedback&#x22;&#x3E;
                  Please select a valid state.
               &#x3C;/div&#x3E;
            &#x3C;/b-col&#x3E;
            &#x3C;b-col md=&#x22;6&#x22; class=&#x22;mb-3&#x22;&#x3E;
               &#x3C;label for=&#x22;zip&#x22;&#x3E;Zip&#x3C;/label&#x3E;
               &#x3C;b-form-input id=&#x22;zip&#x22; maxlength=&#x22;100&#x22; :class=&#x22;&#x60;form-control ${$v.zip.$error ? &#x27;is-invalid&#x27; : &#x27;&#x27;}&#x60;&#x22; v-model=&#x22;zip&#x22; @input=&#x22;$v.zip.$touch()&#x22; @blur=&#x22;$v.zip.$touch()&#x22; &#x3E;
               &#x3C;/b-form-input&#x3E;
               &#x3C;div class=&#x22;invalid-feedback&#x22;&#x3E;
                  Please provide a valid zip.
               &#x3C;/div&#x3E;
            &#x3C;/b-col&#x3E;
         &#x3C;/div&#x3E;
         &#x3C;div class=&#x22;form-group&#x22;&#x3E;
            &#x3C;div class=&#x22;form-check&#x22;&#x3E;
            &#x3C;div class=&#x22;custom-control custom-checkbox mb-3&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input&#x22; id=&#x22;cbox&#x22;&#x3E;
            &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customControlValidation1&#x22;&#x3E;Agree to terms and conditions&#x3C;/label&#x3E;
            &#x3C;div class=&#x22;invalid-feedback&#x22;&#x3E;You must agree before submitting.&#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
               
            &#x3C;/div&#x3E;
         &#x3C;/div&#x3E;
         &#x3C;button @click=&#x22;submit()&#x22; class=&#x22;btn btn-primary&#x22; type=&#x22;submit&#x22;&#x3E;Submit form&#x3C;/button&#x3E;
      &#x3C;/form&#x3E;
                     </code></pre>
                     </kbd>
               </div>
               </b-collapse>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                     <form >
                        <div class="form-row">
                           <b-col md="6" class="mb-3">
                              <label for="fname" class="control-label">First Name</label>
                              <b-form-input id="fname" maxlength="100" :class="`form-control ${$v.fname.$error ? 'is-invalid' : ''}`" v-model="fname" @input="$v.fname.$touch()" @blur="$v.fname.$touch()">
                              </b-form-input>
                              <div class="valid-feedback">
                                 Looks good!
                              </div>
                           </b-col>
                           <b-col md="6" class="mb-3">
                              <label for="lname">Last name</label>
                              <b-form-input id="lname" maxlength="100" :class="`form-control ${$v.lname.$error ? 'is-invalid' : ''}`" v-model="lname" @input="$v.lname.$touch()" @blur="$v.lname.$touch()" >
                              </b-form-input>
                              <div class="valid-feedback">
                                 Looks good!
                              </div>
                           </b-col>
                           <b-col md="6" class="mb-3">
                              <label for="uname">Username</label>
                              <div class="input-group">
                                 <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                                 </div>
                                 <b-form-input id="uname" maxlength="100" :class="`form-control ${$v.uname.$error ? 'is-invalid' : ''}`" v-model="uname" @input="$v.uname.$touch()" @blur="$v.uname.$touch()" >
                              </b-form-input>
                                 <div class="invalid-feedback">
                                    Please choose a username.
                                 </div>
                              </div>
                           </b-col>
                           <b-col md="6" class="mb-3">
                              <label for="city">City</label>
                              <b-form-input id="city" maxlength="100" :class="`form-control ${$v.city.$error ? 'is-invalid' : ''}`" v-model="city" @input="$v.city.$touch()" @blur="$v.city.$touch()" >
                              </b-form-input>
                              <div class="invalid-feedback">
                                 Please provide a valid city.
                              </div>
                           </b-col>
                           <b-col md="6" class="mb-3">
                              <label for="validationCustom04">State</label>
                              <select class="form-control" id="validationCustom04" required>
                                 <option selected disabled value="">Choose...</option>
                                 <option>...</option>
                              </select>
                              <div class="invalid-feedback">
                                 Please select a valid state.
                              </div>
                           </b-col>
                           <b-col md="6" class="mb-3">
                              <label for="zip">Zip</label>
                              <b-form-input id="zip" maxlength="100" :class="`form-control ${$v.zip.$error ? 'is-invalid' : ''}`" v-model="zip" @input="$v.zip.$touch()" @blur="$v.zip.$touch()" >
                              </b-form-input>
                              <div class="invalid-feedback">
                                 Please provide a valid zip.
                              </div>
                           </b-col>
                        </div>
                        <div class="form-group">
                           <div class="form-check">
                           <div class="custom-control custom-checkbox mb-3">
                           <input type="checkbox" class="custom-control-input" id="cbox">
                           <label class="custom-control-label" for="customControlValidation1">Agree to terms and conditions</label>
                           <div class="invalid-feedback">You must agree before submitting.</div>
                           </div>
                              
                           </div>
                        </div>
                        <button @click="submit()" class="btn btn-primary" type="submit">Submit form</button>
                     </form>
               </template>
            </card>
            <card>
               <template v-slot:headerTitle>
                        <h4 class="card-title">Tooltips</h4>
               </template>
               <template v-slot:headerAction>
                       <a class="text-primary float-right" v-b-toggle.collapse-4 role="button">
                         <i class="ri-code-s-slash-line" />
                       </a>
                     </template>
               <template v-slot:body>
                  <b-collapse id="collapse-4" class="mb-2">
               <div class="card">
                <kbd class="bg-dark">
                  <pre class="text-white" id="default-buttons">
                    <code>
         &#x3C;form &#x3E;
         &#x3C;div class=&#x22;form-row&#x22;&#x3E;
            &#x3C;b-col md=&#x22;6&#x22; class=&#x22;mb-3&#x22;&#x3E;
               &#x3C;label for=&#x22;fname1&#x22; class=&#x22;control-label&#x22;&#x3E;First Name&#x3C;/label&#x3E;
               &#x3C;b-form-input id=&#x22;fname1&#x22; maxlength=&#x22;100&#x22; :class=&#x22;&#x60;form-control ${$v.fname1.$error ? &#x27;is-invalid&#x27; : &#x27;&#x27;}&#x60;&#x22; v-model=&#x22;fname1&#x22; @input=&#x22;$v.fname1.$touch()&#x22; @blur=&#x22;$v.fname1.$touch()&#x22;&#x3E;
               &#x3C;/b-form-input&#x3E;
               &#x3C;div class=&#x22;valid-tooltip&#x22;&#x3E;
                  Looks good!
               &#x3C;/div&#x3E;
            &#x3C;/b-col&#x3E;
            &#x3C;b-col md=&#x22;6&#x22; class=&#x22;mb-3&#x22;&#x3E;
               &#x3C;label for=&#x22;lname1&#x22;&#x3E;Last name&#x3C;/label&#x3E;
               &#x3C;b-form-input id=&#x22;lname1&#x22; maxlength=&#x22;100&#x22; :class=&#x22;&#x60;form-control ${$v.lname1.$error ? &#x27;is-invalid&#x27; : &#x27;&#x27;}&#x60;&#x22; v-model=&#x22;lname1&#x22; @input=&#x22;$v.lname1.$touch()&#x22; @blur=&#x22;$v.lname1.$touch()&#x22; &#x3E;
               &#x3C;/b-form-input&#x3E;
               &#x3C;div class=&#x22;valid-tooltip&#x22;&#x3E;
                  Looks good!
               &#x3C;/div&#x3E;
            &#x3C;/b-col&#x3E;
            &#x3C;b-col md=&#x22;6&#x22; class=&#x22;mb-3&#x22;&#x3E;
               &#x3C;label for=&#x22;uname&#x22;&#x3E;Username&#x3C;/label&#x3E;
               &#x3C;div class=&#x22;input-group&#x22;&#x3E;
                  &#x3C;div class=&#x22;input-group-prepend&#x22;&#x3E;
                     &#x3C;span class=&#x22;input-group-text&#x22; id=&#x22;inputGroupPrepend&#x22;&#x3E;@&#x3C;/span&#x3E;
                  &#x3C;/div&#x3E;
                  &#x3C;b-form-input id=&#x22;uname&#x22; maxlength=&#x22;100&#x22; :class=&#x22;&#x60;form-control ${$v.uname.$error ? &#x27;is-invalid&#x27; : &#x27;&#x27;}&#x60;&#x22; v-model=&#x22;uname&#x22; @input=&#x22;$v.uname.$touch()&#x22; @blur=&#x22;$v.uname.$touch()&#x22; &#x3E;
               &#x3C;/b-form-input&#x3E;
                  &#x3C;div class=&#x22;invalid-tooltip&#x22;&#x3E;
                     Please choose a unique and valid username.
                  &#x3C;/div&#x3E;
               &#x3C;/div&#x3E;
            &#x3C;/b-col&#x3E;
            &#x3C;b-col md=&#x22;6&#x22; class=&#x22;mb-3&#x22;&#x3E;
               &#x3C;label for=&#x22;city1&#x22;&#x3E;City&#x3C;/label&#x3E;
               &#x3C;b-form-input id=&#x22;city1&#x22; maxlength=&#x22;100&#x22; :class=&#x22;&#x60;form-control ${$v.city1.$error ? &#x27;is-invalid&#x27; : &#x27;&#x27;}&#x60;&#x22; v-model=&#x22;city1&#x22; @input=&#x22;$v.city1.$touch()&#x22; @blur=&#x22;$v.city1.$touch()&#x22; &#x3E;
               &#x3C;/b-form-input&#x3E;
               &#x3C;div class=&#x22;invalid-tooltip&#x22;&#x3E;
                  Please provide a valid city.
               &#x3C;/div&#x3E;
            &#x3C;/b-col&#x3E;
            &#x3C;b-col md=&#x22;6&#x22; class=&#x22;mb-3&#x22;&#x3E;
               &#x3C;label for=&#x22;validationCustom04&#x22;&#x3E;State&#x3C;/label&#x3E;
               &#x3C;select class=&#x22;form-control&#x22; id=&#x22;validationCustom04&#x22; required&#x3E;
                  &#x3C;option selected disabled value=&#x22;&#x22;&#x3E;Choose...&#x3C;/option&#x3E;
                  &#x3C;option&#x3E;...&#x3C;/option&#x3E;
               &#x3C;/select&#x3E;
               &#x3C;div class=&#x22;invalid-tooltip&#x22;&#x3E;
                  Please select a valid state.
               &#x3C;/div&#x3E;
            &#x3C;/b-col&#x3E;
            &#x3C;b-col md=&#x22;6&#x22; class=&#x22;mb-3&#x22;&#x3E;
               &#x3C;label for=&#x22;zip1&#x22;&#x3E;Zip&#x3C;/label&#x3E;
               &#x3C;b-form-input id=&#x22;zip1&#x22; maxlength=&#x22;100&#x22; :class=&#x22;&#x60;form-control ${$v.zip1.$error ? &#x27;is-invalid&#x27; : &#x27;&#x27;}&#x60;&#x22; v-model=&#x22;zip1&#x22; @input=&#x22;$v.zip1.$touch()&#x22; @blur=&#x22;$v.zip1.$touch()&#x22; &#x3E;
               &#x3C;/b-form-input&#x3E;
               &#x3C;div class=&#x22;invalid-tooltip&#x22;&#x3E;
                  Please provide a valid zip.
               &#x3C;/div&#x3E;
            &#x3C;/b-col&#x3E;
         &#x3C;/div&#x3E;
         &#x3C;div class=&#x22;form-group&#x22;&#x3E;
            &#x3C;div class=&#x22;form-check&#x22;&#x3E;
               &#x3C;p class=&#x22;control&#x22;&#x3E;
               &#x3C;label class=&#x22;checkbox&#x22;&#x3E;
                  &#x3C;input name=&#x22;terms&#x22; type=&#x22;checkbox&#x22;&#x3E;
                  I agree to the terms and conditions.
               &#x3C;/label&#x3E;
               &#x3C;div class=&#x22;invalid-tooltip&#x22;&#x3E;
                  You must agree before submitting.
               &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
         &#x3C;/div&#x3E;
         &#x3C;button @click=&#x22;submit1()&#x22; class=&#x22;btn btn-primary&#x22; type=&#x22;submit&#x22;&#x3E;Submit form&#x3C;/button&#x3E;
      &#x3C;/form&#x3E;
                     </code></pre>
                     </kbd>
               </div>
               </b-collapse>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                     <form >
                        <div class="form-row">
                           <b-col md="6" class="mb-3">
                              <label for="fname1" class="control-label">First Name</label>
                              <b-form-input id="fname1" maxlength="100" :class="`form-control ${$v.fname1.$error ? 'is-invalid' : ''}`" v-model="fname1" @input="$v.fname1.$touch()" @blur="$v.fname1.$touch()">
                              </b-form-input>
                              <div class="valid-tooltip">
                                 Looks good!
                              </div>
                           </b-col>
                           <b-col md="6" class="mb-3">
                              <label for="lname1">Last name</label>
                              <b-form-input id="lname1" maxlength="100" :class="`form-control ${$v.lname1.$error ? 'is-invalid' : ''}`" v-model="lname1" @input="$v.lname1.$touch()" @blur="$v.lname1.$touch()" >
                              </b-form-input>
                              <div class="valid-tooltip">
                                 Looks good!
                              </div>
                           </b-col>
                           <b-col md="6" class="mb-3">
                              <label for="uname1">Username</label>
                              <div class="input-group">
                                 <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                                 </div>
                                 <b-form-input id="uname1" maxlength="100" :class="`form-control ${$v.uname1.$error ? 'is-invalid' : ''}`" v-model="uname1" @input="$v.uname1.$touch()" @blur="$v.uname1.$touch()" >
                              </b-form-input>
                                 <div class="invalid-tooltip">
                                    Please choose a unique and valid username.
                                 </div>
                              </div>
                           </b-col>
                           <b-col md="6" class="mb-3">
                              <label for="city1">City</label>
                              <b-form-input id="city1" maxlength="100" :class="`form-control ${$v.city1.$error ? 'is-invalid' : ''}`" v-model="city1" @input="$v.city1.$touch()" @blur="$v.city1.$touch()" >
                              </b-form-input>
                              <div class="invalid-tooltip">
                                 Please provide a valid city.
                              </div>
                           </b-col>
                           <b-col md="6" class="mb-3">
                              <label for="validationCustom05">State</label>
                              <select class="form-control" id="validationCustom05" required>
                                 <option selected disabled value="">Choose...</option>
                                 <option>...</option>
                              </select>
                              <div class="invalid-tooltip">
                                 Please select a valid state.
                              </div>
                           </b-col>
                           <b-col md="6" class="mb-3">
                              <label for="zip1">Zip</label>
                              <b-form-input id="zip1" maxlength="100" :class="`form-control ${$v.zip1.$error ? 'is-invalid' : ''}`" v-model="zip1" @input="$v.zip1.$touch()" @blur="$v.zip1.$touch()" >
                              </b-form-input>
                              <div class="invalid-tooltip">
                                 Please provide a valid zip.
                              </div>
                           </b-col>
                        </div>
                        <div class="form-group">
                           <div class="form-check">
                              <p class="control">
                              <label class="checkbox">
                                 <input name="terms" type="checkbox">
                                 I agree to the terms and conditions.
                              </label>
                              <div class="invalid-tooltip">
                                 You must agree before submitting.
                              </div>
                           </div>
                        </div>
                        <button @click="submit1()" class="btn btn-primary" type="submit">Submit form</button>
                     </form>
               </template>
            </card>
         </b-col>
      </b-row>
   </b-container>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
export default {
   name:'Validations',
   mixins: [validationMixin],
   validations: {
      fname: { required },
      lname: { required },  
      uname: { required },
      city: { required },
      zip: { required },
      fname1: { required },
      lname1: { required },  
      uname1: { required },
      city1: { required },
      zip1: { required },
   },
   data(){
      return{
         fname: '',
         lname: '',
         uname: '',
         city: '',
         zip: '',
         fname1: 'Mark',
         lname1: 'Tech',
         uname1: '',
         city1: '',
         zip1: '',
      }
   },
   methods: {
      submit () {
            this.$v.$touch()
      },
      submit1 () {
            this.$v.$touch()
      },
      checkForm(event) {
         event.preventDefault();
         event.target.classList.add('was-validated');
      }
  }
}
</script>