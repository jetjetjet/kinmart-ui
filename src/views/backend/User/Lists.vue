<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="card card-block card-stretch card-height">
          <div class="card-header d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title mb-0">User List</h4>
            </div>
            <a href="#" @click="modalCreate()" class="btn btn-primary" data-toggle="modal" data-target="#addContact">Add New</a>
          </div>
          <div class="card-body">
            <vue-good-table
              :columns="columns"
              :rows="rows"
            >
              <template slot="table-row" slot-scope="props">
                <span v-if="props.column.field == 'action'">
                  <b-button size="sm" @click="modalEdit(props)" variant="primary" class="mr-2" title="Edit">
                    <i class="dripicons dripicons-pencil"></i>
                  </b-button>
                  <b-button size="sm" variant="danger" class="mr-2" title="Hapus">
                    <i class="dripicons dripicons-trash"></i>
                  </b-button>
                </span>
                <span v-else>
                  {{props.formattedRow[props.column.field]}}
                </span>
              </template>
            </vue-good-table>
          </div>
          <b-modal :no-close-on-backdrop="false" id="modalJabatan">
            <template #modal-title>
              {{ modalTitle }}
            </template>
            <div>
              <form>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label>Nama Jabatan</label>
                      <input class="form-control" type="hidden" name="id" v-model="form.id">
                      <input class="form-control" type="text"  name="username" v-model="form.nama_jabatan" placeholder="asep">
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label>Deskripsi Jabatan</label>
                      <input class="form-control" type="text"  name="username" v-model="form.deskripsi_jabatan" placeholder="asep">
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <template #modal-footer="{ cancel }">
              <b-button variant="danger" @click="cancel()">
                Batal
              </b-button>
              <b-button variant="primary" @click="modalSave()">
                Simpan
              </b-button>
            </template>
          </b-modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'vue-good-table/dist/vue-good-table.css'
  import { VueGoodTable } from 'vue-good-table';
  import { getJabatanLists, postJabatan } from '../../../store/modules/jabatan'

  export default {
    name:'UserList',
    data () {
      return {
        columns:[
          {
            label: 'id',
            field: 'id',
            hidden: true
          }, {
            label: 'Nama Jabatan',
            field: 'nama_jabatan'
          }, {
            label: 'Deskripsi Jabatan',
            field: 'deskripsi_jabatan'
          }, {
            label: '',
            field: 'action'
          }
        ],
        rows: [],
        form:{
          nama_jabatan: null,
          deskripsi_jabatan: null
        }
      }
    },
    methods: {
      refreshLists(){
        getJabatanLists().then(data => {
          this.rows = data.data
        })
      },
      modalCreate(){
        this.modalTitle = 'Tambah Jabatan'
        this.form.nama_jabatan = null
        this.form.deskripsi_jabatan = null
        this.$bvModal.show('modalJabatan')
      },
      modalEdit(val){
        // this.refreshLists()
        this.modalTitle = 'Ubah Jabatan'
        this.form.id = val.row.id
        this.form.nama_jabatan = val.row.nama_jabatan
        this.form.deskripsi_jabatan = val.row.deskripsi_jabatan
        this.$bvModal.show('modalJabatan')
      },
      modalSave(){
        const _formData = new FormData()
        _formData.append('id', this.form.id ?? 0)
        _formData.append('nama_jabatan', this.form.nama_jabatan)
        _formData.append('deskripsi_jabatan', this.form.deskripsi_jabatan)

        postJabatan(_formData).then(response => {
          if(response.data.success)
            this.$bvModal.hide('modalJabatan')
            this.refreshLists()
        })
      },
      modalDelete(){
        // const idDelete = this.form.id

      }
    },
    components: {
      VueGoodTable,
    },
    mounted() {
      this.refreshLists()
    },
  }
</script>