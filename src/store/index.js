import { create } from 'zustand'

const useStoreLocal = create((set) => ({
    post_id: 1,
    post_title: 1,

    setPostId: (id) => set(() => ({ post_id: id })),
    setPostTitle: (title) => set(() => ({ post_title: title })),

}))

export { useStoreLocal }