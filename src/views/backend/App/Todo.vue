<template>
 <div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<div class="card">
				<div class="card-header d-flex justify-content-between border-bottom-0">
					<div class="header-title">
						<h4 class="card-title">Todo</h4> </div>
					<div class="header-action">
						<tab-nav extraclass="btn-group btn-group-sm" role="group">
							<tab-nav-items liClass="btn-group btn-group-sm" widthclass="btn btn-outline-primary" :active="true" ariaControls="board-content" :ariaSelected="true" title="Board" />
							<tab-nav-items liClass="btn-group btn-group-sm" widthclass="btn btn-outline-primary" ariaControls="list-content" title="List" /> </tab-nav>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-12">
			<div id="board-content" class="animate__animated animate__fadeIn active" data-toggle-extra="tab-content">
				<div class="board-content">
					<div class="board-item">
						<div class="card">
							<div class="card-body">
								<h5 class="item-title">Todo</h5> </div>
						</div>
						<draggable v-model="todos" group="people" @start="drag=true" @end="drag=false">
							<div v-for="element in todos" :key="element.id">
								<todolistcard :id='element.id' :extclass="element.class" :title='element.title' /> </div>
						</draggable>
					</div>
					<div class="board-item">
						<div class="card">
							<div class="card-body">
								<h5 class="item-title">In Progress</h5> </div>
						</div>
						<draggable v-model="inprogress" group="people" @start="drag=true" @end="drag=false">
							<div v-for="element in inprogress" :key="element.id">
								<todolistcard :id='element.id' :extclass="element.class" :title='element.title' /> </div>
						</draggable>
					</div>
					<div class="board-item">
						<div class="card">
							<div class="card-body">
								<h5 class="item-title">Review</h5> </div>
						</div>
						<draggable v-model="reviews" group="people" @start="drag=true" @end="drag=false">
							<div v-for="element in reviews" :key="element.id">
								<todolistcard :id='element.id' :extclass="element.class" :title='element.title' /> </div>
						</draggable>
					</div>
					<div class="board-item">
						<div class="card">
							<div class="card-body">
								<h5 class="item-title">Complete</h5> </div>
						</div>
						<draggable v-model="completes" group="people" @start="drag=true" @end="drag=false">
							<div v-for="element in completes" :key="element.id">
								<todolistcard :id='element.id' :extclass="element.class" :title='element.title' /> </div>
						</draggable>
					</div>
				</div>
			</div>
			<div id="list-content" class="animate__animated animate__fadeIn" data-toggle-extra="tab-content">
				<div class="list-content">
					<div class="list-item">
						<div class="card">
							<div class="card-body">
								<h5 class="item-title">Todo</h5> </div>
						</div>
						<draggable v-model="todos" group="people" @start="drag=true" @end="drag=false">
							<todoList v-for="element in todos" :key="element.id" :id='element.id' :extclass="element.class" :title='element.title' /> </draggable>
					</div>
					<div class="list-item">
						<div class="card">
							<div class="card-body">
								<h5 class="item-title">In Progress</h5> </div>
						</div>
						<draggable v-model="inprogress" group="people" @start="drag=true" @end="drag=false">
							<todoList v-for="element in inprogress" :key="element.id" :id='element.id' :extclass="element.class" :title='element.title' /> </draggable>
					</div>
					<div class="list-item">
						<div class="card">
							<div class="card-body">
								<h5 class="item-title">Review</h5> </div>
						</div>
						<draggable v-model="reviews" group="people" @start="drag=true" @end="drag=false">
							<todoList v-for="element in reviews" :key="element.id" :id='element.id' :extclass="element.class" :title='element.title' /> </draggable>
					</div>
					<div class="list-item">
						<div class="card">
							<div class="card-body">
								<h5 class="item-title">Complete</h5> </div>
						</div>
						<draggable v-model="completes" group="people" @start="drag=true" @end="drag=false">
							<todoList v-for="element in completes" :key="element.id" :id='element.id' :extclass="element.class" :title='element.title' /> </draggable>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
import draggable from 'vuedraggable'
import  todolistcard from '../../../components/todo/TodoListcard'
import  todoList from '../../../components/todo/Todolist'
export default {
  name: 'TodoListing',
  components: {
     todolistcard, 
     todoList,
     draggable
  },
  data(){
     return{
        data:true,
        todos:[
           { 
              id:'1', 
              title:'Launch SpaceX',
              class:"border-color-left-blue"
           },
            { 
              id:'2', 
              title:'New Updates',
              class:"border-color-left-red"
           },
           { 
              id:'3', 
              title:'Night mode',
              class:"border-color-left-yellow"
           },
           { 
              id:'4', 
              title:'Use-cases',
              class:"border-color-left-green"
           },
        ],
     inprogress:[
         { 
              id:'5', 
              title:'New Updates',
              class:""
           },
            { 
              id:'6', 
              title:'Launch SpaceX',
              class:"border-color-left-yellow"
           },
           { 
              id:'7', 
              title:'Use-cases',
              class:"border-color-left-red"
           },
           { 
              id:'8', 
              title:'Night mode',
              class:"border-color-left-blue"
           },
     ],
     reviews:[
         { 
              id:'9', 
              title:'Night mode',
              class:"border-color-left-red"
           },
            { 
              id:'10', 
              title:'Launch SpaceX',
              class:"border-color-left-blue"
           },
           { 
              id:'11', 
              title:'Use-cases',
              class:"border-color-left-green"
           },
           { 
              id:'12', 
              title:'New Updates',
              class:""
           },
       
     ], 
     completes:[
         { 
              id:'13', 
              title:'Use-cases',
              class:"border-color-left-red"
           },
            { 
              id:'14', 
              title:'New Updates',
              class:"border-color-left-red"
           },
           { 
              id:'15', 
              title:'Night mode',
              class:""
           },
           { 
              id:'16', 
              title:'Launch SpaceX',
              class:""
           },
     ]
     }
  },
}
</script>

