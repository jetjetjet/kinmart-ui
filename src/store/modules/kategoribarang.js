//store/modules/kategoribarang.js
import instance from '../../config/axios'
import { showToast } from '../../_utils/toast'

export const getKategoriBarangLists = () => {
  return instance.get('kategori_barang/semua')
  .then((data)=>{
    console.log('data', data.data.data)
    return{
      data:data.data.data
    }
  }).catch(() => {
    showToast('error', 'Kesalahan! Tidak dapat memproses.')
  })
}

export const postSaveKategoriBarang = (data) => {
  return instance.post('kategori_barang/simpan', data)
    .then((respon) => {
      if(!respon.data.success)
      var type = respon.data.success ? 'success' : 'error'

      showToast(type, respon.data.messages[0])
      return {
        data : respon.data
      }
    }).catch(() => {
      showToast('error', 'Kesalahan! Tidak dapat memproses.')
    })
}

export const postDeleteKategoriBarang = (idKategoriBarang) => {
  return instance.post('kategori_barang/hapus/' + idKategoriBarang)
    .then((response) => {
      if(!response.data.success)
      var status = response.data.success ? 'success' : 'error'

      showToast(status, response.data.messages[0])
      return {
        data : response.data
      }
    }).catch(() => {
      showToast('error', 'Kesalahan! Tidak dapat memproses.')
    })
}

export default {
  fetch: instance,
}