import { createSelector } from 'reselect';

const selectHome = state => state.home;



export const selectHomeHome = createSelector(
  [selectHome],
  home => home.data
);

export const selectHomeHero = createSelector(
  [selectHome],
  home => home.data.hero
);

export const selectHomeInspiration = createSelector(
  [selectHome],
  home => home.data.inspiration
);

export const selectHomeValues = createSelector(
  [selectHome],
  home => home.data.values
);

export const selectHomeContact = createSelector(
  [selectHome],
  home => home.data.contact
);


export const selectHomeFooter = createSelector(
  [selectHome],
  home => home.data.footer
);

export const selectHomeOnEdit = createSelector(
  [selectHome],
  home => home.onEdit
);