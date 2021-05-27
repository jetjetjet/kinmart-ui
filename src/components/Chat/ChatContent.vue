<template>
   <div :class="`chat-content animate__animated animate__fadeIn  ${item.isActive ? ' active' : ''}`" data-toggle-extra="tab-content" :id="'user-content-'+item.id">
	<div class="card">
		<div :class="'right-sidenav '+ rightActive" id="first-sidenav">
			<div class="d-flex">
				<button type="button" @click="rightclose()" class="btn btn-sm" data-extra-dismiss="right-sidenav"> <i class="las la-times"></i> </button>
			</div>
			<div class="chat-profile mx-auto">
				<div class="avatar avatar-70 avatar-borderd avatar-rounded mx-auto" data-toggel-extra="right-sidenav" data-target="#first-sidenav"> <img :src="item.image" alt="users" class="img-fluid"> </div>
				<h4 class="mb-2">{{ item.name }}</h4>
				<h6 class="mb-2">{{ item.about }}</h6> </div>
			<div class="chat-detail">
				<div class="row">
					<div class="col-6 col-md-6 title">Nick Name:</div>
					<div class="col-6 col-md-6 text-right">{{ item.nickName }}</div>
				</div>
				<hr>
				<div class="row">
					<div class="col-6 col-md-6 title">Tel:</div>
					<div class="col-6 col-md-6 text-right">{{ item.contact }}</div>
				</div>
				<hr>
				<div class="row">
					<div class="col-6 col-md-6 title">Date Of Birth:</div>
					<div class="col-6 col-md-6 text-right">{{ item.dob }}</div>
				</div>
				<hr>
				<div class="row">
					<div class="col-6 col-md-6 title">Gender:</div>
					<div class="col-6 col-md-6 text-right">{{ item.gender }}</div>
				</div>
				<hr>
				<div class="row">
					<div class="col-6 col-md-6 title">Language:</div>
					<div class="col-6 col-md-6 text-right">{{ item.lang }}</div>
				</div>
			</div>
		</div>
		<div class="card-header chat-content-header">
			<div class="d-flex align-items-center">
				<button class="btn text-primary bg-primary-light btn-sm d-block d-lg-none mr-2" data-toggel-extra="side-nav" data-expand-extra=".chat-left-wrapper"> <i class="las la-arrow-right"></i> </button>
				<div class="rightside avatar-50 avatar-borderd avatar-rounded" @click="rightsidebar()" data-toggel-extra="right-sidenav" data-target="#first-sidenav"> <img :src="item.image" alt="users" class="img-fluid"> </div>
				<div class="chat-title">
					<h5>{{ item.name }}</h5> <small v-if="item.status == 'success'">Online</small> <small v-else-if="item.status == 'warning'">Away</small> <small v-else-if="item.status == 'danger'">Offline</small> <small v-else>DND</small> </div>
			</div>
			<div class="chat-action">
				<div class="nav" :id="'user-'+item.id+'-action'" role="tablist">
					<button class="btn text-primary bg-primary-light btn-sm" :id="'user-'+item.id+'-video-call-tab'">
						<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /> </svg>
					</button>
					<button class="btn text-primary bg-primary-light btn-sm ml-2" :id="'user-'+item.id+'-call-tab'">
						<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /> </svg>
					</button>
				</div>
			</div>
		</div>
		<div class="card-body msg-content" :id="'user-'+item.id+'-chat-content'">
			<div class="msg-list">
				<div v-for="(chat,index) in item.messages" :key="index" :class="`single-msg  ${chat.current ? 'user' : ''}`">
					<div :class="`single-msg-shap  ${chat.current ? 'triangle-topright ' : 'triangle-topleft '}`"> </div>
					<div :class="`single-msg-content  ${chat.current ? 'user' : ''}`">
						<div class="msg-detail"> <span>{{chat.msg}}</span> </div>
						<div class="msg-action"> <span>{{chat.time}}</span> </div>
					</div>
				</div>
			</div>
		</div>
		<div class="card-footer px-3 py-3">
			<form>
				<div class="input-group input-group-sm">
					<input type="text" class="form-control" :id="'chat-input'+item.id" placeholder="Enter here..." aria-label="Recipient's username" aria-describedby="basic-addon2">
					<div class="input-group-append">
						<button type="button" class="input-group-text chat-icon" :id="'basic-addon11'+item.id" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="las la-smile"></i> </button>
						<div class="dropdown-menu p-0 border-0" aria-labelledby="basic-addon1"> </div>
					</div>
					<div class="input-group-append"> <span class="input-group-text chat-icon" id="basic-addon2">
                        <i class="lab la-telegram-plane"></i>
                        </span> </div>
				</div>
			</form>
		</div>
	</div>
</div>
</template>
<script>
export default {
    name:'ChatContent',
    data(){
        return{ 
            rightActive:''
        }
    },
    props: {
        item:{type: Object}
    },
    methods: {
        rightsidebar(){
            if(this.rightActive==''){
                this.rightActive= ' active';
            }
        },
        rightclose(){
            if(this.rightActive==' active'){
                this.rightActive='';
            }
        }
    }
}
</script>