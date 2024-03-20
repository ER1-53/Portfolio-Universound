// Create a React context for refreshing data
import React from 'react';

export const RefreshContext = React.createContext({
  refresh: false, // Initial value for refresh state
  setRefresh: (value: boolean) => {} // Placeholder function to update the refresh state
});
