<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="card card-block card-stretch card-height">
          <div class="card-header d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title mb-0">Tabel Suppliers</h4>
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
          <b-modal :no-close-on-backdrop="true" id="modalDelete" title="Hapus Suppliers">
            <p>Apakah anda yakin untuk menghapus suppliers <strong>{{ lblSuppliers }}</strong> ?</p>
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
          <b-modal :no-close-on-backdrop="true" id="modalSuppliers">
            <template #modal-title>
              {{ modalTitle }}
            </template>
            <div>
              <form>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label>Nama Suppliers</label>
                      <input class="form-control" type="hidden" name="id" v-model="form.id">
                      <input class="form-control" type="text"  name="username" v-model="form.nama" placeholder="Nama">
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label>Kontak Suppliers</label>
                      <input class="form-control" type="hidden" name="id" v-model="form.id">
                      <input class="form-control" type="text"  name="username" v-model="form.kontak" placeholder="Kontak">
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label>Alamat Suppliers</label>
                      <textarea class="form-control"  name="username" v-model="form.alamat" placeholder="Alamat"></textarea>
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
  import { getSuppliersLists, postSaveSuppliers, postDeleteSuppliers } from '../../../store/modules/suppliers'

  export default {
    name:'SuppliersList',
    data () {
      return {
        modalTitle: '',
        lblSuppliers: '',
        columns:[
          {
            label: 'id',
            field: 'id',
            hidden: true
          }, {
            label: 'Nama Suppliers',
            field: 'nama'
          }, {
            label: 'Kontak Suppliers',
            field: 'kontak'
          }, {
            label: 'Alamat Suppliers',
            field: 'alamat'
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
          nama: null,
          kontak: null,
          alamat: null
        }
      }
    },
    methods: {
      refreshLists(){
        getSuppliersLists().then(data => {
          this.rows = data.data
        })
      },
      showCreate(){
        this.modalTitle = 'Tambah Suppliers'
        this.form.id = '0'
        this.form.nama = null
        this.form.kontak = null
        this.form.alamat = null
        this.$bvModal.show('modalSuppliers')
      },
      showEdit(val){
        // this.refreshLists()
        this.modalTitle = 'Ubah Suppliers'
        this.form.id = val.row.id
        this.form.nama = val.row.nama
        this.form.kontak = val.row.kontak
        this.form.alamat = val.row.alamat
        this.$bvModal.show('modalSuppliers')
      },
      showDelete(val){
        this.lblSuppliers = val.row.nama
        this.form.id = val.row.id
        this.$bvModal.show('modalDelete')
      },
      modalSave(){
        const _formData = new FormData()
        _formData.append('id', this.form.id ?? 0)
        _formData.append('nama', this.form.nama)
        _formData.append('kontak', this.form.kontak)
        _formData.append('alamat', this.form.alamat)

        postSaveSuppliers(_formData).then(response => {
          console.log('res', response)
          if(response.data.success)
            this.$bvModal.hide('modalSuppliers')
            this.refreshLists()
        })
      },
      modalDelete(){
        const idDelete = this.form.id
        postDeleteSuppliers(idDelete).then(response => {
          if(response.data.success)
            this.$bvModal.hide('modalDelete')
            this.refreshLists()
        })
      },
    },
    components: {
      VueGoodTable
    },
    mounted() {
      this.refreshLists()
    }
  }
</script>