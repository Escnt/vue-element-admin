/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const componentsRouter = {
  path: '/components',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ComponentDemo',
  meta: {
    title: 'components',
    icon: 'component'
  },
  children: [
    {
      path: 'button',
      component: () => import('@/views/button/button'),
      name: 'Button',
      meta: { title: '按钮' }
    },
    {
      path: 'form',
      component: () => import('@/views/form/form'),
      name: 'form',
      meta: { title: '表单' }
    },
    {
      path: 'tinymce',
      component: () => import('@/views/components-demo/tinymce'),
      name: 'TinymceDemo',
      meta: { title: 'tinymce' }
    },

    {
      path: 'step',
      component: () =>
        import('@/views/components-demo/step'),
      name: 'stepDemo',
      meta: { title: 'step' }
    },
    {
      path: 'dialog',
      component: () =>
        import('@/views/components-demo/dialog'),
      name: 'dialogDemo',
      meta: { title: 'dialog' }
    },
    {
      path: 'card',
      component: () =>
        import('@/views/components-demo/card'),
      name: 'cardDemo',
      meta: { title: 'card' }
    },
    {
      path: 'timeLine',
      component: () =>
        import('@/views/components-demo/timeLine'),
      name: 'timeLineDemo',
      meta: { title: 'timeLine' }
    },
    {
      path: 'drawer',
      component: () => import('@/views/components-demo/drawer'),
      name: 'drawerDemo',
      meta: { title: 'drawer' }
    },
    {
      path: 'image',
      component: () =>
        import('@/views/components-demo/image'),
      name: 'imageDemo',
      meta: { title: 'image' }
    },
    {
      path: 'loading',
      component: () =>
        import('@/views/components-demo/loading'),
      name: 'loadingDemo',
      meta: { title: 'loading' }
    },
    {
      path: 'anchor',
      component: () =>
        import('@/views/components-demo/anchor-point'),
      name: 'anchor',
      meta: { title: 'anchor' }
    },
    // {
    //   path: 'markdown',
    //   component: () => import('@/views/components-demo/markdown'),
    //   name: 'MarkdownDemo',
    //   meta: { title: 'markdown' }
    // },
    // {
    //   path: 'json-editor',
    //   component: () => import('@/views/components-demo/json-editor'),
    //   name: 'JsonEditorDemo',
    //   meta: { title: 'jsonEditor' }
    // },
    // {
    //   path: 'split-pane',
    //   component: () => import('@/views/components-demo/split-pane'),
    //   name: 'SplitPaneDemo',
    //   meta: { title: 'splitPane' }
    // },
    // {
    //   path: 'avatar-upload',
    //   component: () => import('@/views/components-demo/avatar-upload'),
    //   name: 'AvatarUploadDemo',
    //   meta: { title: 'avatarUpload' }
    // },
    // {
    //   path: 'dropzone',
    //   component: () => import('@/views/components-demo/dropzone'),
    //   name: 'DropzoneDemo',
    //   meta: { title: 'dropzone' }
    // },
    {
      path: 'sticky',
      component: () => import('@/views/components-demo/sticky'),
      name: 'StickyDemo',
      meta: { title: 'sticky' }
    },
    // {
    //   path: 'count-to',
    //   component: () => import('@/views/components-demo/count-to'),
    //   name: 'CountToDemo',
    //   meta: { title: 'countTo' }
    // },
    // {
    //   path: 'mixin',
    //   component: () => import('@/views/components-demo/mixin'),
    //   name: 'ComponentMixinDemo',
    //   meta: { title: 'componentMixin' }
    // },
    {
      path: 'back-to-top',
      component: () => import('@/views/components-demo/back-to-top'),
      name: 'BackToTopDemo',
      meta: { title: 'backToTop' }
    },
    {
      path: 'drag-dialog',
      component: () => import('@/views/components-demo/drag-dialog'),
      name: 'DragDialogDemo',
      meta: { title: 'dragDialog' }
    },
    {
      path: 'drag-select',
      component: () => import('@/views/components-demo/drag-select'),
      name: 'DragSelectDemo',
      meta: { title: 'dragSelect' }
    }
    // {
    //   path: 'dnd-list',
    //   component: () => import('@/views/components-demo/dnd-list'),
    //   name: 'DndListDemo',
    //   meta: { title: 'dndList' }
    // },
    // {
    //   path: 'drag-kanban',
    //   component: () => import('@/views/components-demo/drag-kanban'),
    //   name: 'DragKanbanDemo',
    //   meta: { title: 'dragKanban' }
    // }
  ]
}

export default componentsRouter
