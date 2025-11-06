import { useState, useEffect } from "react";

export const useFetch = (url) => { //viene como parametron  
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null
  });

  const getFetch = async () => {
    try {
      setState({
        ...state,
        isLoading: true,
      });

      const resp = await fetch(url);
      
      if (!resp.ok) {
        throw new Error('Error en la petición');
      }
      
      const data = await resp.json();

      await new Promise((resolve) => setTimeout(resolve, 2000));

      setState({
        data: data,
        isLoading: false,
        error: null
      });
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        error: error.message
      });
    }
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error
  };
};