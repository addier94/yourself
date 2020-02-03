
export default function({store, redirect}) {
  const isAdmin = store.getters['auth/isAdmin']

  if (!isAdmin) {
    // navigate later to not Authenticated page
    return redirect('/')
  }
}