<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="card card-block card-stretch card-height">
          <div class="card-header d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title mb-0">Tabel Kategori Barang</h4>
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
          <b-modal :no-close-on-backdrop="true" id="modalDelete" title="Hapus KategoriBarang">
            <p>Apakah anda yakin untuk menghapus kategori barang <strong>{{ lblKategoriBarang }}</strong> ?</p>
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
          <b-modal :no-close-on-backdrop="true" id="modalKategoriBarang">
            <template #modal-title>
              {{ modalTitle }}
            </template>
            <div>
              <form>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label>Nama Kategori Barang</label>
                      <input class="form-control" type="hidden" name="id" v-model="form.id">
                      <input class="form-control" type="text"  name="username" v-model="form.nama_kb" placeholder="Nama Kategori Barang">
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label>Deskripsi Kategori Barang</label>
                      <textarea class="form-control" name="username" v-model="form.deskripsi_kb" placeholder="Deskripsi Kategori Barang"></textarea>
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
  import { getKategoriBarangLists, postSaveKategoriBarang, postDeleteKategoriBarang } from '../../../store/modules/kategoribarang'

  export default {
    name:'KategoriBarangList',
    data () {
      return {
        modalTitle: '',
        lblKategoriBarang: '',
        columns:[
          {
            label: 'id',
            field: 'id',
            hidden: true
          }, {
            label: 'Nama Kategori Barang',
            field: 'nama_kb'
          }, {
            label: 'Deskripsi Kategori Barang',
            field: 'deskripsi_kb'
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
          nama_kb: null,
          deskripsi_kb: null
        }
      }
    },
    methods: {
      refreshLists(){
        getKategoriBarangLists().then(data => {
          this.rows = data.data
        })
      },
      showCreate(){
        this.modalTitle = 'Tambah Kategori Barang'
        this.form.id = '0'
        this.form.nama_kb = null
        this.form.deskripsi_kb = null
        this.$bvModal.show('modalKategoriBarang')
      },
      showEdit(val){
        // this.refreshLists()
        this.modalTitle = 'Ubah Kategori Barang'
        this.form.id = val.row.id
        this.form.nama_kb = val.row.nama_kb
        this.form.deskripsi_kb = val.row.deskripsi_kb
        this.$bvModal.show('modalKategoriBarang')
      },
      showDelete(val){
        this.lblKategoriBarang = val.row.nama_kb
        this.form.id = val.row.id
        this.$bvModal.show('modalDelete')
      },
      modalSave(){
        const _formData = new FormData()
        _formData.append('id', this.form.id ?? 0)
        _formData.append('nama_kb', this.form.nama_kb)
        _formData.append('deskripsi_kb', this.form.deskripsi_kb)

        postSaveKategoriBarang(_formData).then(response => {
          console.log('res', response)
          if(response.data.success)
            this.$bvModal.hide('modalKategoriBarang')
            this.refreshLists()
        })
      },
      modalDelete(){
        const idDelete = this.form.id
        postDeleteKategoriBarang(idDelete).then(response => {
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