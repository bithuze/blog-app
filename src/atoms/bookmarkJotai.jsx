import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';


export const bookmarksAtom = atomWithStorage('blog_bookmarks', []);