// import { useState, useEffect } from "react";

// type State<T> =
// | { status: 'loading' }
// | { status: 'error'; error: Error }
// | { status: 'ready'; data: T };

// export function useFetch<T>(url: string): State<T> {
// const [state, setState] = useState<State<T>>({ status: 'loading' });
// useEffect(() => { 
//     const controller = new AbortController();
//     setState({ status: 'loading' });

//     fetch(url, { signal: controller.signal })
//     .then((res) => {
//         if (!res.ok) throw new Error(`HTTP ${res.status}`);
//         return res.json();
//     })
//     .then((data) => setState({ status: 'ready', data }))
//     .catch((err) => {
//         if (err.name !== 'AbortError'){
//             setState({ status: 'error', error: err });
//         }
//     });

//     return () => controller.abort();
//  }, [url]);
// return state;
// }