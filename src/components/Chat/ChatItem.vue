<template>
 <li class="simple-item hover" @click="clicked">
	<div class="img-container">
		<div class="avatar avatar-60"> <img :src="item.image" :alt="item.image" class="img-fluid avatar-borderd avatar-rounded "> <span class="avatar-status">
        <i class="ri-checkbox-blank-circle-fill" :class="`text-${item.status}`"/>
      </span> </div>
	</div>
	<div class="simple-item-body">
		<div class="simple-item-title">
			<h5 class="title-text">{{ item.name }}</h5>
			<div class="simple-item-time"> <span>{{item.dateTime}}</span> </div>
		</div>
		<div class="simple-item-content"> <span class="simple-item-text short">
        {{item.msg}}
      </span>
			<b-dropdown id="dropdownMenuButton1" no-caret right variant="none p-0">
				<template v-slot:button-content>
					<button class="btn btn-link " type="button" :id="'chat-dropdown-'+item.id"> <i class="las la-caret-down"></i> </button>
				</template>
				<b-dropdown-item>{{ ('Move Archive') }}</b-dropdown-item>
				<b-dropdown-item>{{ ('Favourite') }}</b-dropdown-item>
				<b-dropdown-item>{{ ('Delete') }}</b-dropdown-item>
			</b-dropdown>
		</div>
	</div>
</li>
</template>
<script>
export default {
  name: 'ChatItem',
  props: {
    item: { type: Object }
  },
  methods: {
    clicked (e) {
      this.$emit('click',e)
    }
  }
}
</script>
