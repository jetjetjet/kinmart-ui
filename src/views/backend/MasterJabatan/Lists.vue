<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="card card-block card-stretch card-height">
          <div class="card-header d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title mb-0">Tabel Jabatan</h4>
            </div>
            <a href="#" @click="showCreate()" class="btn btn-primary" data-toggle="modal" data-target="#addContact">
              Tambah Baru
            </a>
          </div>
          <div class="card-body">
            <vue-good-table
              :columns="columns"
              :rows="rows"
              :pagination-options="{
                enabled: true,
                mode: 'records',
                perPage: 5,
                position: 'top',
                perPageDropdown: [5, 10, 20],
                dropdownAllowAll: false,
                setCurrentPage: 2,
                nextLabel: 'Selanjutnya',
                prevLabel: 'Sebelumnya',
                rowsPerPageLabel: 'Jumlah baris',
                ofLabel: 'dari',
                pageLabel: 'halaman', // for 'pages' mode
                allLabel: 'Semua',
              }"
            >
              <template slot="table-row" slot-scope="props">
                <span v-if="props.column.field == 'action'">
                  <b-button size="sm" @click="showEdit(props)" variant="primary" class="mr-2" title="Edit">
                    <i class="dripicons dripicons-pencil"></i>
                  </b-button>
                  <b-button size="sm" @click="showDelete(props)" variant="danger" class="mr-2" title="Hapus">
                    <i class="dripicons dripicons-trash"></i>
                  </b-button>
                </span>
                <span v-else>
                  {{props.formattedRow[props.column.field]}}
                </span>
              </template>
            </vue-good-table>
          </div>
          <!-- MODAL DELETE -->
          <b-modal :no-close-on-backdrop="true" id="modalDelete" title="Hapus Jabatan">
            <p>Apakah anda yakin untuk menghapus jabatan <strong>{{ lblJabatan }}</strong> ?</p>
            <template #modal-footer="{ cancel }">
              <b-button variant="primary" @click="cancel()">
                Batal
              </b-button>
              <b-button variant="danger" @click="modalDelete()">
                Hapus
              </b-button>
            </template>
          </b-modal>
          <!-- MODAL SAVE/EDIT -->
          <b-modal :no-close-on-backdrop="true" id="modalJabatan">
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
  import { getJabatanLists, postSaveJabatan, postDeleteJabatan } from '../../../store/modules/jabatan'

  export default {
    name:'JabatanList',
    data () {
      return {
        modalTitle: '',
        lblJabatan: '',
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
            field: 'action',
            sortable: false,
            width: '125px',
            tdClass: 'text-center',
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
      showCreate(){
        this.modalTitle = 'Tambah Jabatan'
        this.form.nama_jabatan = null
        this.form.deskripsi_jabatan = null
        this.$bvModal.show('modalJabatan')
      },
      showEdit(val){
        // this.refreshLists()
        this.modalTitle = 'Ubah Jabatan'
        this.form.id = val.row.id
        this.form.nama_jabatan = val.row.nama_jabatan
        this.form.deskripsi_jabatan = val.row.deskripsi_jabatan
        this.$bvModal.show('modalJabatan')
      },
      showDelete(val){
        this.lblJabatan = val.row.nama_jabatan
        this.form.id = val.row.id
        this.$bvModal.show('modalDelete')
      },
      modalSave(){
        const _formData = new FormData()
        _formData.append('id', this.form.id ?? 0)
        _formData.append('nama_jabatan', this.form.nama_jabatan)
        _formData.append('deskripsi_jabatan', this.form.deskripsi_jabatan)

        postSaveJabatan(_formData).then(response => {
          console.log('res', response)
          if(response.data.success)
            this.$bvModal.hide('modalJabatan')
            this.refreshLists()
        })
      },
      modalDelete(){
        const idDelete = this.form.id
        postDeleteJabatan(idDelete).then(response => {
          if(response.data.success)
            this.$bvModal.hide('modalDelete')
            this.refreshLists()
        })
      },
    },
    components: {
      VueGoodTable,
    },
    mounted() {
      this.refreshLists()
    }
  }
</script>