import {  useEffect } from "react";
import {useLocalStorage} from './useLocalStorage';
export const useDarkMode = (initialValue) => {
    const [someValue, setSomeValue] = useLocalStorage('Dark Theme Active', initialValue);
  
    useEffect(() => {
      const bodyElement = document.querySelector('body');
      if(someValue){
        bodyElement.classList.add('dark-mode');
      }else{
        bodyElement.classList.remove('dark-mode');
      }
    },[someValue]);
  
    return [ someValue, setSomeValue]
  };