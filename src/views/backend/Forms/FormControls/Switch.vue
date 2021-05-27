<template>
   <b-container fluid="">
      <b-row>
         <b-col sm="12" lg="12">
            <card>
               <template v-slot:headerTitle>
                        <h4 class="card-title">Basic Switch</h4>
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
 &#x3C;div class=&#x22;custom-control custom-switch custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input&#x22; id=&#x22;customSwitch2&#x22; checked=&#x22;&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customSwitch2&#x22;&#x3E;Active Switch&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-switch custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input&#x22; id=&#x22;customSwitch1&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customSwitch1&#x22;&#x3E;Inactive Switch &#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-switch custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input&#x22; disabled checked=&#x22;&#x22; id=&#x22;customSwitch3&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customSwitch3&#x22;&#x3E;Disabled Active Switch&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-switch custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input&#x22; disabled id=&#x22;customSwitch4&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customSwitch4&#x22;&#x3E;Disabled Inactive Switch&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
                     </code></pre>
                     </kbd>
               </div>
               </b-collapse>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam
                        nibh finibus leo</p>
                     <div class="custom-control custom-switch custom-control-inline">
                        <input type="checkbox" class="custom-control-input" id="customSwitch2" checked="">
                        <label class="custom-control-label" for="customSwitch2">Active Switch</label>
                     </div>
                     <div class="custom-control custom-switch custom-control-inline">
                        <input type="checkbox" class="custom-control-input" id="customSwitch1">
                        <label class="custom-control-label" for="customSwitch1">Inactive Switch </label>
                     </div>
                     <div class="custom-control custom-switch custom-control-inline">
                        <input type="checkbox" class="custom-control-input" disabled checked="" id="customSwitch3">
                        <label class="custom-control-label" for="customSwitch3">Disabled Active Switch</label>
                     </div>
                     <div class="custom-control custom-switch custom-control-inline">
                        <input type="checkbox" class="custom-control-input" disabled id="customSwitch4">
                        <label class="custom-control-label" for="customSwitch4">Disabled Inactive Switch</label>
                     </div>
               </template>
            </card>
            <card>
               <template v-slot:headerTitle>
                        <h4 class="card-title">Text</h4>
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
 &#x3C;div class=&#x22;custom-control custom-switch custom-switch-text custom-control-inline&#x22;&#x3E;
&#x3C;div class=&#x22;custom-switch-inner&#x22;&#x3E;
   &#x3C;p class=&#x22;mb-0&#x22;&#x3E; Primary &#x3C;/p&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input&#x22; id=&#x22;customSwitch-11&#x22; checked=&#x22;&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customSwitch-11&#x22; data-on-label=&#x22;On&#x22; data-off-label=&#x22;Off&#x22;&#x3E;
   &#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-switch custom-switch-text custom-switch-color custom-control-inline&#x22;&#x3E;
&#x3C;div class=&#x22;custom-switch-inner&#x22;&#x3E;
   &#x3C;p class=&#x22;mb-0&#x22;&#x3E; Success &#x3C;/p&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input bg-success&#x22; id=&#x22;customSwitch-22&#x22; checked=&#x22;&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customSwitch-22&#x22; data-on-label=&#x22;Tr&#x22; data-off-label=&#x22;Fal&#x22;&#x3E;
   &#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-switch custom-switch-text custom-switch-color custom-control-inline&#x22;&#x3E;
&#x3C;div class=&#x22;custom-switch-inner&#x22;&#x3E;
   &#x3C;p class=&#x22;mb-0&#x22;&#x3E; Danger &#x3C;/p&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input bg-danger&#x22; id=&#x22;customSwitch-33&#x22; checked=&#x22;&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customSwitch-33&#x22; data-on-label=&#x22;Yes&#x22; data-off-label=&#x22;No&#x22;&#x3E;
   &#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
                     </code></pre>
                     </kbd>
               </div>
               </b-collapse>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam
                        nibh finibus leo</p>
                     <div class="custom-control custom-switch custom-switch-text custom-control-inline">
                        <div class="custom-switch-inner">
                           <p class="mb-0"> Primary </p>
                           <input type="checkbox" class="custom-control-input" id="customSwitch-11" checked="">
                           <label class="custom-control-label" for="customSwitch-11" data-on-label="On" data-off-label="Off">
                           </label>
                        </div>
                     </div>
                     <div class="custom-control custom-switch custom-switch-text custom-switch-color custom-control-inline">
                        <div class="custom-switch-inner">
                           <p class="mb-0"> Success </p>
                           <input type="checkbox" class="custom-control-input bg-success" id="customSwitch-22" checked="">
                           <label class="custom-control-label" for="customSwitch-22" data-on-label="Tr" data-off-label="Fal">
                           </label>
                        </div>
                     </div>
                     <div class="custom-control custom-switch custom-switch-text custom-switch-color custom-control-inline">
                        <div class="custom-switch-inner">
                           <p class="mb-0"> Danger </p>
                           <input type="checkbox" class="custom-control-input bg-danger" id="customSwitch-33" checked="">
                           <label class="custom-control-label" for="customSwitch-33" data-on-label="Yes" data-off-label="No">
                           </label>
                        </div>
                     </div>
               </template>
            </card>
         </b-col>
         <b-col sm="12" lg="12">
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
   &#x3C;div class=&#x22;custom-control custom-switch custom-switch-color custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input bg-primary&#x22; id=&#x22;customSwitch01&#x22; checked=&#x22;&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customSwitch01&#x22;&#x3E;Primary&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-switch custom-switch-color custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input bg-success&#x22; id=&#x22;customSwitch02&#x22; checked=&#x22;&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customSwitch02&#x22;&#x3E;Success&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-switch custom-switch-color custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input bg-danger&#x22; id=&#x22;customSwitch03&#x22; checked=&#x22;&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customSwitch03&#x22;&#x3E;Danger&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-switch custom-switch-color custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input bg-waring&#x22; id=&#x22;customSwitch04&#x22; checked=&#x22;&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customSwitch04&#x22;&#x3E;Waring&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-switch custom-switch-color custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input bg-dark&#x22; id=&#x22;customSwitch05&#x22; checked=&#x22;&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customSwitch05&#x22;&#x3E;Dark&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-switch custom-switch-color custom-control-inline&#x22;&#x3E;
   &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input bg-info&#x22; id=&#x22;customSwitch06&#x22; checked=&#x22;&#x22;&#x3E;
   &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customSwitch06&#x22;&#x3E;Info&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
                     </code></pre>
                     </kbd>
               </div>
               </b-collapse>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam
                        nibh finibus leo</p>
                     <div class="custom-control custom-switch custom-switch-color custom-control-inline">
                        <input type="checkbox" class="custom-control-input bg-primary" id="customSwitch01" checked="">
                        <label class="custom-control-label" for="customSwitch01">Primary</label>
                     </div>
                     <div class="custom-control custom-switch custom-switch-color custom-control-inline">
                        <input type="checkbox" class="custom-control-input bg-success" id="customSwitch02" checked="">
                        <label class="custom-control-label" for="customSwitch02">Success</label>
                     </div>
                     <div class="custom-control custom-switch custom-switch-color custom-control-inline">
                        <input type="checkbox" class="custom-control-input bg-danger" id="customSwitch03" checked="">
                        <label class="custom-control-label" for="customSwitch03">Danger</label>
                     </div>
                     <div class="custom-control custom-switch custom-switch-color custom-control-inline">
                        <input type="checkbox" class="custom-control-input bg-waring" id="customSwitch04" checked="">
                        <label class="custom-control-label" for="customSwitch04">Waring</label>
                     </div>
                     <div class="custom-control custom-switch custom-switch-color custom-control-inline">
                        <input type="checkbox" class="custom-control-input bg-dark" id="customSwitch05" checked="">
                        <label class="custom-control-label" for="customSwitch05">Dark</label>
                     </div>
                     <div class="custom-control custom-switch custom-switch-color custom-control-inline">
                        <input type="checkbox" class="custom-control-input bg-info" id="customSwitch06" checked="">
                        <label class="custom-control-label" for="customSwitch06">Info</label>
                     </div>
               </template>
            </card>
            <card>
               <template v-slot:headerTitle>
                        <h4 class="card-title">Icon</h4>
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
&#x3C;div class=&#x22;custom-control custom-switch custom-switch-icon custom-control-inline&#x22;&#x3E;
   &#x3C;div class=&#x22;custom-switch-inner&#x22;&#x3E;
      &#x3C;p class=&#x22;mb-0&#x22;&#x3E; Primary &#x3C;/p&#x3E;
      &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input&#x22; id=&#x22;customSwitch-1&#x22; checked=&#x22;&#x22;&#x3E;
      &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customSwitch-1&#x22;&#x3E;
         &#x3C;span class=&#x22;switch-icon-left&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-check&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/span&#x3E;
         &#x3C;span class=&#x22;switch-icon-right&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-check&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/span&#x3E;
      &#x3C;/label&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline&#x22;&#x3E;
   &#x3C;div class=&#x22;custom-switch-inner&#x22;&#x3E;
      &#x3C;p class=&#x22;mb-0&#x22;&#x3E; Success &#x3C;/p&#x3E;
      &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input bg-success&#x22; id=&#x22;customSwitch-2&#x22; checked=&#x22;&#x22;&#x3E;
      &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customSwitch-2&#x22;&#x3E;
         &#x3C;span class=&#x22;switch-icon-left&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-check&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/span&#x3E;
         &#x3C;span class=&#x22;switch-icon-right&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-check&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/span&#x3E;
      &#x3C;/label&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline&#x22;&#x3E;
   &#x3C;div class=&#x22;custom-switch-inner&#x22;&#x3E;
      &#x3C;p class=&#x22;mb-0&#x22;&#x3E; Danger &#x3C;/p&#x3E;
      &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input bg-danger&#x22; id=&#x22;customSwitch-3&#x22; checked=&#x22;&#x22;&#x3E;
      &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customSwitch-3&#x22;&#x3E;
         &#x3C;span class=&#x22;switch-icon-left&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-times&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/span&#x3E;
         &#x3C;span class=&#x22;switch-icon-right&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-times&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/span&#x3E;
      &#x3C;/label&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline&#x22;&#x3E;
   &#x3C;div class=&#x22;custom-switch-inner&#x22;&#x3E;
      &#x3C;p class=&#x22;mb-0&#x22;&#x3E; Warning &#x3C;/p&#x3E;
      &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input bg-warning&#x22; id=&#x22;customSwitch-4&#x22; checked=&#x22;&#x22;&#x3E;
      &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customSwitch-4&#x22;&#x3E;
         &#x3C;span class=&#x22;switch-icon-left&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-exclamation-triangle&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/span&#x3E;
         &#x3C;span class=&#x22;switch-icon-right&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-exclamation-triangle&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/span&#x3E;
      &#x3C;/label&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline&#x22;&#x3E;
   &#x3C;div class=&#x22;custom-switch-inner&#x22;&#x3E;
      &#x3C;p class=&#x22;mb-0&#x22;&#x3E; Dark &#x3C;/p&#x3E;
      &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input bg-dark&#x22; id=&#x22;customSwitch-5&#x22; checked=&#x22;&#x22;&#x3E;
      &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customSwitch-5&#x22;&#x3E;
         &#x3C;span class=&#x22;switch-icon-left&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-thumb-tack&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/span&#x3E;
         &#x3C;span class=&#x22;switch-icon-right&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-thumb-tack&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/span&#x3E;
      &#x3C;/label&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline&#x22;&#x3E;
   &#x3C;div class=&#x22;custom-switch-inner&#x22;&#x3E;
      &#x3C;p class=&#x22;mb-0&#x22;&#x3E; Info &#x3C;/p&#x3E;
      &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;custom-control-input bg-info&#x22; id=&#x22;customSwitch-6&#x22; checked=&#x22;&#x22;&#x3E;
      &#x3C;label class=&#x22;custom-control-label&#x22; for=&#x22;customSwitch-6&#x22;&#x3E;
         &#x3C;span class=&#x22;switch-icon-left&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-info&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/span&#x3E;
         &#x3C;span class=&#x22;switch-icon-right&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-info&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/span&#x3E;
      &#x3C;/label&#x3E;
   &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
                     </code></pre>
                     </kbd>
               </div>
               </b-collapse>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam
                        nibh finibus leo</p>
                     <div class="custom-control custom-switch custom-switch-icon custom-control-inline">
                        <div class="custom-switch-inner">
                           <p class="mb-0"> Primary </p>
                           <input type="checkbox" class="custom-control-input" id="customSwitch-1" checked="">
                           <label class="custom-control-label" for="customSwitch-1">
                              <span class="switch-icon-left"><i class="fa fa-check"></i></span>
                              <span class="switch-icon-right"><i class="fa fa-check"></i></span>
                           </label>
                        </div>
                     </div>
                     <div class="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
                        <div class="custom-switch-inner">
                           <p class="mb-0"> Success </p>
                           <input type="checkbox" class="custom-control-input bg-success" id="customSwitch-2" checked="">
                           <label class="custom-control-label" for="customSwitch-2">
                              <span class="switch-icon-left"><i class="fa fa-check"></i></span>
                              <span class="switch-icon-right"><i class="fa fa-check"></i></span>
                           </label>
                        </div>
                     </div>
                     <div class="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
                        <div class="custom-switch-inner">
                           <p class="mb-0"> Danger </p>
                           <input type="checkbox" class="custom-control-input bg-danger" id="customSwitch-3" checked="">
                           <label class="custom-control-label" for="customSwitch-3">
                              <span class="switch-icon-left"><i class="fa fa-times"></i></span>
                              <span class="switch-icon-right"><i class="fa fa-times"></i></span>
                           </label>
                        </div>
                     </div>
                     <div class="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
                        <div class="custom-switch-inner">
                           <p class="mb-0"> Warning </p>
                           <input type="checkbox" class="custom-control-input bg-warning" id="customSwitch-4" checked="">
                           <label class="custom-control-label" for="customSwitch-4">
                              <span class="switch-icon-left"><i class="fa fa-exclamation-triangle"></i></span>
                              <span class="switch-icon-right"><i class="fa fa-exclamation-triangle"></i></span>
                           </label>
                        </div>
                     </div>
                     <div class="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
                        <div class="custom-switch-inner">
                           <p class="mb-0"> Dark </p>
                           <input type="checkbox" class="custom-control-input bg-dark" id="customSwitch-5" checked="">
                           <label class="custom-control-label" for="customSwitch-5">
                              <span class="switch-icon-left"><i class="fa fa-thumb-tack"></i></span>
                              <span class="switch-icon-right"><i class="fa fa-thumb-tack"></i></span>
                           </label>
                        </div>
                     </div>
                     <div class="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
                        <div class="custom-switch-inner">
                           <p class="mb-0"> Info </p>
                           <input type="checkbox" class="custom-control-input bg-info" id="customSwitch-6" checked="">
                           <label class="custom-control-label" for="customSwitch-6">
                              <span class="switch-icon-left"><i class="fa fa-info"></i></span>
                              <span class="switch-icon-right"><i class="fa fa-info"></i></span>
                           </label>
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
    name:'Switch1'
}
</script>