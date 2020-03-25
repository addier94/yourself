
// Commands
const commands = {
  'DELETE_BLOG' : 'DELETE_BLOG',
  'EDIT_BLOG': 'EDIT_BLOG',
}

const createOption = (name, command) => ({name, command})

// Options
// Published Blogs
const DELETE_BLOG = createOption('Eliminar Articulo', commands.DELETE_BLOG)
const EDIT_BLOG = createOption('Editar Articulo', commands.EDIT_BLOG)

// Options
// Drafts Blogs
const DELETE_DRAFT = createOption('Eliminar Articulo', commands.DELETE_BLOG)
const EDIT_DRAFT = createOption('Editar Articulo', commands.EDIT_BLOG)

export const createPublishedOptions = () => [EDIT_BLOG, DELETE_BLOG]
export const createDraftsOptions = () => [EDIT_DRAFT, DELETE_DRAFT]