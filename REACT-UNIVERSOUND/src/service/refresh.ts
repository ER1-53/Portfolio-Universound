import React from 'react';

export const RefreshContext = React.createContext({
  refresh: false,
  setRefresh: (value: boolean) => {}
});