import * as React from 'react';

export const navigator = React.forwardRef();

export const navigate = (name, params) => {
  navigator.current?.navigate(name, params);
}