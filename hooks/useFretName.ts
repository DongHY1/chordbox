import React, { useState, useEffect } from 'react';
import { useTabStore } from '../stores';
export default function useFretName(string:number,bar:number) {
  const [fretName, setFretName] = useState('');
  const computedFretName = ()=>{
    return 'E'
  }
  useEffect(() => {
    setFretName(computedFretName())
  }, [string,bar]);

  return fretName;
}
