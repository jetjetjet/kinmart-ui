<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="card card-block card-stretch card-height">
          <div class="card-header d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title mb-0">Tabel Member</h4>
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
          <b-modal :no-close-on-backdrop="true" id="modalDelete" title="Hapus Member">
            <p>Apakah anda yakin untuk menghapus member <strong>{{ lblMember }}</strong> ?</p>
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
          <b-modal :no-close-on-backdrop="true" id="modalMember">
            <template #modal-title>
              {{ modalTitle }}
            </template>
            <div>
              <form>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label>Nama Member</label>
                      <input class="form-control" type="hidden" name="id" v-model="form.id">
                      <input class="form-control" type="text"  name="username" v-model="form.nama_member" placeholder="Nama" required>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label>Kontak Member</label>
                      <input class="form-control" type="text"  name="username" v-model="form.kontak_member" placeholder="Kontak">
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label>Alamat Member</label>
                      <textarea class="form-control" name="username" v-model="form.alamat_member" placeholder="Alamat"></textarea>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label>Tanggal Join</label>
                      <flat-pickr class="form-control" v-model="form.tgl_join" required></flat-pickr>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label>Poin</label>
                      <input class="form-control" type="number" name="username" v-model="form.poin" placeholder="100">
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label>Diskon</label>
                      <input class="form-control" type="number"  name="username" v-model="form.diskon">
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
  import { getMemberLists, postSaveMember, postDeleteMember } from '../../../store/modules/member'

  export default {
    name:'MemberList',
    data () {
      return {
        modalTitle: '',
        lblMember: '',
        columns:[
          {
            label: 'id',
            field: 'id',
            hidden: true
          }, {
            label: 'Nama Member',
            field: 'nama_member'
          }, {
            label: 'Kontak Member',
            field: 'kontak_member'
          }, {
            label: 'Alamat Member',
            field: 'alamat_member'
          }, {
            label: 'Tanggal Join',
            field: 'tgl_join',
            type: 'date',
            dateInputFormat: 'yyyy-MM-dd HH:mm:ss', // expects 2018-03-16
            dateOutputFormat: 'dd-MM-yyyy', // outputs Mar 16th 2018
          }, {
            label: 'Poin',
            field: 'poin'
          }, {
            label: 'Diskon',
            field: 'diskon'
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
          nama_member: null,
          kontak_member: null,
          alamat_member: null,
          tgl_join: null,
          poin: null,
          diskon: null,
        }
      }
    },
    methods: {
      refreshLists(){
        getMemberLists().then(data => {
          this.rows = data.data
        })
      },
      showCreate(){
        this.modalTitle = 'Tambah Member'
        this.form.nama_member = null
        this.form.kontak_member = null
        this.form.alamat_member = null
        this.form.tgl_join = null
        this.form.poin = null
        this.form.diskon = null
        this.$bvModal.show('modalMember')
      },
      showEdit(val){
        // this.refreshLists()
        this.modalTitle = 'Ubah Member'
        this.form.id = val.row.id
        this.form.nama_member = val.row.nama_member
        this.form.kontak_member = val.row.kontak_member
        this.form.alamat_member = val.row.alamat_member
        this.form.tgl_join = val.row.tgl_join
        this.form.poin = val.row.poin
        this.form.diskon = val.row.diskon
        this.$bvModal.show('modalMember')
      },
      showDelete(val){
        this.lblMember = val.row.nama_member
        this.form.id = val.row.id
        this.$bvModal.show('modalDelete')
      },
      modalSave(){
        const _formData = new FormData()
        _formData.append('id', this.form.id ?? 0)
        _formData.append('nama_member', this.form.nama_member)
        _formData.append('kontak_member', this.form.kontak_member)
        _formData.append('alamat_member', this.form.alamat_member)
        _formData.append('tgl_join', this.form.tgl_join)
        _formData.append('poin', this.form.poin)
        _formData.append('diskon', this.form.diskon)


        postSaveMember(_formData).then(response => {
          console.log('res', response)
          if(response.data.success)
            this.$bvModal.hide('modalMember')
            this.refreshLists()
        })
      },
      modalDelete(){
        const idDelete = this.form.id
        postDeleteMember(idDelete).then(response => {
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