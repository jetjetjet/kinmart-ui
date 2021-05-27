<template>
  <b-container fluid>
	<b-row>
		<div class="col-lg-4 chat-left-wrapper">
			<div class="chat-list">
				<div class="card">
					<div class="card-header">
						<div class="d-flex justify-content-between align-items-center mb-2">
							<h4 class="card-title">Messages</h4>
							<button class="btn text-primary bg-primary-light btn-sm d-block d-lg-none" data-toggel-extra="side-nav-close" data-expand-extra=".chat-left-wrapper"> <i class="las la-arrow-left"></i> </button>
						</div>
						<div class="form-group mb-0">
							<div class="input-group input-group-sm">
								<div class="input-group-prepend"> <span class="input-group-text" id="basic-addon1">
                            <svg class="svg-icon text-primary" id="search" width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          </span> </div>
								<input type="text" class="form-control form-control-sm" placeholder="Enter name" aria-label="Username" aria-describedby="basic-addon1">
								<div class="input-group-append d-none"> <span class="input-group-text">
                            <div class="spinner-border spinner-border-sm" role="status">
                                <span class="sr-only">Loading...</span> </div>
								</span>
							</div>
						</div>
					</div>
				</div>
				<nav>
					<ul class="nav nav-tabs justify-content-around" id="nav-tab" role="tablist">
						<li class="nav-item active"> <a class="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Recent</a> </li>
						<li class="nav-item"> <a class="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Archive</a> </li>
						<li class="nav-item"> <a class="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">New</a> </li>
					</ul>
				</nav>
				<div class="card-body item-list">
					<ul id="chat-list" class="item-container" role="custom-tab">
						<template v-for="(item,index) in chatList">
							<chatItem :item="item" :key="index" @click="activeChat(index)" /> </template>
					</ul>
				</div>
			</div>
		</div>
		</div>
		<div class="col-lg-8 chat-right-wrapper">
			<template v-for="(item,index) in chatList">
				<chatContent :item="item" :key="index" /> </template>
		</div>
	</b-row>
</b-container>
</template>
<script>
import { core } from '../../../config/pluginInit'
import ChatItem from '../../../components/Chat/ChatItem'
import ChatContent from '../../../components/Chat/ChatContent'
export default {
  name: 'Index',
  components: { 
                ChatItem,
                ChatContent
                },
  mounted () {
  },
  computed: {
    filteredList () {
      return this.usersList.filter(item => {
        return item.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  props:{
    activeClass:{type:String,default:'active'},
  },
  data () {
    return {
      search: '',
      chatList: [{
        id: '1',
        name: 'Joan Duo',
        dateTime: 'Today',
        msg: "I have share some media you can enjoy.",
        image: require('../../../assets/images/user/1.jpg'),
        nickName: "Joan",
        about: "Developer",
        gender: "Male",
        dob: "1 June 1997",
        lang: "English",
        contact: "0123456789",
        status: "warning",
        isActive: true,
        messages: [{
            id: '',
            user: '',
            msg: 'Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            img: '',
            time: '04:00',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            img: '',
            time: '04:15',
            current: true
        },
        {
            id: '',
            user: '',
            msg: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            img: '',
            time: '04:15',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            img: '',
            time: '04:15',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            img: '',
            time: '04:15',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            img: '',
            time: '04:15',
            current: true
        },
        {
            id: '',
            user: '',
            msg: 'Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            img: '',
            time: '04:15',
            current: true
        }
        ]
    },
    {
        id: '2',
        name: 'Jenifer Markus',
        dateTime: 'Yesterday',
        msg: "What are you doing?",
        image: require('../../../assets/images/user/2.jpg'),
        nickName: "Jenifer",
        about: "Designer",
        gender: "Female",
        dob: "8 July 1997",
        lang: "English",
        contact: "0678912345",
        status: "success",
        isActive: false,
        messages: [{
            id: '',
            user: '',
            msg: 'Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            img: '',
            time: '04:00',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            img: '',
            time: '04:15',
            current: true
        },
        {
            id: '',
            user: '',
            msg: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            img: '',
            time: '04:15',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            img: '',
            time: '04:15',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            img: '',
            time: '04:15',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            img: '',
            time: '04:15',
            current: true
        },
        {
            id: '',
            user: '',
            msg: 'Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            img: '',
            time: '04:15',
            current: true
        }
        ]
    },
    {
        id: '3',
        name: 'Maria Daf',
        dateTime: '2 Days Ago',
        msg: "You have time for for my task?",
        image: require('../../../assets/images/user/3.jpg'),
        nickName: "Maria",
        about: "Planner",
        gender: "Female",
        dob: "16 August 1997",
        lang: "English",
        contact: "0345671289",
        status: 'success',
        isActive: false,
        messages: [{
            id: '',
            user: '',
            msg: 'Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            img: '',
            time: '04:00',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            img: '',
            time: '04:15',
            current: true
        },
        {
            id: '',
            user: '',
            msg: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            img: '',
            time: '04:15',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            img: '',
            time: '04:15',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            img: '',
            time: '04:15',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            img: '',
            time: '04:15',
            current: true
        },
        {
            id: '',
            user: '',
            msg: 'Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            img: '',
            time: '04:15',
            current: true
        }
        ]
    },
    {
        id: '4',
        name: 'Joasaf Zurk',
        dateTime: '10/01/2021',
        msg: "How are you?",
        image: require('../../../assets/images/user/4.jpg'),
        nickName: "Joasaf",
        about: "Content Writer",
        gender: "Male",
        dob: "22 December 1997",
        lang: "English",
        contact: "0678945123",
        status: 'success',
        isActive: false,
        messages: [{
            id: '',
            user: '',
            msg: 'Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            img: '',
            time: '04:00',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            img: '',
            time: '04:15',
            current: true
        },
        {
            id: '',
            user: '',
            msg: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            img: '',
            time: '04:15',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            img: '',
            time: '04:15',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            img: '',
            time: '04:15',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            img: '',
            time: '04:15',
            current: true
        },
        {
            id: '',
            user: '',
            msg: 'Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            img: '',
            time: '04:15',
            current: true
        }
        ]
    },
    {
        id: '5',
        name: 'Rock Musta',
        dateTime: '11/05/2020',
        msg: "I want some teachnic for fast code can you help?",
        image: require('../../../assets/images/user/5.jpg'),
        nickName: "Rock",
        about: "Developer",
        gender: "Male",
        dob: "26 June 1997",
        lang: "English",
        contact: "0893456712",
        status: 'danger',
        isActive: false,
        messages: [{
            id: '',
            user: '',
            msg: 'Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            img: '',
            time: '04:00',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            img: '',
            time: '04:15',
            current: true
        },
        {
            id: '',
            user: '',
            msg: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            img: '',
            time: '04:15',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            img: '',
            time: '04:15',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            img: '',
            time: '04:15',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            img: '',
            time: '04:15',
            current: true
        },
        {
            id: '',
            user: '',
            msg: 'Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            img: '',
            time: '04:15',
            current: true
        }
        ]
    },
    {
        id: '6',
        name: 'Joan Duo',
        dateTime: 'Today',
        msg: "I have share some media you can enjoy.",
        image: require('../../../assets/images/user/6.jpg'),
        nickName: "Joan",
        about: "Developer",
        gender: "Male",
        dob: "1 June 1997",
        lang: "English",
        contact: "0123456789",
        status: 'success',
        isActive: false,
        messages: [{
            id: '',
            user: '',
            msg: 'Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            img: '',
            time: '04:00',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            img: '',
            time: '04:15',
            current: true
        },
        {
            id: '',
            user: '',
            msg: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            img: '',
            time: '04:15',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            img: '',
            time: '04:15',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            img: '',
            time: '04:15',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            img: '',
            time: '04:15',
            current: true
        },
        {
            id: '',
            user: '',
            msg: 'Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            img: '',
            time: '04:15',
            current: true
        }
        ]
    },
    {
        id: '7',
        name: 'Jenifer Markus',
        dateTime: 'Yesterday',
        msg: "What are you doing?",
        image: require('../../../assets/images/user/7.jpg'),
        nickName: "Jenifer",
        about: "Designer",
        gender: "Female",
        dob: "8 July 1997",
        lang: "English",
        contact: "0678912345",
        status: 'success',
        isActive: false,
        messages: [{
            id: '',
            user: '',
            msg: 'Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            img: '',
            time: '04:00',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            img: '',
            time: '04:15',
            current: true
        },
        {
            id: '',
            user: '',
            msg: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            img: '',
            time: '04:15',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            img: '',
            time: '04:15',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            img: '',
            time: '04:15',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            img: '',
            time: '04:15',
            current: true
        },
        {
            id: '',
            user: '',
            msg: 'Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            img: '',
            time: '04:15',
            current: true
        }
        ]
    },
    {
        id: '8',
        name: 'Maria Daf',
        dateTime: '2 Days Ago',
        msg: "You have time for for my task?",
        image: require('../../../assets/images/user/1.jpg'),
        nickName: "Maria",
        about: "Planner",
        gender: "Female",
        dob: "16 August 1997",
        lang: "English",
        contact: "0345671289",
        status: 'success',
        isActive: false,
        messages: [{
            id: '',
            user: '',
            msg: 'Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            img: '',
            time: '04:00',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            img: '',
            time: '04:15',
            current: true
        },
        {
            id: '',
            user: '',
            msg: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            img: '',
            time: '04:15',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            img: '',
            time: '04:15',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            img: '',
            time: '04:15',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            img: '',
            time: '04:15',
            current: true
        },
        {
            id: '',
            user: '',
            msg: 'Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            img: '',
            time: '04:15',
            current: true
        }
        ]
    },
    {
        id: '9',
        name: 'Joasaf Zurk',
        dateTime: '10/01/2021',
        msg: "How are you?",
        image: require('../../../assets/images/user/2.jpg'),
        nickName: "Joasaf",
        about: "Content Writer",
        gender: "Male",
        dob: "22 December 1997",
        lang: "English",
        contact: "0678945123",
        status: 'success',
        isActive: false,
        messages: [{
            id: '',
            user: '',
            msg: 'Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            img: '',
            time: '04:00',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            img: '',
            time: '04:15',
            current: true
        },
        {
            id: '',
            user: '',
            msg: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            img: '',
            time: '04:15',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            img: '',
            time: '04:15',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            img: '',
            time: '04:15',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            img: '',
            time: '04:15',
            current: true
        },
        {
            id: '',
            user: '',
            msg: 'Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            img: '',
            time: '04:15',
            current: true
        }
        ]
    },
    {
        id: '10',
        name: 'Rock Musta',
        dateTime: '11/05/2020',
        msg: "I want some teachnic for fast code can you help?",
        image: require('../../../assets/images/user/3.jpg'),
        nickName: "Rock",
        about: "Developer",
        gender: "Male",
        dob: "26 June 1997",
        lang: "English",
        contact: "0893456712",
        status: 'primary',
        isActive: false,
        messages: [{
            id: '',
            user: '',
            msg: 'Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            img: '',
            time: '04:00',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            img: '',
            time: '04:15',
            current: true
        },
        {
            id: '',
            user: '',
            msg: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            img: '',
            time: '04:15',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            img: '',
            time: '04:15',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            img: '',
            time: '04:15',
            current: false
        },
        {
            id: '',
            user: '',
            msg: 'Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            img: '',
            time: '04:15',
            current: true
        },
        {
            id: '',
            user: '',
            msg: 'Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            img: '',
            time: '04:15',
            current: true
        }
        ]
    }
]
    }
  },
  methods: {
    checkUser (item, type) {
      let user = this.usersList.find(user => user.id === item)
      let final
      if (user !== undefined) {
        switch (type) {
          case 'name':
            final = user.name
            break
          case 'image':
            final = user.image
            break
          case 'role':
            final = user.role
            break
        }
        return final
      }
      return require('../../../assets/images/user/5.jpg')
    },
    generate () {
       this.channel = core.random(24)
    },
    copyText () {
      core.Snackbar({ text: 'Copied' })
    },
    activeChat(index) {
      this.chatList.find((item,index) => {
        this.chatList[index].isActive = false
      })
      this.chatList[index].isActive = true
    }
  }
}
</script>