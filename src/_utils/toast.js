import Vue from 'vue'

export const showToast = (type, msg) => {
  Vue.$toast.open({
    message: msg,
    type: type,
  })
}