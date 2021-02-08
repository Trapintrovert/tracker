import * as React from 'react';

export const navigator = React.forwardRef();

export function navigate(name, params) {
  navigator.current?.navigate(name, params);
}