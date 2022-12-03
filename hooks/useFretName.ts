import React, { useState, useEffect } from 'react';
import { useTabStore } from '../stores';
import { getFretName } from '../utils';
export default function useFretName(start:number,string:number,bar:number) {
  const [fretName, setFretName] = useState('');
  useEffect(() => {
    setFretName(getFretName(start,string,bar))
  }, [start,string,bar]);
  return fretName;
}
