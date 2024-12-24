import React from "react"
import { postAPI } from "../services/PostService"

const PostContainer = () =>{

    /*  
        автогенерация хуков на основании эндпойнтов
        которые мы описываем 
    */

    /*
        Первый аргументом идет параметр который используется в 
        запросе, у нас его нет, подаем пустую строку.

        Parameters for useFetchAllPostsQuery

    First parameter (arguments args): 
        It can be any value that your endpoint requires. 
        It is typically an object, like { page, limit }, 
        but it can vary based on your endpoint's definition.

    Second parameter (options options): 
        An object with options like 
            skip, 
            selectFromResult, 
            refetchOnMountOrArgChange, 
            pollingInterval, 
            onSuccess, 
            onError, etc.

        These parameters allow you to control the data fetching, 
        refetching behavior, and how your component handles the API response.
    */

        //destructure: data: posts. Посты нужно ТИПИЗИРОВАТЬ
        // так как в query подаем number of pages, то здесь подаем 5
    const {data: posts } = postAPI.useFetchAllPostsQuery(5)

    return (
        <div>
            <div className="post__list">
                {posts.map(
                    el=><PostItem post={post}/>
                )} 

            </div>
        </div>
    )
}

export default PostContainer



  

  