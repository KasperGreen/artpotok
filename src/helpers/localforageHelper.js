import localforage from 'localforage'

export default {
  connectState: (Comonent) => {
    localforage.getItem(Comonent.storage_name).then((data) => {
      if (data) {
        Comonent.setState(data)
      }
    })

  }
}
