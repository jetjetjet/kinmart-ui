<template>
   <b-container fluid="">
      <b-row>
         <b-col sm="12" lg="12">
            <card>
               <template v-slot:headerTitle>
                           <h4 class="card-title">Basic Checkbox</h4>
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
&#x3C;div class=&#x22;checkbox d-inline-block mr-3&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;checkbox-input&#x22; id=&#x22;checkbox1&#x22;&#x3E;
   &#x3C;label for=&#x22;checkbox1&#x22;&#x3E;Primary-Inactive&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;checkbox d-inline-block mr-3&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;checkbox-input&#x22; id=&#x22;checkbox2&#x22; checked=&#x22;&#x22;&#x3E;
   &#x3C;label for=&#x22;checkbox2&#x22;&#x3E;Primary / Active&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;checkbox d-inline-block mr-3&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;checkbox-input&#x22; id=&#x22;checkbox3&#x22; disabled=&#x22;&#x22;&#x3E;
   &#x3C;label for=&#x22;checkbox3&#x22;&#x3E;Disable / Inactive&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;checkbox d-inline-block mr-3&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;checkbox-input&#x22; id=&#x22;checkbox4&#x22; checked=&#x22;&#x22; disabled=&#x22;&#x22;&#x3E;
   &#x3C;label for=&#x22;checkbox4&#x22;&#x3E;Active / Disable&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
                     </code></pre>
                     </kbd>
               </div>
               </b-collapse>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                           <div class="checkbox d-inline-block mr-3">
                              <input type="checkbox" class="checkbox-input" id="checkbox1">
                              <label for="checkbox1">Primary-Inactive</label>
                           </div>
                           <div class="checkbox d-inline-block mr-3">
                              <input type="checkbox" class="checkbox-input" id="checkbox2" checked="">
                              <label for="checkbox2">Primary / Active</label>
                           </div>
                           <div class="checkbox d-inline-block mr-3">
                              <input type="checkbox" class="checkbox-input" id="checkbox3" disabled="">
                              <label for="checkbox3">Disable / Inactive</label>
                           </div>
                           <div class="checkbox d-inline-block mr-3">
                              <input type="checkbox" class="checkbox-input" id="checkbox4" checked="" disabled="">
                              <label for="checkbox4">Active / Disable</label>
                           </div>
               </template>
            </card>
            <card>
               <template v-slot:headerTitle>
                           <h4 class="card-title">Custom Checkbox</h4>
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
&#x3C;div class=&#x22;custom-control custom-checkbox custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input&#x22; id=&#x22;customCheck5&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customCheck5&#x22;&#x3E;Primary / Inactive&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-checkbox custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input&#x22; id=&#x22;customCheck6&#x22; Checked=&#x22;&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customCheck6&#x22;&#x3E;Primary - active&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-checkbox custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input&#x22; id=&#x22;customCheck7&#x22;  disabled=&#x22;&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customCheck7&#x22;&#x3E;Primary - inactive - disabled&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-checkbox custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input&#x22; id=&#x22;customCheck8&#x22;  checked=&#x22;&#x22; disabled=&#x22;&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customCheck8&#x22;&#x3E;Primary - active - disabled&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
                     </code></pre>
                     </kbd>
               </div>
               </b-collapse>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                        <div class="custom-control custom-checkbox custom-control-inline">
                           <input type="checkbox" class="custom-control-input" id="customCheck5">
                           <label class="custom-control-label" for="customCheck5">Primary / Inactive</label>
                        </div>
                        <div class="custom-control custom-checkbox custom-control-inline">
                           <input type="checkbox" class="custom-control-input" id="customCheck6" Checked="">
                           <label class="custom-control-label" for="customCheck6">Primary - active</label>
                        </div>
                        <div class="custom-control custom-checkbox custom-control-inline">
                           <input type="checkbox" class="custom-control-input" id="customCheck7"  disabled="">
                           <label class="custom-control-label" for="customCheck7">Primary - inactive - disabled</label>
                        </div>
                        <div class="custom-control custom-checkbox custom-control-inline">
                           <input type="checkbox" class="custom-control-input" id="customCheck8"  checked="" disabled="">
                           <label class="custom-control-label" for="customCheck8">Primary - active - disabled</label>
                        </div>
                     </template>
            </card>
            <card>            
               <template v-slot:headerTitle>
                           <h4 class="card-title">Color</h4>
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
&#x3C;div class=&#x22;custom-control custom-checkbox custom-checkbox-color-check custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input bg-primary&#x22; id=&#x22;customCheck-1&#x22; checked=&#x22;&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customCheck-1&#x22;&#x3E; Primary&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-checkbox custom-checkbox-color-check custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input bg-success&#x22; id=&#x22;customCheck-2&#x22; checked=&#x22;&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customCheck-2&#x22;&#x3E;Success&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-checkbox custom-checkbox-color-check custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input bg-danger&#x22; id=&#x22;customCheck-3&#x22; checked=&#x22;&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customCheck-3&#x22;&#x3E;Danger&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-checkbox custom-checkbox-color-check custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input bg-warning&#x22; id=&#x22;customCheck-4&#x22; checked=&#x22;&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customCheck-4&#x22;&#x3E;Warning&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-checkbox custom-checkbox-color-check custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input bg-dark&#x22; id=&#x22;customCheck-5&#x22; checked=&#x22;&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customCheck-5&#x22;&#x3E;Dark&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-checkbox custom-checkbox-color-check custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input bg-info&#x22; id=&#x22;customCheck-6&#x22; checked=&#x22;&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customCheck-6&#x22;&#x3E;Info&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
                     </code></pre>
                     </kbd>
               </div>
               </b-collapse>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                        <div class="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                           <input type="checkbox" class="custom-control-input bg-primary" id="customCheck-1" checked="">
                           <label class="custom-control-label" for="customCheck-1"> Primary</label>
                        </div>
                        <div class="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                           <input type="checkbox" class="custom-control-input bg-success" id="customCheck-2" checked="">
                           <label class="custom-control-label" for="customCheck-2">Success</label>
                        </div>
                        <div class="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                           <input type="checkbox" class="custom-control-input bg-danger" id="customCheck-3" checked="">
                           <label class="custom-control-label" for="customCheck-3">Danger</label>
                        </div>
                        <div class="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                           <input type="checkbox" class="custom-control-input bg-warning" id="customCheck-4" checked="">
                           <label class="custom-control-label" for="customCheck-4">Warning</label>
                        </div>
                        <div class="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                           <input type="checkbox" class="custom-control-input bg-dark" id="customCheck-5" checked="">
                           <label class="custom-control-label" for="customCheck-5">Dark</label>
                        </div>
                        <div class="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                           <input type="checkbox" class="custom-control-input bg-info" id="customCheck-6" checked="">
                           <label class="custom-control-label" for="customCheck-6">Info</label>
                        </div>
               </template>
            </card>
            <card>
               <template v-slot:headerTitle>
                           <h4 class="card-title">Custom Color</h4>
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
&#x3C;div class=&#x22;custom-control custom-checkbox custom-checkbox-color custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input bg-primary&#x22; id=&#x22;customCheck-11&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customCheck-11&#x22;&#x3E;Primary &#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-checkbox custom-checkbox-color custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input bg-success&#x22; id=&#x22;customCheck-22&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customCheck-22&#x22;&#x3E;Success&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-checkbox custom-checkbox-color custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input bg-danger&#x22; id=&#x22;customCheck-33&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customCheck-33&#x22;&#x3E;Danger&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-checkbox custom-checkbox-color custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input bg-warning&#x22; id=&#x22;customCheck-44&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customCheck-44&#x22;&#x3E;Warning&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-checkbox custom-checkbox-color custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input bg-dark&#x22; id=&#x22;customCheck-55&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customCheck-55&#x22;&#x3E;Dark&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-checkbox custom-checkbox-color custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input bg-info&#x22; id=&#x22;customCheck-66&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customCheck-66&#x22;&#x3E; Info&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
                     </code></pre>
                     </kbd>
               </div>
               </b-collapse>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                        <div class="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                           <input type="checkbox" class="custom-control-input bg-primary" id="customCheck-11">
                           <label class="custom-control-label" for="customCheck-11">Primary </label>
                        </div>
                        <div class="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                           <input type="checkbox" class="custom-control-input bg-success" id="customCheck-22">
                           <label class="custom-control-label" for="customCheck-22">Success</label>
                        </div>
                        <div class="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                           <input type="checkbox" class="custom-control-input bg-danger" id="customCheck-33">
                           <label class="custom-control-label" for="customCheck-33">Danger</label>
                        </div>
                        <div class="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                           <input type="checkbox" class="custom-control-input bg-warning" id="customCheck-44">
                           <label class="custom-control-label" for="customCheck-44">Warning</label>
                        </div>
                        <div class="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                           <input type="checkbox" class="custom-control-input bg-dark" id="customCheck-55">
                           <label class="custom-control-label" for="customCheck-55">Dark</label>
                        </div>
                        <div class="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                           <input type="checkbox" class="custom-control-input bg-info" id="customCheck-66">
                           <label class="custom-control-label" for="customCheck-66"> Info</label>
                        </div>
               </template>
            </card>
            <card>
                  <template v-slot:headerTitle>
                           <h4 class="card-title">Change Icon</h4>
                  </template>
                  <template v-slot:headerAction>
                       <a class="text-primary float-right" v-b-toggle.collapse-5 role="button">
                         <i class="ri-code-s-slash-line" />
                       </a>
                </template>
                     <template v-slot:body>
                        <b-collapse id="collapse-5" class="mb-2">
               <div class="card">
                <kbd class="bg-dark">
                  <pre class="text-white" id="default-buttons">
                    <code>
&#x3C;div class=&#x22;custom-control custom-checkbox checkbox-icon custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input&#x22; id=&#x22;customCheck-10&#x22; checked=&#x22;&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customCheck-10&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-music&#x22;&#x3E;&#x3C;/i&#x3E;Music&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-checkbox checkbox-icon custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input&#x22; id=&#x22;customCheck-20&#x22; checked=&#x22;&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customCheck-20&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-commenting-o&#x22;&#x3E;&#x3C;/i&#x3E;SMS&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-checkbox checkbox-icon custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input&#x22; id=&#x22;customCheck-30&#x22; checked=&#x22;&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customCheck-30&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-times&#x22;&#x3E;&#x3C;/i&#x3E;Cancel&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-checkbox checkbox-icon custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input&#x22; id=&#x22;customCheck-40&#x22; checked=&#x22;&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customCheck-40&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-file&#x22;&#x3E;&#x3C;/i&#x3E;File&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-checkbox checkbox-icon custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input&#x22; id=&#x22;customCheck-50&#x22; checked=&#x22;&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customCheck-50&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-bold&#x22;&#x3E;&#x3C;/i&#x3E;Bold&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-checkbox checkbox-icon custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input&#x22; id=&#x22;customCheck-60&#x22; checked=&#x22;&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customCheck-60&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-map-marker&#x22;&#x3E;&#x3C;/i&#x3E;Location&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-checkbox checkbox-icon custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input&#x22; id=&#x22;customCheck-70&#x22; checked=&#x22;&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customCheck-70&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-camera&#x22;&#x3E;&#x3C;/i&#x3E;Camera&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
                     </code></pre>
                     </kbd>
               </div>
               </b-collapse>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                        <div class="custom-control custom-checkbox checkbox-icon custom-control-inline">
                           <input type="checkbox" class="custom-control-input" id="customCheck-10" checked="">
                           <label class="custom-control-label" for="customCheck-10"><i class="fa fa-music"></i>Music</label>
                        </div>
                        <div class="custom-control custom-checkbox checkbox-icon custom-control-inline">
                           <input type="checkbox" class="custom-control-input" id="customCheck-20" checked="">
                           <label class="custom-control-label" for="customCheck-20"><i class="fa fa-commenting-o"></i>SMS</label>
                        </div>
                        <div class="custom-control custom-checkbox checkbox-icon custom-control-inline">
                           <input type="checkbox" class="custom-control-input" id="customCheck-30" checked="">
                           <label class="custom-control-label" for="customCheck-30"><i class="fa fa-times"></i>Cancel</label>
                        </div>
                        <div class="custom-control custom-checkbox checkbox-icon custom-control-inline">
                           <input type="checkbox" class="custom-control-input" id="customCheck-40" checked="">
                           <label class="custom-control-label" for="customCheck-40"><i class="fa fa-file"></i>File</label>
                        </div>
                        <div class="custom-control custom-checkbox checkbox-icon custom-control-inline">
                           <input type="checkbox" class="custom-control-input" id="customCheck-50" checked="">
                           <label class="custom-control-label" for="customCheck-50"><i class="fa fa-bold"></i>Bold</label>
                        </div>
                        <div class="custom-control custom-checkbox checkbox-icon custom-control-inline">
                           <input type="checkbox" class="custom-control-input" id="customCheck-60" checked="">
                           <label class="custom-control-label" for="customCheck-60"><i class="fa fa-map-marker"></i>Location</label>
                        </div>
                        <div class="custom-control custom-checkbox checkbox-icon custom-control-inline">
                           <input type="checkbox" class="custom-control-input" id="customCheck-70" checked="">
                           <label class="custom-control-label" for="customCheck-70"><i class="fa fa-camera"></i>Camera</label>
                        </div>
                     </template>
            </card>
            <card>
               <template v-slot:headerTitle>
                           <h4 class="card-title">Boolean Checkbox</h4>
               </template>
               <template v-slot:headerAction>
                       <a class="text-primary float-right" v-b-toggle.collapse-6 role="button">
                         <i class="ri-code-s-slash-line" />
                       </a>
                </template>
               <template v-slot:body>
                  <b-collapse id="collapse-6" class="mb-2">
               <div class="card">
                <kbd class="bg-dark">
                  <pre class="text-white" id="default-buttons">
                    <code>
&#x3C;div class=&#x22;custom-control custom-checkbox custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input&#x22; id=&#x22;customCheck-t&#x22; checked=&#x22;&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customCheck-t&#x22;&#x3E;True&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-checkbox custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input&#x22; id=&#x22;customCheck-f&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customCheck-f&#x22;&#x3E;False&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
                     </code></pre>
                     </kbd>
               </div>
               </b-collapse>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                        <div class="custom-control custom-checkbox custom-control-inline">
                           <input type="checkbox" class="custom-control-input" id="customCheck-t" checked="">
                           <label class="custom-control-label" for="customCheck-t">True</label>
                        </div>
                        <div class="custom-control custom-checkbox custom-control-inline">
                           <input type="checkbox" class="custom-control-input" id="customCheck-f">
                           <label class="custom-control-label" for="customCheck-f">False</label>
                        </div>
               </template>
            </card>
         </b-col>
      </b-row>
   </b-container>
</template>
<script>
export default {
    name:'Checkbox'
}
</script>