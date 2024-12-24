/*
    https://redux-toolkit.js.org/rtk-query/overview

    https://egghead.io/courses/rtk-query-basics-query-endpoints-data-flow-and-typescript-57ea3c43?af=7pnhj6
        Video tutorial: RTK Query (Lenz Weber-Tronic)

    https://www.youtube.com/watch?v=CT0evS7yOxs
        Apollo Client with Lenz Weber-Tronic and Jerel Miller | TypeScript Showcase #8

    RTK Query (Redux Toolkit Query), RTK Query is a library 
    for data fetching and caching that is part of the Redux 
    Toolkit. It integrates deeply with Redux, and is designed 
    to reduce the boilerplate and complexities of handling 
    asynchronous requests and API data.
*/



import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"
/*
    createApi(): The core of RTK Query's functionality. 
    It allows you to define a set of "endpoints" that describe 
    how to retrieve data from backend APIs and other async sources,
    including the configuration of how to fetch and transform 
    that data. In most cases, you should use this once per app,
    with "one API slice per base URL" as a rule of thumb.
*/
export const postAPI = createApi(
    {
        /*
            In RTK Query (по русски: запрос) (Redux Toolkit Query), 
            reducerPath is a property that specifies the key 
            under which the RTK Query slice of state will be 
            stored in the Redux store. This is particularly 
            important because RTK Query manages a slice of 
            Redux state internally to track things like cached 
            data, loading states, and errors related to API 
            requests.
            By setting a custom reducerPath, 
            you define the namespace for the part of the 
            Redux store that will be dedicated to RTK Query’s
             API slice. If you don’t specify a reducerPath, 
             RTK Query will use the default value "api".
        */

        reducerPath: 'postAPI',
        /*
            fetchBaseQuery(): A small wrapper around fetch 
            that aims to simplify requests. Intended as the
            recommended baseQuery to be used in createApi for
            the majority of users.
        */
        baseQuery: fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com/'}), 
        
        /*
            Endpoints -
            точки взаимодействия с API:
            In RTK Query (Redux Toolkit Query), endpoints are the API operations that define how your app interacts with an external API. Each endpoint is a function that describes a specific operation, such as fetching data, posting data, updating resources, or deleting resources.
            
            Endpoints = функция, которая возвращает некоторый объект: поэтому оборочиваем
            фигурные скобки в круглые.
        */


        /*
            The build object you see inside the endpoints 
            function in RTK Query is part of the API service 
            builder pattern. It provides a set of methods 
            that are used to define each endpoint (such as 
            query for GET requests or mutation for POST, PUT, 
            DELETE requests) when setting up the API in Redux 
            Toolkit Query.
        */
        endpoints: (build)=>({
            //пишем функцию как ключ а значением будет объект build (на выбор:
            //query (get) - запрос, mutation (post, put) - изменение)
            fetchAllPosts: build.query(
                {
                    //function that returns an object, оборачиваем в круглые скобки
                    query: ()=> ({ //press ctrl+space to see options to add
                        //what we can add to the link, use backticks
                        url: `/posts`
                    }) 
                }
            )
        })  
    }
)
//Pause at 22:00

