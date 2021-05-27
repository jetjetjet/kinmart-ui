<template>
      <b-container fluid>
         <b-row>
            <b-col sm="12" lg="12" md="6">
               <card>
                  <template v-slot:headerTitle>
                        <h4 class="card-title">Default</h4>
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
      &#x3C;div class=&#x22;input-group mb-4&#x22;&#x3E;
      &#x3C;div class=&#x22;input-group-prepend&#x22;&#x3E;
         &#x3C;span class=&#x22;input-group-text&#x22; id=&#x22;basic-addon1&#x22;&#x3E;@&#x3C;/span&#x3E;
      &#x3C;/div&#x3E;
      &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;Username&#x22; aria-label=&#x22;Username&#x22;
         aria-describedby=&#x22;basic-addon1&#x22;&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;div class=&#x22;input-group mb-4&#x22;&#x3E;
      &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;Recipient&#x27;s username&#x22;
         aria-label=&#x22;Recipient&#x27;s username&#x22; aria-describedby=&#x22;basic-addon2&#x22;&#x3E;
      &#x3C;div class=&#x22;input-group-append&#x22;&#x3E;
         &#x3C;span class=&#x22;input-group-text&#x22; id=&#x22;basic-addon2&#x22;&#x3E;@example.com&#x3C;/span&#x3E;
      &#x3C;/div&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;label for=&#x22;basic-url&#x22;&#x3E;Your URL&#x3C;/label&#x3E;
   &#x3C;div class=&#x22;input-group mb-3&#x22;&#x3E;
      &#x3C;div class=&#x22;input-group-prepend&#x22;&#x3E;
         &#x3C;span class=&#x22;input-group-text&#x22; id=&#x22;basic-addon3&#x22;&#x3E;https://example.com/users/&#x3C;/span&#x3E;
      &#x3C;/div&#x3E;
      &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; id=&#x22;basic-url&#x22; aria-describedby=&#x22;basic-addon3&#x22;&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;div class=&#x22;input-group mb-4&#x22;&#x3E;
      &#x3C;div class=&#x22;input-group-prepend&#x22;&#x3E;
         &#x3C;span class=&#x22;input-group-text&#x22;&#x3E;$&#x3C;/span&#x3E;
      &#x3C;/div&#x3E;
      &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; aria-label=&#x22;Amount (to the nearest dollar)&#x22;&#x3E;
      &#x3C;div class=&#x22;input-group-append&#x22;&#x3E;
         &#x3C;span class=&#x22;input-group-text&#x22;&#x3E;.00&#x3C;/span&#x3E;
      &#x3C;/div&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;div class=&#x22;input-group&#x22;&#x3E;
      &#x3C;div class=&#x22;input-group-prepend&#x22;&#x3E;
         &#x3C;span class=&#x22;input-group-text text-area&#x22;&#x3E;With textarea&#x3C;/span&#x3E;
      &#x3C;/div&#x3E;
      &#x3C;textarea class=&#x22;form-control&#x22; aria-label=&#x22;With textarea&#x22;&#x3E;&#x3C;/textarea&#x3E;
   &#x3C;/div&#x3E;
                     </code></pre>
                     </kbd>
               </div>
               </b-collapse>
              
                     <div class="input-group mb-4">
                        <div class="input-group-prepend">
                           <span class="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username"
                           aria-describedby="basic-addon1">
                     </div>
                     <div class="input-group mb-4">
                        <input type="text" class="form-control" placeholder="Recipient's username"
                           aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                           <span class="input-group-text" id="basic-addon2">@example.com</span>
                        </div>
                     </div>
                     <label for="basic-url">Your URL</label>
                     <div class="input-group mb-3">
                        <div class="input-group-prepend">
                           <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
                        </div>
                        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
                     </div>
                     <div class="input-group mb-4">
                        <div class="input-group-prepend">
                           <span class="input-group-text">$</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                        <div class="input-group-append">
                           <span class="input-group-text">.00</span>
                        </div>
                     </div>
                     <div class="input-group">
                        <div class="input-group-prepend">
                           <span class="input-group-text text-area">With textarea</span>
                        </div>
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                     </div>
                  </template>
               </card>
               <card>
               <template v-slot:headerTitle>
                        <h4 class="card-title">Simple Icon</h4>
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
&#x3C;div class=&#x22;input-group mb-4&#x22;&#x3E;
&#x3C;div class=&#x22;input-group-prepend&#x22;&#x3E;
   &#x3C;span class=&#x22;input-group-text&#x22; id=&#x22;basic-addon4&#x22;&#x3E;&#x3C;i class=&#x22;las la-bell font-size-20&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;Notification&#x22; aria-label=&#x22;notification&#x22;
   aria-describedby=&#x22;basic-addon4&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;p class=&#x22;text-right&#x22;&#x3E;&#x3C;i class=&#x22;las la-long-arrow-alt-right mr-1&#x22;&#x3E;&#x3C;/i&#x3E;Right&#x3C;/p&#x3E;
&#x3C;div class=&#x22;input-group&#x22;&#x3E;
&#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;Notification&#x22; aria-label=&#x22;notification&#x22;
   aria-describedby=&#x22;basic-addon5&#x22;&#x3E;
&#x3C;div class=&#x22;input-group-append&#x22;&#x3E;
   &#x3C;span class=&#x22;input-group-text&#x22; id=&#x22;basic-addon5&#x22;&#x3E;&#x3C;i class=&#x22;las la-bell font-size-20&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
                     </code></pre>
                     </kbd>
               </div>
               </b-collapse>
                     <p><i class="las la-long-arrow-alt-left mr-1"></i> Left </p>
                     <div class="input-group mb-4">
                        <div class="input-group-prepend">
                           <span class="input-group-text" id="basic-addon4"><i class="las la-bell font-size-20"></i></span>
                        </div>
                        <input type="text" class="form-control" placeholder="Notification" aria-label="notification"
                           aria-describedby="basic-addon4">
                     </div>
                     <p class="text-right"><i class="las la-long-arrow-alt-right mr-1"></i>Right</p>
                     <div class="input-group">
                        <input type="text" class="form-control" placeholder="Notification" aria-label="notification"
                           aria-describedby="basic-addon5">
                        <div class="input-group-append">
                           <span class="input-group-text" id="basic-addon5"><i class="las la-bell font-size-20"></i></span>
                        </div>
                     </div>
                 </template>
               </card>
               <card>
               <template v-slot:headerTitle>
                        <h4 class="card-title">Spinning Icon</h4>
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
&#x3C;div class=&#x22;input-group mb-4&#x22;&#x3E;
&#x3C;div class=&#x22;input-group-prepend&#x22;&#x3E;
   &#x3C;span class=&#x22;input-group-text&#x22; id=&#x22;basic-addon6&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-spinner fa-spin&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;Spinners&#x22; aria-label=&#x22;spinners&#x22;
   aria-describedby=&#x22;basic-addon6&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;p class=&#x22;text-right&#x22;&#x3E;&#x3C;i class=&#x22;las la-long-arrow-alt-right mr-1&#x22;&#x3E;&#x3C;/i&#x3E;Right&#x3C;/p&#x3E;
&#x3C;div class=&#x22;input-group&#x22;&#x3E;
&#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;Spinners&#x22; aria-label=&#x22;spinners&#x22;
   aria-describedby=&#x22;basic-addon7&#x22;&#x3E;
&#x3C;div class=&#x22;input-group-append&#x22;&#x3E;
   &#x3C;span class=&#x22;input-group-text&#x22; id=&#x22;basic-addon7&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-spinner fa-spin&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
                     </code></pre>
                     </kbd>
               </div>
               </b-collapse>
                     <p><i class="las la-long-arrow-alt-left mr-1"></i> Left </p>
                     <div class="input-group mb-4">
                        <div class="input-group-prepend">
                           <span class="input-group-text" id="basic-addon6"><i class="fa fa-spinner fa-spin"></i></span>
                        </div>
                        <input type="text" class="form-control" placeholder="Spinners" aria-label="spinners"
                           aria-describedby="basic-addon6">
                     </div>
                     <p class="text-right"><i class="las la-long-arrow-alt-right mr-1"></i>Right</p>
                     <div class="input-group">
                        <input type="text" class="form-control" placeholder="Spinners" aria-label="spinners"
                           aria-describedby="basic-addon7">
                        <div class="input-group-append">
                           <span class="input-group-text" id="basic-addon7"><i class="fa fa-spinner fa-spin"></i></span>
                        </div>
                     </div>
                  </template>
               </card>
               <card>
               <template v-slot:headerTitle>
                        <h4 class="card-title">Switch</h4>
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
&#x3C;div class=&#x22;input-group mb-4&#x22;&#x3E;
&#x3C;div class=&#x22;input-group-prepend&#x22;&#x3E;
      &#x3C;div class=&#x22;input-group-text&#x22;&#x3E;
         &#x3C;div class=&#x22;custom-control custom-switch custom-switch-color&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input bg-primary&#x22; id=&#x22;customSwitch01&#x22;
               checked=&#x22;&#x22;&#x3E;
            &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customSwitch01&#x22;&#x3E;&#x3C;/label&#x3E;
         &#x3C;/div&#x3E;
      &#x3C;/div&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;Switch&#x22; aria-label=&#x22;switch&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;p class=&#x22;text-right&#x22;&#x3E;&#x3C;i class=&#x22;las la-long-arrow-alt-right mr-1&#x22;&#x3E;&#x3C;/i&#x3E;Right&#x3C;/p&#x3E;
&#x3C;div class=&#x22;input-group&#x22;&#x3E;
   &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;Switch&#x22; aria-label=&#x22;switch&#x22;&#x3E;
   &#x3C;div class=&#x22;input-group-append&#x22;&#x3E;
      &#x3C;div class=&#x22;input-group-text&#x22;&#x3E;
         &#x3C;div class=&#x22;custom-control custom-switch custom-switch-color&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input bg-success&#x22; id=&#x22;customSwitch02&#x22;
               checked=&#x22;&#x22;&#x3E;
            &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customSwitch02&#x22;&#x3E;&#x3C;/label&#x3E;
         &#x3C;/div&#x3E;
      &#x3C;/div&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
                     </code></pre>
                     </kbd>
               </div>
               </b-collapse>
                     <p><i class="las la-long-arrow-alt-left mr-1"></i> Left </p>
                     <div class="input-group mb-4">
                        <div class="input-group-prepend">
                           <div class="input-group-text">
                              <div class="custom-control custom-switch custom-switch-color">
                                 <input type="checkbox" class="custom-control-input bg-primary" id="customSwitch01"
                                    checked="">
                                 <label class="custom-control-label" for="customSwitch01"></label>
                              </div>
                           </div>
                        </div>
                        <input type="text" class="form-control" placeholder="Switch" aria-label="switch">
                     </div>
                     <p class="text-right"><i class="las la-long-arrow-alt-right mr-1"></i>Right</p>
                     <div class="input-group">
                        <input type="text" class="form-control" placeholder="Switch" aria-label="switch">
                        <div class="input-group-append">
                           <div class="input-group-text">
                              <div class="custom-control custom-switch custom-switch-color">
                                 <input type="checkbox" class="custom-control-input bg-success" id="customSwitch02"
                                    checked="">
                                 <label class="custom-control-label" for="customSwitch02"></label>
                              </div>
                           </div>
                        </div>
                     </div>
                 </template>
               </card>
               <card>
               <template v-slot:headerTitle>
                        <h4 class="card-title">Buttons with dropdowns</h4>
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
&#x3C;div&#x3E;&#x3C;b-input-group class=&#x22;mb-4&#x22;&#x3E;
&#x3C;b-input-group-prepend&#x3E;
      &#x3C;b-dropdown text=&#x22;Dropdown&#x22; variant=&#x22;primary&#x22;&#x3E;
         &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
         &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
         &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Something else here...&#x3C;/b-dropdown-item&#x3E;
         &#x3C;div role=&#x22;separator&#x22; class=&#x22;dropdown-divider&#x22;&#x3E;&#x3C;/div&#x3E;
         &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Separated link&#x3C;/b-dropdown-item&#x3E;
      &#x3C;/b-dropdown&#x3E;
   &#x3C;/b-input-group-prepend&#x3E;
   &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; aria-label=&#x22;Text input with dropdown button&#x22;&#x3E;
&#x3C;/b-input-group&#x3E;&#x3C;/div&#x3E;
&#x3C;p class=&#x22;text-right&#x22;&#x3E;&#x3C;i class=&#x22;las la-long-arrow-alt-right mr-1&#x22;&#x3E;&#x3C;/i&#x3E;Right&#x3C;/p&#x3E;
&#x3C;b-input-group&#x3E;
   &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; aria-label=&#x22;Text input with dropdown button&#x22;&#x3E;
   &#x3C;b-input-group-append&#x3E;
      &#x3C;b-dropdown text=&#x22;Dropdown&#x22; variant=&#x22;primary&#x22;&#x3E;
         &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
         &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
         &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Something else here...&#x3C;/b-dropdown-item&#x3E;
         &#x3C;div role=&#x22;separator&#x22; class=&#x22;dropdown-divider&#x22;&#x3E;&#x3C;/div&#x3E;
         &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Separated link&#x3C;/b-dropdown-item&#x3E;
      &#x3C;/b-dropdown&#x3E;
   &#x3C;/b-input-group-append&#x3E;
&#x3C;/b-input-group&#x3E;
                     </code></pre>
                     </kbd>
               </div>
               </b-collapse>
                     <p><i class="las la-long-arrow-alt-left mr-1"></i> Left </p>
                        <div><b-input-group class="mb-4">
                        <b-input-group-prepend>
                           <b-dropdown text="Dropdown" variant="primary">
                             <b-dropdown-item href="#">Action</b-dropdown-item>
                             <b-dropdown-item href="#">Another action</b-dropdown-item>
                             <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                             <div role="separator" class="dropdown-divider"></div>
                             <b-dropdown-item href="#">Separated link</b-dropdown-item>
                           </b-dropdown>
                        </b-input-group-prepend>
                        <input type="text" class="form-control" aria-label="Text input with dropdown button">
                     </b-input-group></div>
                     <p class="text-right"><i class="las la-long-arrow-alt-right mr-1"></i>Right</p>
                    <b-input-group>
                        <input type="text" class="form-control" aria-label="Text input with dropdown button">
                        <b-input-group-append>
                           <b-dropdown text="Dropdown" variant="primary">
                             <b-dropdown-item href="#">Action</b-dropdown-item>
                             <b-dropdown-item href="#">Another action</b-dropdown-item>
                             <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                             <div role="separator" class="dropdown-divider"></div>
                             <b-dropdown-item href="#">Separated link</b-dropdown-item>
                           </b-dropdown>
                        </b-input-group-append>
                     </b-input-group>
                  </template>
               </card>
               <card>
               <template v-slot:headerTitle>
                        <h4 class="card-title">Segmented buttons</h4>
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
&#x3C;div&#x3E;&#x3C;b-input-group class=&#x22;mb-4&#x22;&#x3E;
&#x3C;b-input-group-prepend&#x3E;
      &#x3C;b-button variant=&#x22;primary&#x22;&#x3E;Action&#x3C;/b-button&#x3E;
      &#x3C;b-dropdown variant=&#x22;outline-primary&#x22;&#x3E;
         &#x3C;b-dropdown-item-button href=&#x22;#&#x22;&#x3E;Action&#x3C;/b-dropdown-item-button&#x3E;
         &#x3C;b-dropdown-item-button href=&#x22;#&#x22;&#x3E;Another action&#x3C;/b-dropdown-item-button&#x3E;
         &#x3C;b-dropdown-item-button href=&#x22;#&#x22;&#x3E;Something else here...&#x3C;/b-dropdown-item-button&#x3E;
         &#x3C;div role=&#x22;separator&#x22; class=&#x22;dropdown-divider&#x22;&#x3E;&#x3C;/div&#x3E;
         &#x3C;b-dropdown-item-button href=&#x22;#&#x22;&#x3E;Separated link&#x3C;/b-dropdown-item-button&#x3E;
      &#x3C;/b-dropdown&#x3E;
   &#x3C;/b-input-group-prepend&#x3E;
   &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; aria-label=&#x22;Text input with dropdown button&#x22;&#x3E;
&#x3C;/b-input-group&#x3E;&#x3C;/div&#x3E;
&#x3C;p class=&#x22;text-right&#x22;&#x3E;&#x3C;i class=&#x22;las la-long-arrow-alt-right mr-1&#x22;&#x3E;&#x3C;/i&#x3E;Right&#x3C;/p&#x3E;
   &#x3C;b-input-group&#x3E;
   &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; aria-label=&#x22;Text input with segmented dropdown button&#x22;&#x3E;
   &#x3C;b-input-group-append&#x3E;
      &#x3C;b-button variant=&#x22;outline-secondary&#x22;&#x3E;Action&#x3C;/b-button&#x3E;
      &#x3C;b-dropdown variant=&#x22;secondary&#x22;&#x3E;
         
         &#x3C;b-dropdown-item-button href=&#x22;#&#x22;&#x3E;Action&#x3C;/b-dropdown-item-button&#x3E;
         &#x3C;b-dropdown-item-button href=&#x22;#&#x22;&#x3E;Another action&#x3C;/b-dropdown-item-button&#x3E;
         &#x3C;b-dropdown-item-button href=&#x22;#&#x22;&#x3E;Something else here...&#x3C;/b-dropdown-item-button&#x3E;
         &#x3C;div role=&#x22;separator&#x22; class=&#x22;dropdown-divider&#x22;&#x3E;&#x3C;/div&#x3E;
         &#x3C;b-dropdown-item-button href=&#x22;#&#x22;&#x3E;Separated link&#x3C;/b-dropdown-item-button&#x3E;
      &#x3C;/b-dropdown&#x3E;
&#x3C;/b-input-group-append&#x3E;
&#x3C;/b-input-group&#x3E;
                     </code></pre>
                     </kbd>
               </div>
               </b-collapse>
                     <p><i class="las la-long-arrow-alt-left mr-1"></i> Left </p>
                     <div><b-input-group class="mb-4">
                        <b-input-group-prepend>
                           <b-button variant="primary">Action</b-button>
                           <b-dropdown variant="outline-primary">
                             <b-dropdown-item-button href="#">Action</b-dropdown-item-button>
                             <b-dropdown-item-button href="#">Another action</b-dropdown-item-button>
                             <b-dropdown-item-button href="#">Something else here...</b-dropdown-item-button>
                             <div role="separator" class="dropdown-divider"></div>
                             <b-dropdown-item-button href="#">Separated link</b-dropdown-item-button>
                           </b-dropdown>
                        </b-input-group-prepend>
                        <input type="text" class="form-control" aria-label="Text input with dropdown button">
                     </b-input-group></div>
                     <p class="text-right"><i class="las la-long-arrow-alt-right mr-1"></i>Right</p>
                        <b-input-group>
                        <input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
                        <b-input-group-append>
                           <b-button variant="outline-secondary">Action</b-button>
                           <b-dropdown variant="secondary">
                             
                             <b-dropdown-item-button href="#">Action</b-dropdown-item-button>
                             <b-dropdown-item-button href="#">Another action</b-dropdown-item-button>
                             <b-dropdown-item-button href="#">Something else here...</b-dropdown-item-button>
                             <div role="separator" class="dropdown-divider"></div>
                             <b-dropdown-item-button href="#">Separated link</b-dropdown-item-button>
                           </b-dropdown>
                        </b-input-group-append>
                        </b-input-group>
                  </template>
               </card>
               <card>
               <template v-slot:headerTitle>
                        <h4 class="card-title">Custom select</h4>
                     </template>
                      <template v-slot:headerAction>
                       <a class="text-primary float-right" v-b-toggle.collapse-7 role="button">
                         <i class="ri-code-s-slash-line" />
                       </a>
                     </template>
               <template v-slot:body>
                  <b-collapse id="collapse-7" class="mb-2">
               <div class="card">
                <kbd class="bg-dark">
                  <pre class="text-white" id="default-buttons">
                    <code>
&#x3C;div class=&#x22;input-group mb-4&#x22;&#x3E;
&#x3C;div class=&#x22;input-group-prepend&#x22;&#x3E;
   &#x3C;label class=&#x22;input-group-text&#x22; for=&#x22;inputGroupSelect01&#x22;&#x3E;Options&#x3C;/label&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;select class=&#x22;custom-select&#x22; id=&#x22;inputGroupSelect01&#x22;&#x3E;
      &#x3C;option selected&#x3E;Choose...&#x3C;/option&#x3E;
      &#x3C;option value=&#x22;1&#x22;&#x3E;One&#x3C;/option&#x3E;
      &#x3C;option value=&#x22;2&#x22;&#x3E;Two&#x3C;/option&#x3E;
      &#x3C;option value=&#x22;3&#x22;&#x3E;Three&#x3C;/option&#x3E;
   &#x3C;/select&#x3E;
&#x3C;/div&#x3E;
&#x3C;p class=&#x22;text-right&#x22;&#x3E;&#x3C;i class=&#x22;las la-long-arrow-alt-right mr-1&#x22;&#x3E;&#x3C;/i&#x3E;Right&#x3C;/p&#x3E;
&#x3C;div class=&#x22;input-group mb-4&#x22;&#x3E;
   &#x3C;select class=&#x22;custom-select&#x22; id=&#x22;inputGroupSelect02&#x22;&#x3E;
      &#x3C;option selected&#x3E;Choose...&#x3C;/option&#x3E;
      &#x3C;option value=&#x22;1&#x22;&#x3E;One&#x3C;/option&#x3E;
      &#x3C;option value=&#x22;2&#x22;&#x3E;Two&#x3C;/option&#x3E;
      &#x3C;option value=&#x22;3&#x22;&#x3E;Three&#x3C;/option&#x3E;
   &#x3C;/select&#x3E;
   &#x3C;div class=&#x22;input-group-append&#x22;&#x3E;
      &#x3C;label class=&#x22;input-group-text&#x22; for=&#x22;inputGroupSelect02&#x22;&#x3E;Options&#x3C;/label&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;p&#x3E;&#x3C;i class=&#x22;las la-long-arrow-alt-left mr-1&#x22;&#x3E;&#x3C;/i&#x3E; Left &#x3C;/p&#x3E;
&#x3C;div class=&#x22;input-group mb-4&#x22;&#x3E;
   &#x3C;div class=&#x22;input-group-prepend&#x22;&#x3E;
      &#x3C;button class=&#x22;btn btn-outline-secondary&#x22; type=&#x22;button&#x22;&#x3E;Button&#x3C;/button&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;select class=&#x22;custom-select&#x22; id=&#x22;inputGroupSelect03&#x22;&#x3E;
      &#x3C;option selected&#x3E;Choose...&#x3C;/option&#x3E;
      &#x3C;option value=&#x22;1&#x22;&#x3E;One&#x3C;/option&#x3E;
      &#x3C;option value=&#x22;2&#x22;&#x3E;Two&#x3C;/option&#x3E;
      &#x3C;option value=&#x22;3&#x22;&#x3E;Three&#x3C;/option&#x3E;
   &#x3C;/select&#x3E;
&#x3C;/div&#x3E;
&#x3C;p class=&#x22;text-right&#x22;&#x3E;&#x3C;i class=&#x22;las la-long-arrow-alt-right mr-1&#x22;&#x3E;&#x3C;/i&#x3E;Right&#x3C;/p&#x3E;
&#x3C;div class=&#x22;input-group&#x22;&#x3E;
   &#x3C;select class=&#x22;custom-select&#x22; id=&#x22;inputGroupSelect04&#x22;&#x3E;
      &#x3C;option selected&#x3E;Choose...&#x3C;/option&#x3E;
      &#x3C;option value=&#x22;1&#x22;&#x3E;One&#x3C;/option&#x3E;
      &#x3C;option value=&#x22;2&#x22;&#x3E;Two&#x3C;/option&#x3E;
      &#x3C;option value=&#x22;3&#x22;&#x3E;Three&#x3C;/option&#x3E;
   &#x3C;/select&#x3E;
   &#x3C;div class=&#x22;input-group-append&#x22;&#x3E;
      &#x3C;button class=&#x22;btn btn-outline-secondary&#x22; type=&#x22;button&#x22;&#x3E;Button&#x3C;/button&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
                     </code></pre>
                     </kbd>
               </div>
               </b-collapse>
                     <p><i class="las la-long-arrow-alt-left mr-1"></i> Left </p>
                     <div class="input-group mb-4">
                        <div class="input-group-prepend">
                           <label class="input-group-text" for="inputGroupSelect01">Options</label>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01">
                           <option selected>Choose...</option>
                           <option value="1">One</option>
                           <option value="2">Two</option>
                           <option value="3">Three</option>
                        </select>
                     </div>
                     <p class="text-right"><i class="las la-long-arrow-alt-right mr-1"></i>Right</p>
                     <div class="input-group mb-4">
                        <select class="custom-select" id="inputGroupSelect02">
                           <option selected>Choose...</option>
                           <option value="1">One</option>
                           <option value="2">Two</option>
                           <option value="3">Three</option>
                        </select>
                        <div class="input-group-append">
                           <label class="input-group-text" for="inputGroupSelect02">Options</label>
                        </div>
                     </div>
                     <p><i class="las la-long-arrow-alt-left mr-1"></i> Left </p>
                     <div class="input-group mb-4">
                        <div class="input-group-prepend">
                           <button class="btn btn-outline-secondary" type="button">Button</button>
                        </div>
                        <select class="custom-select" id="inputGroupSelect03">
                           <option selected>Choose...</option>
                           <option value="1">One</option>
                           <option value="2">Two</option>
                           <option value="3">Three</option>
                        </select>
                     </div>
                     <p class="text-right"><i class="las la-long-arrow-alt-right mr-1"></i>Right</p>
                     <div class="input-group">
                        <select class="custom-select" id="inputGroupSelect04">
                           <option selected>Choose...</option>
                           <option value="1">One</option>
                           <option value="2">Two</option>
                           <option value="3">Three</option>
                        </select>
                        <div class="input-group-append">
                           <button class="btn btn-outline-secondary" type="button">Button</button>
                        </div>
                     </div>
               </template>
               </card>
            </b-col>
            <b-col sm="12" lg="12" md="6">
               <card>
               <template v-slot:headerTitle>
                        <h4 class="card-title">Sizing</h4>
                     </template>
                       <template v-slot:headerAction>
                       <a class="text-primary float-right" v-b-toggle.collapse-15 role="button">
                         <i class="ri-code-s-slash-line" />
                       </a>
                     </template>
               <template v-slot:body>
                  <b-collapse id="collapse-15" class="mb-2">
               <div class="card">
                <kbd class="bg-dark">
                  <pre class="text-white" id="default-buttons">
                    <code>
&#x3C;div class=&#x22;input-group input-group-sm mb-4&#x22;&#x3E;
&#x3C;div class=&#x22;input-group-prepend&#x22;&#x3E;
      &#x3C;span class=&#x22;input-group-text&#x22; id=&#x22;inputGroup-sizing-sm&#x22;&#x3E;Small&#x3C;/span&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; aria-label=&#x22;Small&#x22; aria-describedby=&#x22;inputGroup-sizing-sm&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;input-group mb-4&#x22;&#x3E;
   &#x3C;div class=&#x22;input-group-prepend&#x22;&#x3E;
      &#x3C;span class=&#x22;input-group-text&#x22; id=&#x22;inputGroup-sizing-default&#x22;&#x3E;Default&#x3C;/span&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; aria-label=&#x22;Default&#x22;
      aria-describedby=&#x22;inputGroup-sizing-default&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;input-group input-group-lg&#x22;&#x3E;
   &#x3C;div class=&#x22;input-group-prepend&#x22;&#x3E;
      &#x3C;span class=&#x22;input-group-text&#x22; id=&#x22;inputGroup-sizing-lg&#x22;&#x3E;Large&#x3C;/span&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; aria-label=&#x22;Large&#x22; aria-describedby=&#x22;inputGroup-sizing-sm&#x22;&#x3E;
&#x3C;/div&#x3E;
                     </code></pre>
                     </kbd>
               </div>
               </b-collapse>
                     <div class="input-group input-group-sm mb-4">
                        <div class="input-group-prepend">
                           <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                     </div>
                     <div class="input-group mb-4">
                        <div class="input-group-prepend">
                           <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Default"
                           aria-describedby="inputGroup-sizing-default">
                     </div>
                     <div class="input-group input-group-lg">
                        <div class="input-group-prepend">
                           <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm">
                     </div>
               </template>
               </card>
               <card>
               <template v-slot:headerTitle>
                        <h4 class="card-title">Dropdown Icon</h4>
                     </template>
                     <template v-slot:headerAction>
                       <a class="text-primary float-right" v-b-toggle.collapse-8 role="button">
                         <i class="ri-code-s-slash-line" />
                       </a>
                     </template>
               <template v-slot:body>
                  <b-collapse id="collapse-8" class="mb-2">
               <div class="card">
                <kbd class="bg-dark">
                  <pre class="text-white" id="default-buttons">
                    <code>
&#x3C;div&#x3E;&#x3C;b-input-group class=&#x22;mb-2&#x22;&#x3E;
&#x3C;b-input-group-prepend&#x3E;
      &#x3C;b-dropdown variant=&#x22;primary&#x22; no-caret &#x3E;
         &#x3C;template #button-content&#x3E;&#x3C;i class=&#x22;las la-cog font-size-20&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/template&#x3E;
         &#x3C;b-dropdown-item-button href=&#x22;#&#x22;&#x3E;Action&#x3C;/b-dropdown-item-button&#x3E;
         &#x3C;b-dropdown-item-button href=&#x22;#&#x22;&#x3E;Another action&#x3C;/b-dropdown-item-button&#x3E;
         &#x3C;b-dropdown-item-button href=&#x22;#&#x22;&#x3E;Something else here...&#x3C;/b-dropdown-item-button&#x3E;
         &#x3C;div role=&#x22;separator&#x22; class=&#x22;dropdown-divider&#x22;&#x3E;&#x3C;/div&#x3E;
         &#x3C;b-dropdown-item-button href=&#x22;#&#x22;&#x3E;Separated link&#x3C;/b-dropdown-item-button&#x3E;
      &#x3C;/b-dropdown&#x3E;
   &#x3C;/b-input-group-prepend&#x3E;
   &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;Dropdown&#x22; aria-label=&#x22;Text input with dropdown button&#x22;&#x3E;
&#x3C;/b-input-group&#x3E;&#x3C;/div&#x3E;
&#x3C;p class=&#x22;text-right&#x22;&#x3E;&#x3C;i class=&#x22;las la-long-arrow-alt-right mr-1 &#x22;&#x3E;&#x3C;/i&#x3E;Right &#x3C;/p&#x3E;
&#x3C;div&#x3E;&#x3C;b-input-group class=&#x22;mb-2&#x22;&#x3E;
   &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; aria-label=&#x22;Text input with dropdown button&#x22;&#x3E;
   &#x3C;b-input-group-append&#x3E;
      &#x3C;b-dropdown variant=&#x22;success&#x22;  no-caret&#x3E;
         &#x3C;template #button-content&#x3E;&#x3C;i class=&#x22;las la-cog font-size-20&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/template&#x3E;
         &#x3C;b-dropdown-item-button href=&#x22;#&#x22;&#x3E;Action&#x3C;/b-dropdown-item-button&#x3E;
         &#x3C;b-dropdown-item-button href=&#x22;#&#x22;&#x3E;Another action&#x3C;/b-dropdown-item-button&#x3E;
         &#x3C;b-dropdown-item-button href=&#x22;#&#x22;&#x3E;Something else here...&#x3C;/b-dropdown-item-button&#x3E;
         &#x3C;div role=&#x22;separator&#x22; class=&#x22;dropdown-divider&#x22;&#x3E;&#x3C;/div&#x3E;
         &#x3C;b-dropdown-item-button href=&#x22;#&#x22;&#x3E;Separated link&#x3C;/b-dropdown-item-button&#x3E;
      &#x3C;/b-dropdown&#x3E;
   &#x3C;/b-input-group-append&#x3E;
   &#x3C;/b-input-group&#x3E;
&#x3C;/div&#x3E;
                     </code></pre>
                     </kbd>
               </div>
               </b-collapse>
                     <p><i class="las la-long-arrow-alt-left mr-1"></i> Left </p>
                    <div><b-input-group class="mb-2">
                     <b-input-group-prepend>
                           <b-dropdown variant="primary" no-caret >
                              <template #button-content><i class="las la-cog font-size-20"></i></template>
                             <b-dropdown-item-button href="#">Action</b-dropdown-item-button>
                             <b-dropdown-item-button href="#">Another action</b-dropdown-item-button>
                             <b-dropdown-item-button href="#">Something else here...</b-dropdown-item-button>
                             <div role="separator" class="dropdown-divider"></div>
                             <b-dropdown-item-button href="#">Separated link</b-dropdown-item-button>
                           </b-dropdown>
                        </b-input-group-prepend>
                        <input type="text" class="form-control" placeholder="Dropdown" aria-label="Text input with dropdown button">
                     </b-input-group></div>
                     <p class="text-right"><i class="las la-long-arrow-alt-right mr-1 "></i>Right </p>
                     <div><b-input-group class="mb-2">
                        <input type="text" class="form-control" aria-label="Text input with dropdown button">
                        <b-input-group-append>
                           <b-dropdown variant="success"  no-caret>
                              <template #button-content><i class="las la-cog font-size-20"></i></template>
                             <b-dropdown-item-button href="#">Action</b-dropdown-item-button>
                             <b-dropdown-item-button href="#">Another action</b-dropdown-item-button>
                             <b-dropdown-item-button href="#">Something else here...</b-dropdown-item-button>
                             <div role="separator" class="dropdown-divider"></div>
                             <b-dropdown-item-button href="#">Separated link</b-dropdown-item-button>
                           </b-dropdown>
                        </b-input-group-append>
                        </b-input-group>
                     </div>
                  </template>
               </card>
               <card>
               <template v-slot:headerTitle>
                        <h4 class="card-title">Checkboxes</h4>
                     </template>
                     <template v-slot:headerAction>
                       <a class="text-primary float-right" v-b-toggle.collapse-9 role="button">
                         <i class="ri-code-s-slash-line" />
                       </a>
                     </template>
               <template v-slot:body>
                  <b-collapse id="collapse-9" class="mb-2">
               <div class="card">
                <kbd class="bg-dark">
                  <pre class="text-white" id="default-buttons">
                    <code>
&#x3C;div class=&#x22;input-group mb-4&#x22;&#x3E;
&#x3C;div class=&#x22;input-group-prepend&#x22;&#x3E;
      &#x3C;div class=&#x22;input-group-text&#x22;&#x3E;
         &#x3C;input type=&#x22;checkbox&#x22; aria-label=&#x22;Text input with checkbox&#x22;&#x3E;
      &#x3C;/div&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;Checkbox&#x22; aria-label=&#x22;checkbox&#x22;
      aria-describedby=&#x22;basic-addon1&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;p class=&#x22;text-right&#x22;&#x3E;&#x3C;i class=&#x22;las la-long-arrow-alt-right mr-1&#x22;&#x3E;&#x3C;/i&#x3E;Right&#x3C;/p&#x3E;
&#x3C;div class=&#x22;input-group&#x22;&#x3E;
   &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;Checkbox&#x22; aria-label=&#x22;checkbox&#x22;
      aria-describedby=&#x22;basic-addon5&#x22;&#x3E;
   &#x3C;div class=&#x22;input-group-append&#x22;&#x3E;
      &#x3C;div class=&#x22;input-group-text&#x22;&#x3E;
         &#x3C;input type=&#x22;checkbox&#x22; aria-label=&#x22;Text input with checkbox&#x22; checked&#x3E;
      &#x3C;/div&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
                     </code></pre>
                     </kbd>
               </div>
               </b-collapse>
                     <p><i class="las la-long-arrow-alt-left mr-1"></i> Left </p>
                     <div class="input-group mb-4">
                        <div class="input-group-prepend">
                           <div class="input-group-text">
                              <input type="checkbox" aria-label="Text input with checkbox">
                           </div>
                        </div>
                        <input type="text" class="form-control" placeholder="Checkbox" aria-label="checkbox"
                           aria-describedby="basic-addon1">
                     </div>
                     <p class="text-right"><i class="las la-long-arrow-alt-right mr-1"></i>Right</p>
                     <div class="input-group">
                        <input type="text" class="form-control" placeholder="Checkbox" aria-label="checkbox"
                           aria-describedby="basic-addon5">
                        <div class="input-group-append">
                           <div class="input-group-text">
                              <input type="checkbox" aria-label="Text input with checkbox" checked>
                           </div>
                        </div>
                     </div>
                  </template>
               </card>
               <card>
               <template v-slot:headerTitle>
                        <h4 class="card-title">Radios</h4>
                     </template>
                      <template v-slot:headerAction>
                       <a class="text-primary float-right" v-b-toggle.collapse-10 role="button">
                         <i class="ri-code-s-slash-line" />
                       </a>
                     </template>
               <template v-slot:body>
                  <b-collapse id="collapse-10" class="mb-2">
               <div class="card">
                <kbd class="bg-dark">
                  <pre class="text-white" id="default-buttons">
                    <code>
&#x3C;div class=&#x22;input-group mb-4&#x22;&#x3E;
&#x3C;div class=&#x22;input-group-prepend&#x22;&#x3E;
      &#x3C;div class=&#x22;input-group-text&#x22;&#x3E;
         &#x3C;input type=&#x22;radio&#x22; name=&#x22;custom-radio-1&#x22; checked&#x3E;
      &#x3C;/div&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;Checkbox&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;p class=&#x22;text-right&#x22;&#x3E;&#x3C;i class=&#x22;las la-long-arrow-alt-right mr-1&#x22;&#x3E;&#x3C;/i&#x3E;Right&#x3C;/p&#x3E;
&#x3C;div class=&#x22;input-group&#x22;&#x3E;
   &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;Checkbox&#x22;&#x3E;
   &#x3C;div class=&#x22;input-group-append&#x22;&#x3E;
      &#x3C;div class=&#x22;input-group-text&#x22;&#x3E;
         &#x3C;input type=&#x22;radio&#x22; name=&#x22;custom-radio-1&#x22; checked&#x3E;
      &#x3C;/div&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
                     </code></pre>
                     </kbd>
               </div>
               </b-collapse>
                     <p><i class="las la-long-arrow-alt-left mr-1"></i> Left </p>
                     <div class="input-group mb-4">
                        <div class="input-group-prepend">
                           <div class="input-group-text">
                              <input type="radio" name="custom-radio-1" checked>
                           </div>
                        </div>
                        <input type="text" class="form-control" placeholder="Checkbox">
                     </div>
                     <p class="text-right"><i class="las la-long-arrow-alt-right mr-1"></i>Right</p>
                     <div class="input-group">
                        <input type="text" class="form-control" placeholder="Checkbox">
                        <div class="input-group-append">
                           <div class="input-group-text">
                              <input type="radio" name="custom-radio-1" checked>
                           </div>
                        </div>
                     </div>
                  </template>
               </card>
               <card>
               <template v-slot:headerTitle>
                        <h4 class="card-title">Multiple inputs</h4>
                     </template>
                      <template v-slot:headerAction>
                       <a class="text-primary float-right" v-b-toggle.collapse-11 role="button">
                         <i class="ri-code-s-slash-line" />
                       </a>
                     </template>
               <template v-slot:body>
                  <b-collapse id="collapse-11" class="mb-2">
               <div class="card">
                <kbd class="bg-dark">
                  <pre class="text-white" id="default-buttons">
                    <code>
&#x3C;div class=&#x22;input-group&#x22;&#x3E;
&#x3C;div class=&#x22;input-group&#x22;&#x3E;
   &#x3C;div class=&#x22;input-group-prepend&#x22;&#x3E;
         &#x3C;span class=&#x22;input-group-text&#x22; id=&#x22;first&#x22;&#x3E;First and last name&#x3C;/span&#x3E;
      &#x3C;/div&#x3E;
      &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22;&#x3E;
      &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22;&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
                     </code></pre>
                     </kbd>
               </div>
               </b-collapse>
                     <div class="input-group">
                        <div class="input-group">
                           <div class="input-group-prepend">
                              <span class="input-group-text" id="first">First and last name</span>
                           </div>
                           <input type="text" class="form-control">
                           <input type="text" class="form-control">
                        </div>
                     </div>
                  </template>
               </card>
               <card>
               <template v-slot:headerTitle>
                        <h4 class="card-title">Multiple addons</h4>
                     </template>
                     <template v-slot:headerAction>
                       <a class="text-primary float-right" v-b-toggle.collapse-12 role="button">
                         <i class="ri-code-s-slash-line" />
                       </a>
                     </template>
               <template v-slot:body>
                  <b-collapse id="collapse-12" class="mb-2">
               <div class="card">
                <kbd class="bg-dark">
                  <pre class="text-white" id="default-buttons">
                    <code>
&#x3C;div class=&#x22;input-group mb-4&#x22;&#x3E;
&#x3C;div class=&#x22;input-group-prepend&#x22;&#x3E;
      &#x3C;span class=&#x22;input-group-text&#x22;&#x3E;$&#x3C;/span&#x3E;
      &#x3C;span class=&#x22;input-group-text&#x22;&#x3E;0.00&#x3C;/span&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; aria-label=&#x22;Amount (to the nearest dollar)&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;p class=&#x22;text-right&#x22;&#x3E;&#x3C;i class=&#x22;las la-long-arrow-alt-right mr-1&#x22;&#x3E;&#x3C;/i&#x3E;Right&#x3C;/p&#x3E;
&#x3C;div class=&#x22;input-group&#x22;&#x3E;
   &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; aria-label=&#x22;Amount (to the nearest dollar)&#x22;&#x3E;
   &#x3C;div class=&#x22;input-group-append&#x22;&#x3E;
      &#x3C;span class=&#x22;input-group-text&#x22;&#x3E;$&#x3C;/span&#x3E;
      &#x3C;span class=&#x22;input-group-text&#x22;&#x3E;0.00&#x3C;/span&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
                     </code></pre>
                     </kbd>
               </div>
               </b-collapse>
                     <p><i class="las la-long-arrow-alt-left mr-1"></i> Left </p>
                     <div class="input-group mb-4">
                        <div class="input-group-prepend">
                           <span class="input-group-text">$</span>
                           <span class="input-group-text">0.00</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                     </div>
                     <p class="text-right"><i class="las la-long-arrow-alt-right mr-1"></i>Right</p>
                     <div class="input-group">
                        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                        <div class="input-group-append">
                           <span class="input-group-text">$</span>
                           <span class="input-group-text">0.00</span>
                        </div>
                     </div>
                  </template>
               </card>
               <card>
               <template v-slot:headerTitle>
                        <h4 class="card-title">Custom select</h4>
                     </template>
                      <template v-slot:headerAction>
                       <a class="text-primary float-right" v-b-toggle.collapse-13 role="button">
                         <i class="ri-code-s-slash-line" />
                       </a>
                     </template>
               <template v-slot:body>
                  <b-collapse id="collapse-13" class="mb-2">
               <div class="card">
                <kbd class="bg-dark">
                  <pre class="text-white" id="default-buttons">
                    <code>
&#x3C;div class=&#x22;input-group mb-4&#x22;&#x3E;
&#x3C;div class=&#x22;input-group-prepend&#x22;&#x3E;
      &#x3C;button class=&#x22;btn btn-primary&#x22; type=&#x22;button&#x22;&#x3E;Button&#x3C;/button&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;&#x22; aria-label=&#x22;&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;p class=&#x22;text-right&#x22;&#x3E;&#x3C;i class=&#x22;las la-long-arrow-alt-right mr-1&#x22;&#x3E;&#x3C;/i&#x3E;Right&#x3C;/p&#x3E;
&#x3C;div class=&#x22;input-group mb-4&#x22;&#x3E;
   &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;Recipient&#x27;s username&#x22;
      aria-label=&#x22;Recipient&#x27;s username&#x22;&#x3E;
   &#x3C;div class=&#x22;input-group-append&#x22;&#x3E;
      &#x3C;button class=&#x22;btn btn-primary&#x22; type=&#x22;button&#x22;&#x3E;Button&#x3C;/button&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;p&#x3E;&#x3C;i class=&#x22;las la-long-arrow-alt-left mr-1&#x22;&#x3E;&#x3C;/i&#x3E; Left &#x3C;/p&#x3E;
&#x3C;div class=&#x22;input-group mb-4&#x22;&#x3E;
   &#x3C;div class=&#x22;input-group-prepend&#x22;&#x3E;
      &#x3C;button class=&#x22;btn btn-outline-primary&#x22; type=&#x22;button&#x22;&#x3E;Button&#x3C;/button&#x3E;
      &#x3C;button class=&#x22;btn btn-outline-primary&#x22; type=&#x22;button&#x22;&#x3E;Button&#x3C;/button&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;&#x22; aria-label=&#x22;&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;p class=&#x22;text-right&#x22;&#x3E;&#x3C;i class=&#x22;las la-long-arrow-alt-right mr-1&#x22;&#x3E;&#x3C;/i&#x3E;Right&#x3C;/p&#x3E;
&#x3C;div class=&#x22;input-group&#x22;&#x3E;
   &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;Recipient&#x27;s username&#x22;
      aria-label=&#x22;Recipient&#x27;s username&#x22;&#x3E;
   &#x3C;div class=&#x22;input-group-append&#x22;&#x3E;
      &#x3C;button class=&#x22;btn btn-outline-primary&#x22; type=&#x22;button&#x22;&#x3E;Button&#x3C;/button&#x3E;
      &#x3C;button class=&#x22;btn btn-outline-primary&#x22; type=&#x22;button&#x22;&#x3E;Button&#x3C;/button&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
                     </code></pre>
                     </kbd>
               </div>
               </b-collapse>
                     <p><i class="las la-long-arrow-alt-left mr-1"></i> Left </p>
                     <div class="input-group mb-4">
                        <div class="input-group-prepend">
                           <button class="btn btn-primary" type="button">Button</button>
                        </div>
                        <input type="text" class="form-control" placeholder="" aria-label="">
                     </div>
                     <p class="text-right"><i class="las la-long-arrow-alt-right mr-1"></i>Right</p>
                     <div class="input-group mb-4">
                        <input type="text" class="form-control" placeholder="Recipient's username"
                           aria-label="Recipient's username">
                        <div class="input-group-append">
                           <button class="btn btn-primary" type="button">Button</button>
                        </div>
                     </div>
                     <p><i class="las la-long-arrow-alt-left mr-1"></i> Left </p>
                     <div class="input-group mb-4">
                        <div class="input-group-prepend">
                           <button class="btn btn-outline-primary" type="button">Button</button>
                           <button class="btn btn-outline-primary" type="button">Button</button>
                        </div>
                        <input type="text" class="form-control" placeholder="" aria-label="">
                     </div>
                     <p class="text-right"><i class="las la-long-arrow-alt-right mr-1"></i>Right</p>
                     <div class="input-group">
                        <input type="text" class="form-control" placeholder="Recipient's username"
                           aria-label="Recipient's username">
                        <div class="input-group-append">
                           <button class="btn btn-outline-primary" type="button">Button</button>
                           <button class="btn btn-outline-primary" type="button">Button</button>
                        </div>
                     </div>
                  </template>
               </card>
               <card>
               <template v-slot:headerTitle>
                        <h4 class="card-title">Custom file input</h4>
                     </template>
                      <template v-slot:headerAction>
                       <a class="text-primary float-right" v-b-toggle.collapse-14 role="button">
                         <i class="ri-code-s-slash-line" />
                       </a>
                     </template>
               <template v-slot:body>
                  <b-collapse id="collapse-14" class="mb-2">
               <div class="card">
                <kbd class="bg-dark">
                  <pre class="text-white" id="default-buttons">
                    <code>
&#x3C;div class=&#x22;input-group mb-4&#x22;&#x3E;
&#x3C;div class=&#x22;input-group-prepend&#x22;&#x3E;
      &#x3C;span class=&#x22;input-group-text&#x22;&#x3E;Upload&#x3C;/span&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;div class=&#x22;custom-file&#x22;&#x3E;
      &#x3C;input type=&#x22;file&#x22; class=&#x22;custom-file-input&#x22; id=&#x22;inputGroupFile01&#x22;&#x3E;
      &#x3C;label class=&#x22;custom-file-label&#x22; for=&#x22;inputGroupFile01&#x22;&#x3E;Choose file&#x3C;/label&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;p class=&#x22;text-right&#x22;&#x3E;&#x3C;i class=&#x22;las la-long-arrow-alt-right mr-1&#x22;&#x3E;&#x3C;/i&#x3E;Right&#x3C;/p&#x3E;
&#x3C;div class=&#x22;input-group mb-4&#x22;&#x3E;
   &#x3C;div class=&#x22;custom-file&#x22;&#x3E;
      &#x3C;input type=&#x22;file&#x22; class=&#x22;custom-file-input&#x22; id=&#x22;inputGroupFile02&#x22;&#x3E;
      &#x3C;label class=&#x22;custom-file-label&#x22; for=&#x22;inputGroupFile02&#x22;&#x3E;Choose file&#x3C;/label&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;div class=&#x22;input-group-append&#x22;&#x3E;
      &#x3C;span class=&#x22;input-group-text&#x22; id=&#x22;upload&#x22;&#x3E;Upload&#x3C;/span&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;p&#x3E;&#x3C;i class=&#x22;las la-long-arrow-alt-left mr-1&#x22;&#x3E;&#x3C;/i&#x3E; Left &#x3C;/p&#x3E;
&#x3C;div class=&#x22;input-group mb-4&#x22;&#x3E;
   &#x3C;div class=&#x22;input-group-prepend&#x22;&#x3E;
      &#x3C;button class=&#x22;btn btn-outline-secondary&#x22; type=&#x22;button&#x22;&#x3E;Button&#x3C;/button&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;div class=&#x22;custom-file&#x22;&#x3E;
      &#x3C;input type=&#x22;file&#x22; class=&#x22;custom-file-input&#x22; id=&#x22;inputGroupFile03&#x22;&#x3E;
      &#x3C;label class=&#x22;custom-file-label&#x22; for=&#x22;inputGroupFile03&#x22;&#x3E;Choose file&#x3C;/label&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;p class=&#x22;text-right&#x22;&#x3E;&#x3C;i class=&#x22;las la-long-arrow-alt-right mr-1&#x22;&#x3E;&#x3C;/i&#x3E;Right&#x3C;/p&#x3E;
&#x3C;div class=&#x22;input-group&#x22;&#x3E;
   &#x3C;div class=&#x22;custom-file&#x22;&#x3E;
      &#x3C;input type=&#x22;file&#x22; class=&#x22;custom-file-input&#x22; id=&#x22;inputGroupFile04&#x22;&#x3E;
      &#x3C;label class=&#x22;custom-file-label&#x22; for=&#x22;inputGroupFile04&#x22;&#x3E;Choose file&#x3C;/label&#x3E;
   &#x3C;/div&#x3E;
   &#x3C;div class=&#x22;input-group-append&#x22;&#x3E;
      &#x3C;button class=&#x22;btn btn-outline-secondary&#x22; type=&#x22;button&#x22;&#x3E;Button&#x3C;/button&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
                     </code></pre>
                     </kbd>
               </div>
               </b-collapse>
                     <p><i class="las la-long-arrow-alt-left mr-1"></i> Left </p>
                     <div class="input-group mb-4">
                        <div class="input-group-prepend">
                           <span class="input-group-text">Upload</span>
                        </div>
                        <div class="custom-file">
                           <input type="file" class="custom-file-input" id="inputGroupFile01" >
                           <label class="custom-file-label" for="inputGroupFile01" style="overflow: hidden;">Choose file</label>
                        </div>
                     </div>
                     <p class="text-right"><i class="las la-long-arrow-alt-right mr-1"></i>Right</p>
                     <div class="input-group mb-4">
                        <div class="custom-file">
                           <input type="file" class="custom-file-input" id="inputGroupFile02">
                           <label class="custom-file-label" for="inputGroupFile02" style="overflow: hidden;">Choose file</label>
                        </div>
                        <div class="input-group-append">
                           <span class="input-group-text" id="upload">Upload</span>
                        </div>
                     </div>
                     <p><i class="las la-long-arrow-alt-left mr-1"></i> Left </p>
                     <div class="input-group mb-4">
                        <div class="input-group-prepend">
                           <button class="btn btn-outline-secondary" type="button">Button</button>
                        </div>
                        <div class="custom-file">
                           <input type="file" class="custom-file-input" id="inputGroupFile03" style="overflow: hidden;">
                           <label class="custom-file-label" for="inputGroupFile03" style="overflow: hidden;">Choose file</label>
                        </div>
                     </div>
                     <p class="text-right"><i class="las la-long-arrow-alt-right mr-1"></i>Right</p>
                     <div class="input-group">
                        <div class="custom-file">
                           <input type="file" class="custom-file-input" id="inputGroupFile04">
                           <label class="custom-file-label" for="inputGroupFile04" style="overflow: hidden;">Choose file</label>
                        </div>
                        <div class="input-group-append">
                           <button class="btn btn-outline-secondary" type="button">Button</button>
                        </div>
                     </div>
               </template>
               </card>
            </b-col>
         </b-row>
      </b-container>
</template>
<script>
export default {
    name:'Inputs'
}
</script>