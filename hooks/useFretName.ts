import React, { useState, useEffect } from 'react';
import { useTabStore } from '../stores';
import { getFretName } from '../utils';
export default function useFretName(string:number,bar:number) {
  const [fretName, setFretName] = useState('');
  useEffect(() => {
    setFretName(getFretName(string,bar))
  }, [string,bar]);
  return fretName;
}
