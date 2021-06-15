//store/modules/suppliers.js
import instance from '../../config/axios'
import { showToast } from '../../_utils/toast'

export const getSuppliersLists = () => {
  return instance.get('supplier/semua')
  .then((data)=>{
    console.log('data', data.data.data)
    return{
      data:data.data.data
    }
  }).catch(() => {
    showToast('error', 'Kesalahan! Tidak dapat memproses.')
  })
}

export const postSaveSuppliers = (data) => {
  return instance.post('supplier/simpan', data)
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

export const postDeleteSuppliers = (idSuppliers) => {
  return instance.post('supplier/hapus/' + idSuppliers)
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