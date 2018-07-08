import localforage from 'localforage'

export default {
  connectState: (Comonent) => {
    localforage.getItem(Comonent.constructor.name).then((data) => {
      if (data) {
        Comonent.setState(data)
      }
    })

  }
}
