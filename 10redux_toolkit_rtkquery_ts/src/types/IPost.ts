/*
endpoints: (build)=>({
            //пишем функцию как ключ а значением будет объект build (на выбор:
            //query (get) - запрос, mutation (post, put) - изменение)
            fetchAllPosts: build.query<IPost[], number>(
                {
                    //function that returns an object, оборачиваем в круглые скобки
                    query: ()=> ({ //press ctrl+space to see options to add
                        //what we can add to the link, use backticks
                        url: `/posts`
                    }) 
                }
            )
        })  


*/

//тип дженерик для fetchAllPosts: build.query<IPost[], number>
export interface IPost{
    id: number, 
    title:string, 
    body:string
}